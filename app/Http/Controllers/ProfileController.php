<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }


        $request->user()->save();

        return back();
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {


        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function destroyAdmin($id): RedirectResponse
{
    // Pastikan hanya admin yang bisa menghapus akun
    if (Auth::user()->role !== 'admin') {
        return back()->withErrors(['access' => 'Anda tidak memiliki izin untuk menghapus akun ini.']);
    }

    // Temukan pengguna berdasarkan ID
    $user = User::findOrFail($id);

    // Logout pengguna jika sedang login
    if (Auth::id() === $user->id) {
        Auth::logout();
    }

    // Hapus pengguna dari database
    $user->delete();

    // Invalidasi sesi pengguna yang dihapus (hanya jika pengguna yang dihapus sedang login)
    if (Auth::id() === $user->id) {
        session()->invalidate();
        session()->regenerateToken();
    }

    return back();
}
}
