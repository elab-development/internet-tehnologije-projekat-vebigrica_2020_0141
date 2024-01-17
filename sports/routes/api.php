<?php
use App\Http\Controllers\CoachController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\TeamController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/teams', [TeamController::class, 'index']);
Route::get('/teams/paginate', [TeamController::class, 'indexPaginate']);
Route::get('/teams/{id}', [TeamController::class, 'show']);

Route::get('/players', [PlayerController::class, 'index']);
Route::get('/players/paginate', [PlayerController::class, 'indexPaginate']);
Route::get('/players/{id}', [PlayerController::class, 'show']);

Route::get('/coaches', [CoachController::class, 'index']);
Route::get('/coaches/paginate', [CoachController::class, 'indexPaginate']);
Route::get('/coaches/{id}', [CoachController::class, 'show']);


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function (Request $request) {
        return auth()->user();
    });
    Route::resource('/teams', TeamController::class)
        ->only(['store', 'update', 'destroy']);
        
    Route::resource('/players', PlayerController::class)
        ->only(['store', 'update', 'destroy']);
    
    Route::resource('/coaches', CoachController::class)
        ->only(['store', 'update', 'destroy']);
    
    Route::post('/logout', [AuthController::class, 'logout']);
});
