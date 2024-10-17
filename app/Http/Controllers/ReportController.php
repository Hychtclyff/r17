<?php

namespace App\Http\Controllers;

use App\Models\Report;
use App\Http\Requests\StoreReportRequest;
use App\Http\Requests\UpdateReportRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Report');
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
        $user = Auth::user()->name;
        $id = Auth::user()->id;

        $validatedData = $request->validate([
            'topic' => 'required|string|max:255',
            'reportContent' => 'required|string',
            'location' => 'required|string|max:255',
            'attachment' => 'nullable|file|mimes:jpeg,png,jpg,gif,svg,pdf|max:2048',
        ]);

        // Menambahkan nama pengguna ke data yang sudah divalidasi
        $validatedData['user'] = $user;
        $validatedData['user_id'] = $id;


        // Menangani penyimpanan file lampiran jika ada
        if ($request->hasFile('attachment')) {
            $attachment = $request->file('attachment');
            $attachmentName = time() . '_attachment.' . $attachment->extension(); // Mengatur nama file
            $attachment->move(public_path('img/lampiran/'), $attachmentName); // Pindahkan file ke folder yang diinginkan
            $validatedData['attachment'] = 'img/lampiran/' . $attachmentName; // Simpan path di database
        }

        // Membuat laporan baru
        Report::create($validatedData);

        // Menyimpan pesan flash untuk feedback
        return back()->with('success', 'Laporan berhasil disimpan.');
    }


    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id, $update)
    {


        $row = Report::findOrFail($id);


        $row->status = $update;
        $row->save();


        // Kembalikan ke halaman sebelumnya dengan pesan sukses
        return back()->with('success', 'Report updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        //
    }
}
