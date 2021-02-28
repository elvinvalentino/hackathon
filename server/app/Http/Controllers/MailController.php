<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MailController extends Controller
{
    public function notifyRegister($email){
        \Mail::to($email)->send(new \App\Mail\NotifyPatient());
    }
}
