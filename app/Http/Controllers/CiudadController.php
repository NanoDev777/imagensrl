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
            return response()->json(['inténtelo más tarde'], 500);
        }
        return response()->json([
            'success' => true,
            'list'    => $ciudades,
        ], 200);
    }
}
