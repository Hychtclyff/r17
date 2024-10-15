<?php

use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');

Route::get('/dashboard', function () {
    $id = Auth::user()->id;
    return Inertia::render('Dashboard', ['user' => User::findOrFail($id)]);
})
    ->middleware(middleware: ['auth', 'verified'])
    ->name('dashboard');
Route::get('/report', function () {
    return Inertia::render('Report');
})
    ->middleware(['auth', 'verified'])
    ->name('report');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
