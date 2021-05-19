<?php

namespace App\Models\Course;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = "categories";

    protected $fillable = [
        'name',
        'slug',
        'icon',
        'status'
    ];
}
