<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\CourseService;
use App\Services\TeacherService;
use App\Services\CategoryService;
use App\Enums\Roles;
use App\Http\Requests\CourseRequest;
use Illuminate\Support\Str;
use File;
use App\Models\Media;

class CourseController extends Controller
{
   	public $service;
    public $teacher;
    public $category;

	public function __construct(CourseService $service, TeacherService $teacher, CategoryService $category)
	{
		$this->service  = $service;
        $this->teacher  = $teacher;
        $this->category = $category;
	}

	public function index()
	{
        $courses = $this->service->with(['category', 'teachers'])->get();
       
		return view('backend.courses.course_list', compact('courses'));
	}

	public function addCourse()
    {
        $trainers = $this->teacher->getFindBy(Roles::TEACHER, 'role_id');
        $categories = $this->category->all();
    	return view('backend.courses.add_course', compact('trainers', 'categories'));
    }

    public function store(CourseRequest $req)
    {
    	$data = $req->validated();
        $data['slug'] = str_slug($req->title);
        $filename = null;
        $teacher = $data['user_id'];
        $request = request()->all();
       
        if(!empty($req->file('course_image'))){
            $file = $req->file('course_image');
            $filename = $this->fileUpload($file, storage_path('app/public/course_img/'));
        }

        $data['course_image'] = ($filename != null) ? $filename : null;
        $data['published']  = isset($data['published']) ? 1 : 0;
        $data['featured'] = isset($data['featured']) ? 1 : 0;
        $data['trending'] = isset($data['trending']) ? 1 : 0;
        $data['free'] = isset($data['free']) ? 1 : 0;
        unset($data['user_id']);

        $course = $this->service->create($data);

        //Saving  videos
        if ($request['media_type'] != "") {
            $model_type = Course::class;
            $model_id = $course->id;
            $size = 0;
            $media = '';
            $url = '';
            $video_id = '';
            $name = $course->title . ' - video';

            if ($request['media_type'] == 'youtube') {
                $video = $request['video'];
                $url = $video;
                $video_id = array_last(explode('/', $request['video']));
                $media = Media::where('url', $video_id)
                    ->where('type', '=', $request['media_type'])
                    ->where('model_type', '=', 'App\Models\Course')
                    ->where('model_id', '=', $course->id)
                    ->first();
                $size = 0;
            } elseif ($request['media_type'] == 'upload') {

                $video_id = $request['video_file'];
                $url = storage_path('app/public/course_video/' . $video_id);
                $media = Media::where('url', $video_id)
                    ->where('type', '=', $request['media_type'])
                    ->where('model_type', '=', 'App\Models\Course')
                    ->where('model_id', '=', $course->id)
                    ->first();

                if ($request['video_subtitle'] && $request['video_subtitle'] != null) {
                    $subtitle_id = $request['video_subtitle'];
                    $subtitle_url = storage_path('app/public/course_video/' . $subtitle_id);

                    $subtitle = Media::where('url', $subtitle_id)
                        ->where('type', '=', 'subtitle')
                        ->where('model_type', '=', 'App\Models\Course')
                        ->where('model_id', '=', $course->id)
                        ->first();
                    if ($subtitle == null) {
                        $subtitle = new Media();
                        $subtitle->model_type = $model_type;
                        $subtitle->model_id = $model_id;
                        $subtitle->name = $name.' - subtitle';
                        $subtitle->url = $subtitle_url;
                        $subtitle->type = 'subtitle';
                        $subtitle->file_name = $subtitle_id;
                        $subtitle->size = 0;
                        $subtitle->save();
                    }
                }
            } elseif ($request['media_type'] == 'embed') {
                $url = $request['video'];
                $filename = $course->title . ' - video';
            }

            if ($media == null) {
                $media = new Media();
                $media->model_type = $model_type;
                $media->model_id = $model_id;
                $media->name = $name;
                $media->url = $url;
                $media->type = $request['media_type'];
                $media->file_name = $video_id;
                $media->size = 0;
                $media->save();
            }
        }

        $course->teachers()->sync($teacher);

    	return redirect()->back()->with(['alert-type' => 'notice', 'message' => CourseService::CREATED_SUCCESSFULLY]);
    }


    public function show($id)
    {
    	$categories = $this->category->all();
    	$images = $this->image->all();

    	$stock = $this->service->with('stock_images')->find($id);
    	
    	return view('backend.manage-stock.stock-update', compact('categories', 'images', 'stock'));
    }


    public function update(StockRequest $request, $id)
    {
    	$data = $request->validated();
    	$data['hire'] = (isset($data['hire'])) ? 1 : 0;
    	$data['sale'] = (isset($data['sale'])) ? 1 : 0;

    	$images = array_values($data['images']);
    	unset($data['images']);

    	$stock = $this->service->find($id);

    	$stock->update($data);

    	$stock->stock_images()->sync($images);

    	return redirect()->back()->with(['alert-type' => 'notice', 'message' => StockService::UPDATED_SUCCESSFULLY]);
    }


    public function delete(Request $request)
    {
    	$id = $request->id; 

    	$stock = $this->service->find($id);

    	if($stock->stock_images()){
    		$stock->stock_images()->detach();
    	}

    	$stock->delete();

    	return response()->json(['success' => true, 'message' => CategoryService::DELETED_SUCCESSFULLY]);
    }

    private function fileUpload($file,$path){
        $directory = $path;
        File::isDirectory($directory) or File::makeDirectory($directory, 0777, true, true);

        $image = $file;
        $filename = preg_replace('/\..+$/', '', $image->getClientOriginalName()) . '_' . Str::random(8) . '.' . $image->getClientOriginalExtension();
        $file_name_share = str_replace(' ', '', $filename);
        $image->move($directory, $file_name_share);
        return $file_name_share;
    }
}
