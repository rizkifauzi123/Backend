<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Berita;

class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $beritas = Berita::all();

        if (!empty($beritas)) {
            $response = [
                'message' => 'Menampilkan Semua berita',
                'data' => $beritas,
            ];
            return response()->json($response,200);
        } else {
            $response = [
                'message' => 'Berita Kosong'
            ];
            return response()->json($response,200);
        }
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
        $input = [
            'judul' => $request->judul,
            'penulis' => $request->penulis,
            'deskripsi' => $request->deskripsi,
            'konten' => $request->konten,
            'url' => $request->url,
            'url_image' => $request->url_image,
            'publish' => $request->publish,
            'kategori' => $request->kategori
            ];
    
            $berita = Berita::create($request->all());
    
            $response = [
                'message' => 'Berita baru berhasil dibuat',
                'data' => $berita,
            ];
    
            return response()->json($response, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $berita = Berita::find($id);

		if ($berita) {
			$response = [
				'message' => 'Get detail berita',
				'data' => $berita
			];
	
			return response()->json($response, 200);
		} else {
			$response = [
				'message' => 'Data not found'
			];
			
			return response()->json($response, 404);
		}
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $berita = Berita::find($id);

		if ($berita) {
            $input = [
                'judul' => $request->judul ?? $berita->judul,
                'penulis' => $request->penulis ?? $berita->penulis,
                'deskripsi' => $request->deskripsi ?? $berita->deskripsi,
                'konten' => $request->konten ?? $berita->konten,
                'url' => $request->url ?? $berita->url,
                'url_image' => $request->url_image ?? $berita->url_image,
                'publish' => $request->publish ?? $berita->publish,
                'kategori' => $request->kategori ?? $berita->kategori
            ];


            $berita->update($input);
			$response = [
				'message' => 'berita sudah diperbaharui',
				'data' => $berita->update($request->all())
			];
	
			return response()->json($response, 200);
		} else {
			$response = [
				'message' => 'Data not found'
			];

			return response()->json($response, 404);
		}
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $berita = Berita::find($id);

		if ($berita) {
			$response = [
				'message' => 'berita sudah dihapus',
				'data' => $berita->delete()
			];

			return response()->json($response, 200); 
		} else {
			$response = [
				'message' => 'Data not found'
			];

			return response()->json($response, 404);
		}
    }

    public function search($title)
    {
        $result = [
            'judul' => $title,
            'message' => 'Pencarian berhasil dilakukan.'
        ];

        return response()->json($result);
    }
}

