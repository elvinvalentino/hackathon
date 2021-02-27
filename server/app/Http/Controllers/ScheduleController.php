<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Schedule::get();

        return response()->json($data,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'country' => 'required',
            'city' => 'required',
            'address' => 'required'
        ]);

        // $requestData = $request->all();
        $data = Schedule::create([
            'user_id' => Auth::user()->id,
            'country' => $request->country,
            'city' => $request->city,
            'address' => $request->address
        ]);

        return response()->json($data,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Schedule::findOrFail($id);

        return response()->json($data);
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
        $data = Schedule::findOrFail($id);

        $this->validate($request,[
            'country' => 'required',
            'city' => 'required',
            'address' => 'required'
        ]);

        $requestData = $request->all();
        $data->update($requestData);

        return response()->json($data,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Schedule::findOrFail($id);

        $data->delete();

        return response()->json(['Message' => 'Deleted Successfully'],200);
    }
}
