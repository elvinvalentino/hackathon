<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','email','age',
        'occupation','nationality','id_card','image','status'
    ];

    public function schedule_detail(){
        return $this->belongsTo(ScheduleDetail::class);
    }
}
