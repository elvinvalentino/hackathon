<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use App\Models\ScheduleDetail;
use Illuminate\Support\Facades\Auth;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['data'=>Patient::all()]);
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
            'name' => 'required',
            'email' => 'required',
            'age' => 'required',
            'occupation' => 'required',
            'nationality' => 'required',
            'id_card' => 'required',
            'image' => 'required'
        ]);

        // $scheduleDetail = ScheduleDetail::where('schedule_details','schedule_details_id');



        // $comments = Patient::find('id')->with(['schedule_detail' => function ($query) {
        //     $query->where('schedule_details', 'schedule');
        // }])->get();
        
        
        $data = Patient::create([
            'name' => $request->name,
            'email' => $request->email,
            'age' => $request->age,
            'occupation' => $request->occupation,
            'nationality' => $request->nationality,
            'id_card' => $request->id_card,
            'image' => $request->image
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
        //
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
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
