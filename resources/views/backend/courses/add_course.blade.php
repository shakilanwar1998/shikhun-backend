@extends('layouts-back.layout-main')

@section('content')

<section class="page-section">

<div class="row">
    <div class="col-md-6">
        <div class="d-flex align-items-center">
            <div class="heading primary-color">
                <h2>ADD NEW COURSE</h2>
            </div>
        </div>
    </div>
</div>

<div class="card mb-4 mt-5">
    <h3 class="card-header">Add Course</h3>

    <div class="card-body">
        <form method="POST" action="{{ route('course.store') }}" enctype="multipart/form-data">
        	@csrf
            
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label class="form-label">Teachers <span class="text-danger">*</span></label>
                    <select class="selectpicker" name="user_id" data-style="btn-default" data-live-search="true" required>
                        @if(count($trainers) > 0)
                            <option value="">Select Teacher</option>
                            @foreach($trainers as $trainer)
                                <option value="{{$trainer->id}}">{{$trainer->first_name}} {{$trainer->last_name}}</option>
                            @endforeach
                        @endif
                    </select>

                    @error('user_id')
                        <span class="text-danger" role="alert">
                            <strong>{{ $errors->first('user_id') }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="form-group col-md-6">
                    <label class="form-label">Course <span class="text-danger">*</span></label>
                    <select class="selectpicker" name="category_id" data-style="btn-default" data-live-search="true" required>
                        @if(!empty($categories))
                        <option value="">Select category</option>
                        @foreach($categories as $category)
                            <option value="{{$category->id}}">{{$category->name}}</option>
                        @endforeach
                        @endif
                    </select>

                    @error('category_id')
                        <span class="text-danger" role="alert">
                            <strong>{{ $errors->first('category_id') }}</strong>
                        </span>
                    @enderror
                </div>
            </div>


            <div class="form-group">
                <label class="form-label">Title <span class="text-danger">*</span></label>
                <input type="text" name="title" value="{{ old('title') }}" class="form-control @error('title') is-invalid @enderror" id="title" required>

                @error('title')
                    <span class="text-danger" role="alert">
                        <strong>{{ $errors->first('title') }}</strong>
                    </span>
                @enderror
            </div>

            <div class="form-group">
                <label class="form-label">Full Description</label>
                <textarea id="bs-markdown" name="description" class="form-control" rows="5"></textarea>

                @error('description')
                    <span class="text-danger" role="alert">
                        <strong>{{ $errors->first('description') }}</strong>
                    </span>
                @enderror
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label class="form-label">Price</label>
                    <input id="price" type="number" class="form-control @error('price') is-invalid @enderror" name="price" value="{{ old('price') ? old('price') : 0 }}">

                    @error('price')
                        <span class="text-danger" role="alert">
                            <strong>{{ $errors->first('price') }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="form-group col-md-4">
                    <label class="form-label">Course Image</label>
                    <input id="course_image" type="file" class="form-control @error('course_image') is-invalid @enderror" name="course_image" value="{{ old('course_image') }}">

                    @error('course_image')
                        <span class="text-danger" role="alert">
                            <strong>{{ $errors->first('course_image') }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="form-group col-md-4">
                    <label class="form-label">Start Date</label>
                    <input id="start_date" type="date" class="form-control @error('start_date') is-invalid @enderror" name="start_date" value="{{ old('start_date') }}">

                    @error('start_date')
                        <span class="text-danger" role="alert">
                            <strong>{{ $errors->first('start_date') }}</strong>
                        </span>
                    @enderror
                </div>
            </div>


            <div class="form-group">
                <label class="form-label">Add Video</label>
                <select class="selectpicker" name="media_type" id="media_type" data-style="btn-default" data-live-search="true">
                    <option value="none">Select one</option>
                    <option value="youtube">Youtube</option>
                    <option value="upload">Upload</option>
                    <option value="embed">Embed</option>
                </select>

                @error('media_type')
                    <span class="text-danger" role="alert">
                        <strong>{{ $errors->first('media_type') }}</strong>
                    </span>
                @enderror
            </div>

            <div class="form-group" id="upload_video">
               
            </div>

            <div class="form-group" id="upload_video">
               <label class="form-label">
                    <i class="fa fa-check-circle text-success"></i> <b>Youtube</b> : Go to Youtube <i class="fas fa-long-arrow-alt-right"></i> Go to video you want to display <i class="fas fa-long-arrow-alt-right"></i> click on share button below video. Copy that links and paste in above text box
                </label>
                <br/>
                <label class="form-label">
                    <i class="fa fa-check-circle text-success"></i> <b>Upload</b> : Upload mp4 file in file input
                </label>
                <br/>
                <label class="form-label">
                    <i class="fa fa-check-circle text-success"></i> <b>Embed</b> : Copy / Paste embed code in above text box
                </label>
            </div>

            <div class="form-row">
                <div class="form-group col-md-3">
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" name="published" class="custom-control-input">
                      <span class="custom-control-label"> Publish</span>
                    </label>

                    @error('publish')
                        <span class="text-danger" role="alert">
                            <strong>{{ $errors->first('publish') }}</strong>
                        </span>
                    @enderror
                </div>
                
                <div class="form-group col-md-3">
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" name="featured" class="custom-control-input">
                      <span class="custom-control-label">Featured</span>
                    </label>

                    @error('featured')
                        <span class="text-danger" role="alert">
                            <strong>{{ $errors->first('featured') }}</strong>
                        </span>
                    @enderror
                </div>
                
                <div class="form-group col-md-3">
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" name="trending" class="custom-control-input">
                      <span class="custom-control-label">Trending</span>
                    </label>

                    @error('trending')
                        <span class="text-danger" role="alert">
                            <strong>{{ $errors->first('trending') }}</strong>
                        </span>
                    @enderror
                </div>
                
                <div class="form-group col-md-3">
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" name="free" class="custom-control-input">
                      <span class="custom-control-label">Free</span>
                    </label>

                    @error('free')
                        <span class="text-danger" role="alert">
                            <strong>{{ $errors->first('free') }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Save Course</button>
            <a href="#" class="btn btn-warning">Cancle</a>
        </form>
    </div>
</div>

</section>
@endsection