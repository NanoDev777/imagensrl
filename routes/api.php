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

Route::get('test', function () {
    $day   = 5;
    $alert = \App\Reserva::from('Reserva as r')
        ->select(DB::raw('COUNT(*) as total'))
        ->where('r.fecha_fin', '>=', DB::raw('NOW()'))
        ->where('r.fecha_fin', '<=', DB::raw("NOW() + INTERVAL {$day} DAY"))
        ->where('r.Id_cliente', '=', 14)
        ->first();

    return $alert;
});

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
    Route::get('cities', 'CiudadController@listCiudades');
    Route::get('rented-billboard', 'ReporteController@getBillboardRented');
    Route::post('billboard-detail', 'ReporteController@getBillboardDetail');
    Route::get('billboard-rented', 'ReporteController@listBillboardRented');
    Route::get('general-bilboard', 'ReporteController@listGeneralBillboard');
    Route::get('billboard-filtered', 'ReporteController@listBillboardFiltered');
    Route::get('total-rented', 'EspacioController@getTotalRented');
    Route::get('rented-active', 'EspacioController@getRentedActive');
    Route::get('alerts', 'EspacioController@notifications');
});
