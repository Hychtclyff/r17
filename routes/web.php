<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use App\Http\Middleware\AdminMiddleware;
use App\Models\Announcements;
use App\Models\Report;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', function () {
    // Cek apakah pengguna sudah login
    if (Auth::check()) {
        $user = Auth::user(); // Ambil pengguna yang sedang login
        return Inertia::render('Welcome', [
            'user' => $user,
            'report' => $user->reports,
            'announcements' => Announcements::all(),

        ]);
    }

    // Jika pengguna tidak login, kembalikan view tanpa data pengguna dan laporan
    return Inertia::render('Welcome', [
        'user' => '',
        'report' => [],
        'announcements' => Announcements::all(),
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    $id = Auth::user()->id;
    return Inertia::render('Dashboard', ['user' => User::findOrFail($id)]);
})
    ->middleware(middleware: ['auth', 'verified'])
    ->name('dashboard');
Route::get('/report', [ReportController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('report.index');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/admin', function () {

    return Inertia::render('Admin/Dashboard', [
        'baru' => Report::where('status', 'baru')->count(),
        'proses' => Report::where('status', 'proses')->count(),
        'ditolak' => Report::where('status', 'tolak')->count(),
        'diterima' => Report::where('status', 'diterima')->count(),
        'selesai' => Report::where('status', 'selesai')->count(),
        'dataLaporan' => Report::all(),
        'dataWarga' => User::all(),
        'announcementData' => Announcements::all(),
    ]);
})->middleware(AdminMiddleware::class)->name('admin.index');
Route::post('/create', [RegisteredUserController::class, 'store'])->name('adminCreate');
Route::delete('/admin/delete/{id}', [ProfileController::class, 'destroyAdmin'])->name('deleteAcc');




require __DIR__ . '/auth.php';
