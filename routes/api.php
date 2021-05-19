<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['as' => 'course.', 'prefix' => '/course', 'namespace' => 'Api', 'middleware' => 'auth:api'], function () {
    Route::get('/', 'CoursesController@getCourses')->name('list');
    Route::post('/store', 'TeacherController@store')->name('store');
    Route::post('/update', 'TeacherController@update')->name('update');
    Route::post('/delete', 'TeacherController@delete')->name('delete');
});
