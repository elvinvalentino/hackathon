<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class VerifyOrganization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(Role::find(Auth::user()->role_id)->name != 'organization'){
            return response()->json(['message' => 'Organization only']);
        }
        return $next($request);
    }
}
