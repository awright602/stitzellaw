<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['throttle:100'])->group(function() {
    Route::get('testimonials', 'TestimonialController@index');
    Route::post('testimonials', 'TestimonialController@store');
});

Route::middleware(['throttle:100'])->group(function() {
    Route::post('consults', 'ConsultController@store');
});