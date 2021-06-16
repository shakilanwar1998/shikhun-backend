@extends('layouts-back.layout-main')

@section('content')

<section class="page-section">

<div class="row">
    <div class="col-md-6">
        <div class="d-flex align-items-center">
            <div class="heading primary-color">
                <h3>MANAGE COURSES</h3>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12 mt-5">
        <div class="card">
            <div class="card-header">
                <a href="{{ route('course.add') }}"><button class="btn btn-success float-right">Add Course</button></a>
            </div>
            <div class="card-datatable table-responsive">
                <table id="data-list" class="datatables-userlist table table-striped table-bordered" style="text-size">
                    <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Trainer</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Lessons</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="table-data">
                        
                        @if(!empty($courses))
                            @foreach($courses as $key => $course)
                            <tr id="data-row{{$course->id}}">
                                <td>{{ $course->id }}</td>
                                <td>{{ ($course->teachers != null) ? : $course->teachers->first_name.' '.$course->teacher->last_name }}</td>
                                <td id="name-{{$course->id}}">{{ $course->title }}</td>
                                <td>{{ $course->category->name }}</td>
                                <td>${{ $course->price }}</td>
                                <td>
                                    @if($course->published == 1) <button class="btn btn-sm btn-success">published</button><br/>@endif
                                    @if($course->trending == 1)  <button class="btn btn-sm btn-dark mt-2">trending</button><br/>@endif
                                    @if($course->featured == 1) <button class="btn btn-sm btn-secondary mt-2">featured</button><br/>@endif
                                    @if($course->free == 1) <button class="btn btn-sm btn-primary mt-2">free</button>@endif
                                </td>
                                <td></td>
                                <td>
                                    <a href="javascript:void(0)" id="{{ $course->id }}" data-id="{{$course->id}}" class="btn btn-warning btn-sm cursor-pointer">
                                        Update
                                    </a>

                                    <a href="javascript:void(0)" id="{{ $course->id }}" data-id="{{$course->id}}"  data-url="{{ route('course.delete') }}" class="btn btn-danger btn-sm cursor-pointer delete-data">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                            @endforeach
                        @endif
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

</section>
@endsection