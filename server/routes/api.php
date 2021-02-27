<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\ScheduleController;

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
Route::post('logout', [UserController::class, 'logout'])->middleware('jwt.verify');

Route::middleware('VerifyJwt','VerifyAdmin')->group(function () {
    
    Route::apiResources([
        'organization' => OrganizationController::class,
        'schedule' => ScheduleController::class,
    ]);

    Route::get('/filter/{name}', [OrganizationController::class,'filter']);
});


