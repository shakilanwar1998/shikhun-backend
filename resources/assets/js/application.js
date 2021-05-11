require('./bootstrap');

//datatables initilize
$(document).ready( function () {
    $('#data-list').DataTable();
});

$(document).ready(function() {
  $('.summernote-ini').summernote({
		height: 250,
  });
});


$(function () {

	//tags input
	$('.selectpicker').selectpicker();

	function confirmDelete(action, data, options)
	{
		Swal.fire({
	    	title: 'Are you sure?', 
	      	text: 'You will not be able to recover the data!',
	      	icon: 'warning',
	      	showCancelButton: true,
	      	customClass: {
	        	confirmButton: 'btn btn-warning btn-lg',
	        	cancelButton: 'btn btn-default btn-lg'
	      	}
	    }).then((result) => {
            if (result.value) {

            	$.ajax({
			        type:'POST',
			        url:action,
			        data:data,
			        dataType:"json",
			        success:function(res){
			        	$(`#data-row${options.id}`).remove();
			        	let msg = res.message
			        	$.growl.notice({message: msg, location: "tr"});
			        },
			        error:function(res){
			   			let error_msg = "Something went wrog. Please try again later."
			        	$.growl.error({message: error_msg, location: "tr"});
			        }
			    });
            }
        })
	}


	function addData(action, data, options)
	{
		$.ajax({
	        type:'POST',
	        url: action,
	        data: data,
	        dataType:" json",
	        success:function(data){
	        	console.log("opions....",options)
	        	$(`.${options.class}`).val("");
	        	$(`#${options.view}`).html(data.view)
	        	let msg = data.message;
	        	$.growl.notice({message: msg, location: "tr"});
	        	$(`#addModal`).modal('hide');
	        },
	        error:function(data){
	   			let msg = "Something went wrong. Please try again";
			    $.growl.error({message: msg, location: "tr"});
	        }
	    });
	}

	function updateData(action, data, options)
	{
		$.ajax({
	        type:'POST',
	        url: action,
	        data: data,
	        dataType:"json",
	        success:function(res){
	        	$(`.${options.class}`).val("");
	        	$(`#data-row${options.id}`).html(res.view)
	        	let msg = res.message;
	        	$.growl.notice({message: msg, location: "tr"});
	        	$(`#updateModal`).modal('hide');
	        },
	        error:function(data){
	   			let msg = "Something went wrong. Please try again";
			    $.growl.error({message: msg, location: "tr"});
	        }
	    });
	}

	//add category
	$(document).on("click", "#save-category", function(){
		let name = $("#category_name").val()
		let priority = $("#category_priority").val()
		let action= $(this).data('url')
		let data = {name: name, priority: priority}
		let options = {class: 'clear-input', view: 'category-data'}
		addData(action, data, options)
	})

		//show update modal
	$(document).on("click", ".show-category", function(){
		let id = $(this).data('id')
		$("#update-id").val(id)
		$("#update-name").val($("#name-"+id).text())
		$("#update-priority").val($("#priority-"+id).text())
		$("#updateModal").modal('show')
	})


	//update category
	$(document).on("click", "#update-category", function(){

		let id = $("#update-id").val();
		let name = $("#update-name").val();
		let priority = $("#update-priority").val();

		let action= $(this).data('url');
		let data = {id: id, name: name, priority: priority}
		let options = {id: id, class: 'clear-input'}

		updateData(action, data, options)
	})

	//add tag
	$(document).on("click", "#save-tag", function(){
		let name = $("#tag_name").val()
		let action= $(this).data('url')
		let data = {name: name}
		let options = {class: 'clear-input', view: 'tag-data'}
		addData(action, data, options)
	})

	//show update modal
	$(document).on("click", ".show-tag", function(){
		let id = $(this).data('id')
		$("#update-id").val(id)
		$("#update-name").val($("#name-"+id).text())
		$("#updateModal").modal('show')
	})


	//update tag
	$(document).on("click", "#update-tag", function(){

		let id = $("#update-id").val();
		let name = $("#update-name").val();

		let action= $(this).data('url');
		let data = {id: id, name: name}
		let options = {id: id, class: 'clear-input'}

		updateData(action, data, options)
	})


	//delete global
	$(document).on("click", ".delete-data", function(){
		let id = $(this).data('id');
		let action= $(this).data('url');
		let data = {id: id};
		let options = {id: id}
		confirmDelete(action, data, options);
	})

	//image helper
	function readImgURL(input) {
    	if (input.files && input.files[0]) {

	        var reader = new FileReader();
	        reader.onload = function (e) {
	            $('#up-userimg').attr('src', e.target.result);
	        }
	        reader.readAsDataURL(input.files[0]);
    	}
    }
    
    //profile image
    $("#user-img").change(function(){
        readImgURL(this);
    });

})