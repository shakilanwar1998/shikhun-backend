<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Services\CategoryService;

class CategoryController extends Controller
{
    public $service;

	public function __construct(CategoryService $service)
	{
		$this->service = $service;
	}

    public function index()
    {
    	$categories = $this->service->all();
    	return view('backend.category.category_list', compact('categories'));
    }

    public function store(Request $request)
    {
    	$category = new Category();
    	$category->name =  $request['name'];
    	$category->status = 1;
    	$category->slug = str_slug($request['name']);

        $category->save();
        $categories = $this->service->all();

        if($request->ajax()) {
            return ['view' => view('backend.category.render_view', compact('categories'))->render(), 'success' => true, 'message' => CategoryService::CREATED_SUCCESSFULLY];
        }
    }

    public function update(Request $request)
    {
    	$id = $request->id;
    	$category = Category::findOrFail($id);
        $category->name = $request->name;
        $category->slug = str_slug($request->name);
        $category->icon = $request->icon;

        $category->save();

    	if($request->ajax()) {
            return ['view' => view('backend.category.render_update', compact('category'))->render(), 'success' => true, 'message' => CategoryService::UPDATED_SUCCESSFULLY];
        }
    }

    public function delete(Request $request)
    {
        $id = $request->id;
    	$category = $this->service->find($id);
        $category->delete();

    	return response()->json(['success' => true, 'message' => CategoryService::DELETED_SUCCESSFULLY]);
    }
}
