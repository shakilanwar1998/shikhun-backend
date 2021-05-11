(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 120);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/application.js":
/*!********************************************!*\
  !*** ./resources/assets/js/application.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap */ "./resources/assets/js/bootstrap.js"); //datatables initilize


$(document).ready(function () {
  $('#data-list').DataTable();
});
$(document).ready(function () {
  $('.summernote-ini').summernote({
    height: 250
  });
});
$(function () {
  //tags input
  $('.selectpicker').selectpicker();

  function confirmDelete(action, data, options) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover the data!',
      icon: 'warning',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-warning btn-lg',
        cancelButton: 'btn btn-default btn-lg'
      }
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: 'POST',
          url: action,
          data: data,
          dataType: "json",
          success: function success(res) {
            $("#data-row".concat(options.id)).remove();
            var msg = res.message;
            $.growl.notice({
              message: msg,
              location: "tr"
            });
          },
          error: function error(res) {
            var error_msg = "Something went wrog. Please try again later.";
            $.growl.error({
              message: error_msg,
              location: "tr"
            });
          }
        });
      }
    });
  }

  function addData(action, data, options) {
    $.ajax({
      type: 'POST',
      url: action,
      data: data,
      dataType: " json",
      success: function success(data) {
        console.log("opions....", options);
        $(".".concat(options["class"])).val("");
        $("#".concat(options.view)).html(data.view);
        var msg = data.message;
        $.growl.notice({
          message: msg,
          location: "tr"
        });
        $("#addModal").modal('hide');
      },
      error: function error(data) {
        var msg = "Something went wrong. Please try again";
        $.growl.error({
          message: msg,
          location: "tr"
        });
      }
    });
  }

  function updateData(action, data, options) {
    $.ajax({
      type: 'POST',
      url: action,
      data: data,
      dataType: "json",
      success: function success(res) {
        $(".".concat(options["class"])).val("");
        $("#data-row".concat(options.id)).html(res.view);
        var msg = res.message;
        $.growl.notice({
          message: msg,
          location: "tr"
        });
        $("#updateModal").modal('hide');
      },
      error: function error(data) {
        var msg = "Something went wrong. Please try again";
        $.growl.error({
          message: msg,
          location: "tr"
        });
      }
    });
  } //add category


  $(document).on("click", "#save-category", function () {
    var name = $("#category_name").val();
    var priority = $("#category_priority").val();
    var action = $(this).data('url');
    var data = {
      name: name,
      priority: priority
    };
    var options = {
      "class": 'clear-input',
      view: 'category-data'
    };
    addData(action, data, options);
  }); //show update modal

  $(document).on("click", ".show-category", function () {
    var id = $(this).data('id');
    $("#update-id").val(id);
    $("#update-name").val($("#name-" + id).text());
    $("#update-priority").val($("#priority-" + id).text());
    $("#updateModal").modal('show');
  }); //update category

  $(document).on("click", "#update-category", function () {
    var id = $("#update-id").val();
    var name = $("#update-name").val();
    var priority = $("#update-priority").val();
    var action = $(this).data('url');
    var data = {
      id: id,
      name: name,
      priority: priority
    };
    var options = {
      id: id,
      "class": 'clear-input'
    };
    updateData(action, data, options);
  }); //add tag

  $(document).on("click", "#save-tag", function () {
    var name = $("#tag_name").val();
    var action = $(this).data('url');
    var data = {
      name: name
    };
    var options = {
      "class": 'clear-input',
      view: 'tag-data'
    };
    addData(action, data, options);
  }); //show update modal

  $(document).on("click", ".show-tag", function () {
    var id = $(this).data('id');
    $("#update-id").val(id);
    $("#update-name").val($("#name-" + id).text());
    $("#updateModal").modal('show');
  }); //update tag

  $(document).on("click", "#update-tag", function () {
    var id = $("#update-id").val();
    var name = $("#update-name").val();
    var action = $(this).data('url');
    var data = {
      id: id,
      name: name
    };
    var options = {
      id: id,
      "class": 'clear-input'
    };
    updateData(action, data, options);
  }); //delete global

  $(document).on("click", ".delete-data", function () {
    var id = $(this).data('id');
    var action = $(this).data('url');
    var data = {
      id: id
    };
    var options = {
      id: id
    };
    confirmDelete(action, data, options);
  }); //image helper

  function readImgURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#up-userimg').attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  } //profile image


  $("#user-img").change(function () {
    readImgURL(this);
  });
});

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Auto update layout
if (window.layoutHelpers) {
  window.layoutHelpers.setAutoUpdate(true);
}

$(function () {
  // Initialize sidenav
  $('#layout-sidenav').each(function () {
    new SideNav(this, {
      orientation: $(this).hasClass('sidenav-horizontal') ? 'horizontal' : 'vertical'
    });
  }); // Initialize sidenav togglers

  $('body').on('click', '.layout-sidenav-toggle', function (e) {
    e.preventDefault();
    window.layoutHelpers.toggleCollapsed();
  }); // Swap dropdown menus in RTL mode

  if ($('html').attr('dir') === 'rtl') {
    $('#layout-navbar .dropdown-menu').toggleClass('dropdown-menu-right');
  }
});
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
// window.axios = require('axios');
//
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */
// let token = document.head.querySelector('meta[name="csrf-token"]');
//
// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ 120:
/*!**************************************************!*\
  !*** multi ./resources/assets/js/application.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Program\xampp\htdocs\shikhun\resources\assets\js\application.js */"./resources/assets/js/application.js");


/***/ })

/******/ })));