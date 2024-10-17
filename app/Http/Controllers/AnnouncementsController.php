<?php

namespace App\Http\Controllers;

use App\Models\Announcements;
use App\Http\Requests\StoreAnnouncementsRequest;
use App\Http\Requests\UpdateAnnouncementsRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class AnnouncementsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'topic' => 'required|string',
            'announcement' => 'required|string|',

        ]);


        Announcements::create($validated);


        return back();
    }
    /**
     * Display the specified resource.
     */
    public function show(Announcements $announcements)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Announcements $announcements)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $row = Announcements::findOrFail($id);
        $validated = $request->validate([
            'topic' => 'required|string',
            'announcement' => 'required|string|',

        ]);


        $row->update($validated);

        return back();
    }
    public function destroy(Request $request, $id): RedirectResponse
    {
        $row = Announcements::findOrFail($id);
        $row->delete();
        return back();
    }
}
