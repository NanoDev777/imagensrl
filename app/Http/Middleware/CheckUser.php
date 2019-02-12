<?php

namespace App\Http\Middleware;

use Closure;

class CheckUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->id == auth()->user()->id || auth()->user()->profile == 1) {
            return $next($request);
        }
        return response()->json([
            'success' => false,
            'message' => 'Denied',
        ], 401);
    }
}
