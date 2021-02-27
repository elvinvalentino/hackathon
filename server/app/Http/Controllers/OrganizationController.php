<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['data' => User::orderBy('role_id')->get()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'role_id' => 'required',
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|min:6'
        ]);

        User::create([
            'role_id' => $validated['role_id'],
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => $validated['password']
        ]);

        return response()->json([
            'message' => 'Success create data'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {  
        $data = User::find($id);

        if(!$data){
            return response()->json(['message'=>'data not found']);
        }

        return response()->json([
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = User::find($id);

        if(!$data) return response()->json(['message'=>'Data not found'],404);

        $validated = $request->validate([
            'role_id' => 'required',
            'name' => 'required|string',
            'email' => 'required|string|unique:users',
            'password' => 'required|min:6'
        ]);

        $data->update($request->all());

        return response()->json(['data'=>$data]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = User::findOrFail($id)->delete();

        return response()->json(['message'=>'User deleted'], 200);
    }

    public function filter($role){
        $role_id = Role::where('name',$role)->first()->id;
        if(!$role_id) abort(404);
        return response()->json(['data'=>User::where('role_id',$role_id)->get()]);
    }
}
