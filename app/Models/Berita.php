<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    use HasFactory;
    protected $fillable = ['judul', 'penulis', 'deskripsi', 'konten', 'url', 'url_image', 'publish', 'kategori'];
}
