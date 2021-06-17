@if(!empty($categories))
    @foreach($categories as $key => $category)
    <tr id="data-row{{$category->id}}">
        <td >{{ $key+1 }}</td>
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