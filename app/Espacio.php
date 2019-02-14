<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Espacio extends Model
{
    protected $table      = 'espacio';
    protected $primaryKey = 'Id_espacio';
    public $timestamps    = false; // TODO

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

    //TODO
    public function getEspaciosGeneral()
    {
        $espacios = DB::table('Ciudad as c')
            ->join("Espacio as e", "e.Id_ciudad", "=", "c.Id_ciudad")
            ->select("c.Id_ciudad as id", "c.Slug", "c.Nombre as Ciudad", DB::raw("COUNT(e.Id_espacio) as Total"))
            ->groupBy("c.Nombre")
            ->get();
        if (is_null($espacios)) {
            return null;
        } else {
            return $espacios;
        }
    }

    //TODO
    public function getVallasCiudad($ciudad)
    {
        $espacios = DB::table('espacio as e')
            ->join("ciudad as c", "e.Id_ciudad", "=", "c.Id_ciudad")
            ->where('c.Slug', '=', $ciudad)
            ->select("e.Id_espacio as Id", "c.Nombre", "e.uuid", "e.Ubicacion", "e.latitude", "e.longitude")
            ->get();
        if (is_null($espacios)) {
            return null;
        } else {
            return $espacios;
        }
    }

    public function getEspacios($cliente)
    {
        $espacios = DB::table('reserva as r')
            ->join("cliente as c", "r.Id_cliente", "=", "c.Id_cliente")
            ->join("espacio as e", "r.Id_espacio", "=", "e.Id_espacio")
            ->join("ciudad as i", "e.Id_ciudad", "=", "i.Id_ciudad")
            ->where('r.Condicion', '=', 1)
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
            ->join("imagen_cliente as p", "p.Id_espacio", "=", "e.Id_espacio")
            ->where('r.Condicion', '=', 1)
            ->where('r.Id_cliente', '=', $cliente)
            ->where('i.Slug', '=', $slug)
            ->select("e.Id_espacio", "e.Cod_espacio", "e.Ubicacion", "p.Url", "r.Iluminacion", "r.Impresion", "r.fecha_inicio", "r.fecha_fin")
            ->orderBy('r.Id_reserva', 'DESC')
            ->get();
        if (is_null($espacios)) {
            return null;
        } else {
            return $espacios;
        }
    }
}
