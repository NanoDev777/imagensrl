<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    protected $table = 'reserva';
    protected $primaryKey = 'Id_reserva';

    public function espacio() {
      return $this->belongsTo(Espacio::class, 'Id_espacio');
    }

    public function cliente() {
      return $this->belongsTo(Cliente::class, 'Id_cliente');
    }
}
