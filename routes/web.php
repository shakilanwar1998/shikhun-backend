<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['as' => 'teacher.', 'prefix' => 'teacher', 'namespace' => 'Backend', 'middleware' => 'auth'], function () {
    Route::get('/', 'TeacherController@index')->name('list');
    Route::post('/store', 'TeacherController@store')->name('store');
    Route::post('/update', 'TeacherController@update')->name('update');
    Route::post('/delete', 'TeacherController@delete')->name('delete');
});

Route::group(['as' => 'order.', 'prefix' => 'order', 'namespace' => 'Backend', 'middleware' => 'auth'], function () {
    Route::get('/', 'OrderController@index')->name('list');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
