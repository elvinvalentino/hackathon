<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScheduleDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'phase_id','schedule_id','start_date','end_date'
    ];

    public function patient(){
        return $this->hasOne(Patient::class);
    }

    public function phase(){
        return $this->belongsTo(Phase::class);
    }

    public function schedule(){
        return $this->hasOne( Schedule::class , 'id','schedule_id');
    }
}
