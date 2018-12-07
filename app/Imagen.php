<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
  protected $table = 'imagen';
  protected $primaryKey = 'Id_imagen';

  public function espacio() {
    return $this->belongsTo(Espacio::class, 'Id_espacio');
  }

}
