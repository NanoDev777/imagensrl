<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ciudad extends Model
{
  protected $table = 'ciudad';
  protected $primaryKey = 'Id_ciudad';

  public function espacios() {
    return $this->hasMany(Espacio::class, 'Id_ciudad');
  }

  public function clientes() {
    return $this->hasMany(Cliente::class, 'Id_ciudad');
  }
}
