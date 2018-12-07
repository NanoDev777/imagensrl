<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Laravel\Passport\Http\Controllers\AccessTokenController;
use Psr\Http\Message\ServerRequestInterface;

class CustomAccessTokenController extends AccessTokenController
{
    public function issueUserToken(ServerRequestInterface $request)
    {
        $httpRequest = request();
        if ($httpRequest->grant_type == 'password') {
            $user = User::where('email', $httpRequest->username)
                ->where('active', 1)
                ->first();
            if ($user == null) {
                return response()->json([
                    'status'  => 'negative',
                    'message' => 'Este usuario se encuentra inhabilitado',
                ]);
            }
            //$auth = auth()->user();
            return $this->issueToken($request);
            //return response()->json($auth);
        }
    }
}
