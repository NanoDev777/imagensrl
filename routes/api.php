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
Route::get('photosphere/{uuid}', 'EspacioController@getPhotosphere');

Route::get('test', function () {
    $id = \Uuid::generate()->string;
    return response()->json($id);
});

Route::middleware('auth:api')->group(function () {
    Route::post('logout', 'Auth\AuthController@logout');

    Route::get('profile/{id}', 'UserController@show')->middleware('check'); //TODO
    Route::put('profile/{id}', 'UserController@update')->middleware('check'); //TODO

    Route::get('users', 'UserController@index')->middleware('admin'); //TODO
    Route::post('users', 'UserController@store')->middleware('admin'); //TODO
    Route::get('user/{id}', 'UserController@show')->middleware('admin');
    Route::put('user/{id}', 'UserController@update')->middleware('admin');
    Route::delete('user/{id}', 'UserController@destroy')->middleware('admin');; //TODO
    Route::put('password/{id}', 'UserController@password')->middleware('check', 'admin');

    Route::get('espacios/{cliente}', 'EspacioController@getEspacios');
    Route::get('espacios-general', 'EspacioController@getEspaciosGeneral'); //TODO
    Route::get('detalle/{id}/{ciudad}', 'EspacioController@getEspaciosCiudad');
    Route::get('detalle-general/{ciudad}', 'EspacioController@getVallasCiudad'); //TODO
    Route::get('photosphere/{uuid}', 'EspacioController@getPhotosphere');
    Route::get('billboards', 'EspacioController@getListEspacios');
    Route::get('cities', 'CiudadController@listCiudades');
    Route::get('customers', 'ClienteController@listClientes'); //TODO
    Route::get('rented-billboard', 'ReporteController@getBillboardRented');
    Route::post('billboard-detail', 'ReporteController@getBillboardDetail');
    Route::get('billboard-rented', 'ReporteController@listBillboardRented');
    Route::get('general-bilboard', 'ReporteController@listGeneralBillboard');
    Route::get('billboard-filtered', 'ReporteController@listBillboardFiltered');
    Route::get('total-rented', 'EspacioController@getTotalRented');
    Route::get('rented-active', 'EspacioController@getRentedActive');
    Route::get('alerts', 'EspacioController@getAlerts');
    Route::get('alerts/{id}', 'AlertController@show');
    Route::put('alerts/{id}', 'AlertController@update');
});
