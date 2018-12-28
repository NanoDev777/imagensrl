<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Reserva;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login()
    {
        // Check if a user with the specified email exists
        $user = User::whereEmail(request('username'))->first();

        if (!$user) {
            return response()->json([
                'message' => 'El usuario y/o la contraseña son inválidos',
                'status'  => 422,
            ], 422);
        }

        if (!Hash::check(request('password'), $user->password)) {
            return response()->json([
                'message' => 'El usuario y/o la contraseña son inválidos',
                'status'  => 422,
            ], 422);
        }

        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        $data = [
            'grant_type'    => 'password',
            'client_id'     => $client->id,
            'client_secret' => $client->secret,
            'username'      => request('username'),
            'password'      => request('password'),
        ];

        $request = Request::create('/oauth/token', 'POST', $data);

        $response = app()->handle($request);

        if ($response->getStatusCode() != 200) {
            return response()->json([
                'message' => 'error, intente de nuevo más tarde',
                'status'  => 500,
            ], 500);
        }

        $data = json_decode($response->getContent());

        $alert = Reserva::from('Reserva as r')
            ->select(DB::raw('COUNT(*) as total'))
            ->where('r.Condicion', '=', 1)
            ->where('r.fecha_fin', '>=', DB::raw('NOW()'))
            ->where('r.fecha_fin', '<=', DB::raw("NOW() + INTERVAL 7 DAY"))
            ->where('r.Id_cliente', '=', $user->client_id)
            ->first();

        return response()->json([
            'token'      => $data->access_token,
            'expires_in' => $data->expires_in,
            'user'       => $user,
            'alert'      => $alert->total,
            'status'     => 200,
        ]);
    }

    public function logout()
    {
        $accessToken = auth()->user()->token();

        $refreshToken = DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true,
            ]);

        $accessToken->revoke();

        return response()->json(['status' => 200]);
    }
}
