<?php

namespace App\Http\Controllers;

use App\Ciudad;

class CiudadController extends Controller
{
    public function listCiudades()
    {
        try {
            $ciudades = Ciudad::orderBy('Id_ciudad', 'DESC')->select('Id_ciudad', 'Nombre')->get();
        } catch (\Exception $e) {
            return response()->json('Ocurrió un problema, por favor recargue la página o inténtelo de nuevo más tarde.', 500);
        }
        return response()->json([
            'success' => true,
            'list'    => $ciudades,
        ], 200);
    }
}
