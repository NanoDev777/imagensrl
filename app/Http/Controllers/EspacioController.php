<?php

namespace App\Http\Controllers;

use App\Espacio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EspacioController extends Controller
{
    protected $espacio;

    public function __construct(Espacio $espacio)
    {
        $this->espacio = $espacio;
    }

    public function getEspacios($cliente)
    {
        $v        = 0;
        $t        = 0;
        $espacios = $this->espacio->getEspacios($cliente);
        $ciudades = $this->espacio->getTotalCiudad($cliente);
        if ($espacios != null && $ciudades != null) {
            foreach ($ciudades as $valla) {
                $v = $v + $valla->Total;
                $t++;
            }
            return response()->json(["espacios" => $espacios, "ciudades" => $ciudades, "vallas" => $v, "total" => $t], 200);
        } else {
            return response()->json('Ocurrió un problema, por favor recargue la página o inténtelo de nuevo más tarde.', 500);
        }
    }

    public function getEspaciosCiudad($cliente, $ciudad)
    {
        $espacios = $this->espacio->getEspaciosCiudad($cliente, $ciudad);
        if ($espacios != null) {
            return response()->json(["data" => $espacios], 200);
        } else {
            return response()->json('No se encontró el recurso.', 404);
        }
    }

    public function getPhotosphere($uuid)
    {
        $espacio = Espacio::select('uuid', 'photosphere', 'Ubicacion', 'Latitude', 'Longitude')->where('uuid', $uuid)->get()->first();
        return response()->json($espacio);
    }

    public function getIdentifier()
    {
        $id = \Uuid::generate()->string;
        return response()->json($id);
    }

    public function getListEspacios(Request $request)
    {
        $rowsPerPage = 12;

        if ($request->has('rowsPerPage')) {
            $rowsPerPage = $request->input('rowsPerPage');
        }

        $espacios = Espacio::join('tipo', 'espacio.Id_tipo', '=', 'tipo.Id_tipo')
            ->join('ciudad', 'ciudad.Id_ciudad', '=', 'espacio.Id_ciudad')
            ->join("imagen_cliente as i", "i.Id_espacio", "=", "espacio.Id_espacio")
            ->select('espacio.Id_espacio', 'ciudad.Nombre as Ciudad', 'espacio.Zona', 'espacio.Ubicacion', 'tipo.Nombre as Tipo', 'espacio.Dimension', 'espacio.Iluminacion', 'espacio.Estado', 'espacio.uuid', 'espacio.Costo', 'i.Url')
            ->where('espacio.Estado', '!=', 0)
            ->orderBy('espacio.Id_espacio', 'DESC');

        if ($request->has('filter')) {
            $filter = $request->input('filter');

            $espacios = $espacios->where(function ($query) use ($filter) {
                $query->where('espacio.Zona', 'LIKE', "%" . $filter . "%")
                    ->orWhere('espacio.Ubicacion', 'LIKE', "%" . $filter . "%")
                    ->orWhere('tipo.Nombre', 'LIKE', "%" . $filter . "%");
            });
        }

        if ($request->has('state')) {
            $state = $request->input('state');

            $espacios = $espacios->where(function ($query) use ($state) {
                $query->where('espacio.Estado', 'LIKE', "%" . $state . "%");
            });
        }

        if ($request->has('city')) {
            $city = $request->input('city');

            $espacios = $espacios->where(function ($query) use ($city) {
                $query->where('ciudad.Nombre', 'LIKE', "%" . $city . "%");
            });
        }

        $espacios = $espacios->paginate($rowsPerPage);

        $response = [
            'espacios' => $espacios,
            'params'   => [
                'total'        => $espacios->total(),
                'current_page' => $espacios->currentPage(),
                'per_page'     => $espacios->perPage(),
            ],
        ];

        return response()->json($response);
    }

    public function notifications(Request $request)
    {
        $client = $request->input('client');
        $alert  = Espacio::from('Espacio as e')
            ->join('Reserva as r', 'e.Id_espacio', '=', 'r.Id_espacio')
            ->join('Ciudad as c', 'e.Id_ciudad', '=', 'c.Id_ciudad')
            ->join('Imagen_cliente as i', 'e.Id_espacio', '=', 'i.Id_espacio')
            ->select('i.Url as image', 'c.Nombre as city', 'c.Slug as slug', 'e.Ubicacion as location', DB::raw('datediff (MAX(r.fecha_fin),CURDATE()) as day'))
            ->where('r.Condicion', '=', 1)
            ->where('r.fecha_fin', '>=', DB::raw('NOW()'))
            ->where('r.fecha_fin', '<=', DB::raw("NOW() + INTERVAL 7 DAY"))
            ->where('r.Id_cliente', '=', $client)
            ->groupBy('e.Id_espacio');

        if ($request->has('filter')) {
            $alert = $alert->orderBy('r.fecha_fin')->take(3);
        }

        $alert = $alert->get();

        return response()->json($alert, 200);
    }

    public function getTotalRented()
    {
        $espacios = Espacio::join('ciudad', 'espacio.Id_ciudad', '=', 'ciudad.Id_ciudad')
            ->join('reserva', 'espacio.Id_espacio', '=', 'reserva.Id_espacio')
            ->select('ciudad.Nombre as city', DB::raw('count(*) as total'))
            ->where('reserva.Id_cliente', '=', 14)
            ->where(function ($q) {
                $q->where('reserva.Estado', 1)
                    ->orWhere('reserva.Estado', 2);
            })
            ->groupBy('city')
            ->get();

        return response()->json($espacios);
    }

    public function getRentedActive()
    {
        $espacios = Espacio::join('ciudad', 'espacio.Id_ciudad', '=', 'ciudad.Id_ciudad')
            ->join('reserva', 'espacio.Id_espacio', '=', 'reserva.Id_espacio')
            ->select('ciudad.Nombre as city', DB::raw('count(*) as total'))
            ->where('reserva.Id_cliente', '=', 14)
            ->where('reserva.Condicion', '=', 1)
            ->groupBy('city')
            ->get();

        return response()->json($espacios);
    }
}
