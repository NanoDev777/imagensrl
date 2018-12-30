<?php

namespace App\Http\Controllers;

use App\Alert;
use Illuminate\Http\Request;

class AlertController extends Controller
{
    public function show($id)
    {
        $alert = Alert::findOrFail($id);
        return response()->json([
            'success' => true,
            'data'    => $alert,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $alert      = Alert::find($id);
        $alert->day = $request->day;
        $alert->save();
        return response()->json([
            'success' => true,
            'message' => 'Los datos se actualizaron con éxito!',
        ], 200);
    }
}
