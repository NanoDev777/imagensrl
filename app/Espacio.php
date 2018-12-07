<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Espacio extends Model
{
    protected $table      = 'espacio';
    protected $primaryKey = 'Id_espacio';

    public function tipo()
    {
        return $this->belongsTo(Tipo::class, 'Id_tipo');
    }

    public function ciudad()
    {
        return $this->belongsTo(Ciudad::class, 'Id_ciudad');
    }

    public function imagenes()
    {
        return $this->hasMany(Imagen::class, 'Id_espacio');
    }

    public function reservas()
    {
        return $this->hasMany(Reserva::class, 'Id_espacio');
    }

    public function getEspacios($cliente)
    {
        $espacios = DB::table('reserva as r')
            ->join("cliente as c", "r.Id_cliente", "=", "c.Id_cliente")
            ->join("espacio as e", "r.Id_espacio", "=", "e.Id_espacio")
            ->join("ciudad as i", "e.Id_ciudad", "=", "i.Id_ciudad")
            ->where('r.Estado', '=', 1)
            ->where('r.Id_cliente', '=', $cliente)
            ->select("e.Id_espacio as Id", "i.Nombre", "e.uuid", "e.Ubicacion", "e.latitude", "e.longitude")
            ->orderBy('r.Id_reserva', 'DESC')
            ->get();
        if (is_null($espacios)) {
            return null;
        } else {
            return $espacios;
        }

    }

    public function getTotalCiudad($cliente)
    {
        $ciudades = DB::table('reserva as r')
            ->join("espacio as e", "r.Id_espacio", "=", "e.Id_espacio")
            ->join("cliente as c", "r.Id_cliente", "=", "c.Id_cliente")
            ->join("ciudad as i", "e.Id_ciudad", "=", "i.Id_ciudad")
            ->where('r.Estado', '=', 1)
            ->where('r.Id_cliente', '=', $cliente)
            ->select("i.Id_ciudad as id", "i.Nombre as Ciudad", "i.Slug", DB::raw("COUNT(*) as Total"))
            ->groupBy("i.Nombre")
            ->get();
        if (is_null($ciudades)) {
            return null;
        } else {
            return $ciudades;
        }

    }

    public function getEspaciosCiudad($cliente, $slug)
    {
        $espacios = DB::table('reserva as r')
            ->join("cliente as c", "r.Id_cliente", "=", "c.Id_cliente")
            ->join("espacio as e", "r.Id_espacio", "=", "e.Id_espacio")
            ->join("ciudad as i", "e.Id_ciudad", "=", "i.Id_ciudad")
            ->join("tipo as t", "e.Id_tipo", "=", "t.Id_tipo")
            ->join("imagen as p", "p.Id_espacio", "=", "e.Id_espacio")
            ->where('r.Estado', '=', 1)
            ->where('r.Id_cliente', '=', $cliente)
            ->where('i.Slug', '=', $slug)
            ->select("e.Id_espacio", "e.Cod_espacio", "e.Zona", "e.Ubicacion", "e.Dimension", "e.Iluminacion", "t.Nombre as Tipo", "p.Imagen_1")
            ->orderBy('r.Id_reserva', 'DESC')
            ->get();
        if (is_null($espacios)) {
            return null;
        } else {
            return $espacios;
        }

    }
}
