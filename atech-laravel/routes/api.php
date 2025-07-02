<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Route::apiResource('users', UserController::class);
Route::controller(UserController::class)->group(function () {
    Route::get('users', 'index');
    Route::post('register-user', 'create');
    // Route::post('refresh', 'refresh');
    // Route::post('me', 'me');
    // Route::post('users', 'create');
    Route::post('user-login', 'login');
    Route::post('user-logout', 'logout');
    Route::get('users/{id}', 'show');
    Route::put('users/{id}', 'update');
    Route::delete('users/{id}', 'destroy');
});