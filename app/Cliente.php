<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $table = 'cliente';
    protected $primaryKey = 'Id_cliente';

    public function ciudad() {
      return $this->belongsTo(Ciudad::class, 'Id_ciudad');
    }

    public function reservas() {
      return $this->hasMany(Reserva::class, 'Id_cliente');
    }
}
