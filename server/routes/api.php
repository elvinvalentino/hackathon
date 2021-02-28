<?php

use Illuminate\Http\Request;
use App\Models\ScheduleDetail;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\ScheduleDetailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [UserController::class , 'login']);
Route::post('register', [UserController::class , 'register']);
Route::post('logout', [UserController::class, 'logout'])->middleware('VerifyJwt');

Route::middleware('VerifyJwt')->group(function () {

    Route::middleware('VerifyAdmin')->group(function () {

        Route::apiResource('organization', OrganizationController::class)->except('index');
        Route::get('/filter/{name}', [OrganizationController::class,'filter']);
        
    });

    Route::middleware('VerifyOrganization')->group(function () {
    
        Route::apiResource('schedule', ScheduleController::class)->except('index');
        Route::apiResource('scheduleDetail', ScheduleDetailController::class)->except('index');
        Route::apiResource('patient', PatientController::class);

    });

    Route::get('myprofile', [UserController::class, 'getProfile']);
});

Route::get('organization', [OrganizationController::class, 'index']);
Route::get('schedule', [ScheduleController::class, 'index']);
Route::get('scheduleDetail', [ScheduleDetailController::class, 'index']);
// Route::post('patient', [PatientController::class, 'store']);
Route::post('notify-register', [MailController::class, 'notifyRegister']);

