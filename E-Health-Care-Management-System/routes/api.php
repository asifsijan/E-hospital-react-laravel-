<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Doctor;
use App\User;
use App\Blog;
use App\Application;
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
Route::resource('blogs','BlogController');
