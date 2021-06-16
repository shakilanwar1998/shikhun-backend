<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class TeacherProfile extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $gaurded = [];

    /**
    * Get the teacher profile that owns the user.
    */
    public function teacher(){
        return $this->belongsTo(User::class);
    }
}
