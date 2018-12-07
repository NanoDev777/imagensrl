<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json([
            'success' => true,
            'data'    => $user,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        try {
            $inputs = $request->all();
            $user   = User::find($id);
            $user->update($inputs);
            return response()->json([
                'success' => true,
                'message' => 'Los datos se actualizaron con éxito!',
                'user'    => $user,
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'No es posible realizar esta acción, por favor inténtelo de nuevo más tarde.'], 500);
        }
    }

    public function password(Request $request, $id)
    {
        try {
            $inputs = $request->all();
            $query  = User::where('id', $id);
            $user   = User::find($id);
            if (Hash::check($inputs['pass'], $user->password)) {
                if (isset($inputs['password'])) {
                    $inputs['password'] = bcrypt($inputs['password']);
                }
                $query->update(['password' => $inputs['password']]);
                return response()->json([
                    'success' => true,
                    'message' => 'Los datos se actualizaron con éxito!',
                ]);
            } else {
                return response()->json([
                    'success' => false,
                ]);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'No es posible realizar esta acción, por favor inténtelo de nuevo más tarde.'], 500);
        }
    }
}
