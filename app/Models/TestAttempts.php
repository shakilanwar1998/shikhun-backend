<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TestAttempts extends Model
{
    protected $fillable = [ 'user_id', 'test_id', 'attempt'];

    public function test(){
        return $this->belongsTo(Test::class);
    }
}
