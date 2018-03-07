<?php

use Illuminate\Http\Request;
use App\Post;

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
/**
** Basic Routes for a RESTful service:
**
** Route::get($uri, $callback);
** Route::post($uri, $callback);
** Route::put($uri, $callback);
** Route::delete($uri, $callback);
**
**/

Route::get('posts', 'PostsController@index');

Route::get('posts/{post}', 'PostsController@show');

Route::post('posts', 'PostsController@store') ;

Route::put('posts/{post}', 'PostsController@update');

Route::delete('posts/{post}', 'PostsController@delete');
