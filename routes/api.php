<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|

Route::middleware('auth:api')->get('/user', function (Request $request) {
return $request->user();
});
 */

Route::post('login', 'Auth\AuthController@login');

Route::middleware('auth:api')->group(function () {
    Route::post('logout', 'Auth\AuthController@logout');
    Route::get('user/{id}', 'UserController@show')->middleware('check');
    Route::put('user/{id}', 'UserController@update')->middleware('check');
    Route::put('password/{id}', 'UserController@password')->middleware('check');
    Route::get('espacios/{cliente}', 'EspacioController@getEspacios');
    Route::get('detalle/{id}/{ciudad}', 'EspacioController@getEspaciosCiudad');
    Route::get('uuid', 'EspacioController@getIdentifier'); //va salir
    Route::get('photosphere/{uuid}', 'EspacioController@getPhotosphere');
    Route::get('billboards', 'EspacioController@getListEspacios');
    Route::get('ciudades', 'CiudadController@listCiudades');
    Route::post('report', 'ClienteController@getReport');
    Route::get('billboard-rented', 'ClienteController@listBillboardRented');
    Route::get('general-bilboard', 'ClienteController@listGeneralBillboard');
    Route::get('billboard-filtered', 'ClienteController@listBillboardFiltered');
});
