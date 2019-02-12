<?php

namespace App\Http\Controllers;

use App\Cliente;

class ClienteController extends Controller
{
    public function listClientes()
    {
        try {
            $clientes = Cliente::orderBy('Id_cliente', 'DESC')->select('Id_cliente', 'Nombre')->get();
        } catch (\Exception $e) {
            return response()->json('Ocurrió un problema, por favor recargue la página o inténtelo de nuevo más tarde.', 500);
        }
        return response()->json([
            'success' => true,
            'list'    => $clientes,
        ], 200);
    }
}
