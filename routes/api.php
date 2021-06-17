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

Route::group(['as' => 'course.', 'prefix' => '/course', 'namespace' => 'Api\Course'], function () {
    Route::group(['as' => 'category.', 'prefix' => '/category'], function () {
        Route::get('/', 'CategoryController@getCategories')->name('list');
        Route::post('/store', 'TeacherController@store')->name('store');
        Route::post('/update', 'TeacherController@update')->name('update');
        Route::post('/delete', 'TeacherController@delete')->name('delete');
    });
});
