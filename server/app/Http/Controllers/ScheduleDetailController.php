<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;
use App\Models\ScheduleDetail;
use Illuminate\Console\Scheduling\Schedule as SchedulingSchedule;
use Illuminate\Support\Facades\Auth;

class ScheduleDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $schedule = Schedule::where('user_id', Auth::user()->id)->get(); // 1, 2

        for($i = 0; $i < $schedule->count(); $i++){
            $data[$i] = ScheduleDetail::where('schedule_id', $schedule[$i]->id)->get(); // 1
        }

        return response()->json($data);
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
            'start_date' => 'required',
            'end_date' => 'required'
        ]);

        $data = ScheduleDetail::create([
            'schedule_id' => $request->id,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
        ]);

        return response()->json($data);
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

        $data = ScheduleDetail::findOrFail($id);

        $this->validate($request,[
            'start_date' => 'required',
            'end_date' => 'required'
        ]);

        $data->update($request->all());

        return response()->json(['message' => 'Updated Successfully'],200);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = ScheduleDetail::findOrFail($id);

        $data->delete();

        return response()->json(['message' => 'Deleted Successfully'],200);
    }
}
