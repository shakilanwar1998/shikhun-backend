@extends('layouts-back.layout-main')

@section('content')

<section class="page-section">

<div class="row">
    <div class="col-md-6">
        <div class="d-flex align-items-center">
            <div class="heading primary-color">
                <h3>MANAGE COURSE CATEGORY</h3>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12 mt-5">
        <div class="card">
             <div class="card-header">
                <button class="btn btn-success float-right" data-toggle="modal" data-target="#addModal">Add Category</button>
            </div>
            <div class="card-datatable table-responsive">
                <table id="data-list" class="datatables-userlist table table-striped table-bordered" style="text-size">
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Category Name</th>
                            <th>Courses</th>
                            <th>Blog</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="category-data">
                        
                        @if(!empty($categories))
                            @foreach($categories as $key => $category)
                            <tr id="data-row{{$category->id}}">
                                <td>{{ $key+1 }}</td>
                                <td id="name-{{$category->id}}">{{ $category->name }}</td>
                                <td>0</td>
                                <td>0</td>
                                <td>
                                    <a href="javascript:void(0)" id="{{ $category->id }}" data-id="{{$category->id}}" class="btn btn-warning btn-sm cursor-pointer show-category">
                                        Update
                                    </a>

                                    <a href="javascript:void(0)" id="{{ $category->id }}" data-id="{{$category->id}}"  data-url="{{ route('category.delete') }}" class="btn btn-danger btn-sm cursor-pointer delete-data">
                                        Delete
                                    </a>

                                    <a href="javascript:void(0)" class="btn btn-success btn-sm cursor-pointer delete-data">
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

<div class="modal modal-top fade" id="addModal">
    <div class="modal-dialog">
        <form id="category-add" class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Add Category</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">×</button>
            </div>

            <div class="modal-body">
                <div class="form-group">
                    <label for="" class="mb-2">Category Name</label>
                    <input type="text" id="category_name" name="category_name" class="form-control clear-input" placeholder="Category Name" required="required">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning btn-sm" data-dismiss="modal">
                    Close
                </button>
                <button type="button" class="btn btn-success btn-sm" id="save-category" data-url="{{ route('category.store') }}">Save</button>
            </div>
        </form>
    </div>
</div>

<div class="modal modal-top fade" id="updateModal">
    <div class="modal-dialog">
        <form id="group" class="modal-content" method="">
            <div class="modal-header">
                <h5 class="modal-title">Update Category</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">×</button>
            </div>

            <div class="modal-body">
                <input type="hidden" id="update-id" name="cat_name" class="form-control" value="">
                <div class="form-group">
                    <label for="" class="mb-2">Category Name</label>
                    <input type="text" id="update-name" name="name" class="form-control clear-input" placeholder="Category Name" required="required">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning btn-sm" data-dismiss="modal">
                    Close
                </button>
                <button type="button" class="btn btn-success btn-sm" id="update-category" data-url="{{ route('category.update') }}">Update</button>
            </div>
        </form>
    </div>
</div>

</section>
@endsection