<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{

    public function __construct() {
        // $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');
        $user = User::where('email',$credentials['email'])->first();
        $role = Role::find($user->role_id)->name;

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json([
            'name' => $user->name,
            'email' => $user->email,
            'role' => $role,
            'token' => $token
        ],200);
    }

    public function register(Request $request){

        User::create([
            'email' => $request->email,
            'name' => $request->name,
            'password' => Hash::make($request->password),
            'role_id' => 1
        ]);

        return response()->json([
            "message" => "Register success"
        ],200);
    }

    public function logout(){
        Auth::logout();

        return response()->json(['message'=>'logout success'], 200);
    }

    public function getAuthenticatedUser()
    {
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }

        return response()->json($user);
    }

    public function getProfile(){
        $role = Role::find(Auth::user()->role_id);
        return response()->json([
            'name' => Auth::user()->name,
            'email' => Auth::user()->email,
            'role' => $role->name
        ]);
    }
}
