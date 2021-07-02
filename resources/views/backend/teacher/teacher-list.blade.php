@extends('layouts-back.layout-main')

@section('content')

<section class="page-section">

<div class="row">
    <div class="col-md-6">
        <div class="d-flex align-items-center">
            <div class="heading primary-color">
                <h2>TEACHERS LIST</h2>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12 mt-5">
        <div class="card">
             <div class="card-header">
                <button class="btn btn-success float-right">Add Teacher</button>
            </div>
            <div class="card-datatable table-responsive">
                <table id="data-list" class="datatables-userlist table table-striped table-bordered" style="text-size">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="teacher-data">
                        
                        @if(!empty($teachers))
                            @foreach($teachers as $teacher)
                            <tr id="data-row{{$teacher->id}}">
                                <td id="name-{{$teacher->id}}">1</td>
                                <td id="priority-{{$teacher->id}}">{{ $teacher->priority }}</td>
                                <td id="priority-{{$teacher->id}}">{{ $teacher->priority }}</td>
                                <td id="priority-{{$teacher->id}}">{{ $teacher->priority }}</td>
                                <td id="priority-{{$teacher->id}}">{{ $teacher->priority }}</td>
                                <td>
                                    <a href="javascript:void(0)" class="btn btn-success btn-sm cursor-pointer show-teacher">
                                        Update
                                    </a>
                                    <br/>
                                    <a href="javascript:void(0)" id="{{ $teacher->id }}" data-id="{{$teacher->id}}"  data-url="{{ route('teacher.delete') }}" class="btn btn-warning btn-sm cursor-pointer delete-data">
                                        Delete
                                    </a>
                                    <br/>
                                    <a href="javascript:void(0)"class="btn btn-info btn-sm cursor-pointer delete-data">
                                        Courses
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