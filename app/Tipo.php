<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tipo extends Model
{
  protected $table = 'tipo';
  protected $primaryKey = 'Id_tipo';

  public function espacios() {
    return $this->hasMany(Espacio::class, 'Id_tipo');
  }
}
