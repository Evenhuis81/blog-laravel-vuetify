<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    // One to Many relation (inverse)
    public function author()
    {
        return $this->belongsTo('App/User');
    }
}
