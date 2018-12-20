<?php

namespace App\Http\Controllers;

use App\Espacio;
use App\Reserva;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PDF;

class ReporteController extends Controller
{
    public function getBillboardRented(Request $request)
    {
        try {
            $billboard = Reserva::from('reserva as r')
                ->join("cliente as c", "r.Id_cliente", "=", "c.Id_cliente")
                ->join("espacio as e", "r.Id_espacio", "=", "e.Id_espacio")
                ->join("ciudad as i", "e.Id_ciudad", "=", "i.Id_ciudad")
                ->join("tipo as t", "e.Id_tipo", "=", "t.Id_tipo")
                ->join("imagen_cliente as p", "p.Id_espacio", "=", "e.Id_espacio")
                ->where('r.Id_espacio', '=', $request->input('billboard'))
                ->select("i.Nombre as Ciudad", "e.uuid", "e.Zona", "e.Ubicacion", "e.Dimension", "t.Nombre as Tipo", "p.Url", "r.Iluminacion", "r.Impresion", "r.fecha_inicio", "r.fecha_fin")
                ->orderBy('r.Id_reserva', 'DESC')
                ->first();

            PDF::SetTitle('Detalle Valla Alquilada');
            PDF::setHeaderCallback(function ($pdf) {
                $image_file = public_path('img/img.png');
                $pdf->Image($image_file, 11, 5, 77, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
                $pdf->setCellPaddings(1, 1, 1, 1);
                $pdf->setCellMargins(1, 1, 1, 1);
                $pdf->SetFillColor(250, 250, 242);
                $txt = "La Paz: Pedro Blanco Esq. Nicolas Acosta Nº 1471\nSanta Cruz: Av 2 de Agosto calle 6 lado capilla\nCochabamba: Av. Blanco Galindo Km. 11 (Aasana)";
                $pdf->MultiCell(100, 19, $txt, 1, 'L', 1, 0, 97, 3, true);
            });
            PDF::setFooterCallback(function ($pdf) use ($billboard) {
                $fecha = date('Y');
                $html  = '<div style="background-color:#F5B7B1;color:black; text-align: center;"><span style="font-size: xx-small;">Copyright © ' . $fecha . ' Imagen S.R.L Todos los derechos reservados.</span></div><hr>';
                $pdf->writeHTMLCell(190, 0, '10', '290', $html, 0, 1, 0, true, '', true);

                $style = array(
                    'border'  => false,
                    'padding' => 'auto',
                    'fgcolor' => array(0, 0, 0),
                    'bgcolor' => false,
                );
                $uuid = "http://imagensrl.test/billboards/{$billboard->uuid}";
                PDF::write2DBarcode($uuid, 'QRCODE,M', 178, 260, 20, 20, $style, 'N');

                $footer = '';
                $footer .= '<table style="border-spacing: 5px;">';
                $footer .= '<tr style="background-color: #FBFCFC;"><td colspan="3"><strong>Contáctos:</strong></td></tr>';
                $footer .= '<tr style="background-color: #FBFCFC;"><td colspan="3"><strong>La Paz: </strong>Telf.: (591-2) 2493155 - 2493156 Cel.: 76201364</td></tr>';
                $footer .= '<tr style="background-color: #FBFCFC;"><td colspan="3"><strong>Santa Cruz: </strong>Telf./Fax: (591-3) 3494677 - Cel. 77537044</td></tr>';
                $footer .= '<tr style="background-color: #FBFCFC;"><td colspan="3"><strong>Cochabamba: </strong>Telf./Fax: (591-4) 4436519 - Cel.: 76789043 - 77539941</td></tr>';
                $footer .= '</table>';
                PDF::writeHTMLCell(187, 0, '11', '255', $footer, 0, 1, 0, true, '', true);
            });
            PDF::AddPage();
            PDF::writeHTMLCell(0, 0, '10', '26', '<hr>', 0, 0, 0, true, 'J', true);
            $title = '<h1>Información del espacio y alquiler</h1>';
            PDF::writeHTMLCell(0, 0, '10', '30', $title, 0, 0, 0, true, 'J', true);
            $image = "https://www.siscoimagen.com/assets/images/uploads/{$billboard->Url}";
            PDF::Image($image, 10, 40, 189, 100, 'JPG', '', 'T', false, 150, '', false, false, 1, false, false, false);
            $description = '<small>Fotografía del Espacio.</small>';
            PDF::writeHTMLCell(0, 0, '10', '141', $description, 0, 0, 0, true, 'J', true);

            $details = '';
            $details .= '<table style="border:6px black solid; border-spacing: 7px">';
            $details .= '<thead><tr><th style="color: #fff; background-color: #B70202" colspan="3">DETALLES DEL ESPACIO</th></tr></thead>';
            $details .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Ciudad: </strong>' . $billboard->Ciudad . '</td></tr>';
            $details .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Zona: </strong>' . $billboard->Zona . '</td></tr>';
            $details .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Dirección: </strong>' . $billboard->Ubicacion . '</td></tr>';
            $details .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Dimensión: </strong>' . $billboard->Dimension . '</td></tr>';
            $details .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Tipo de valla: </strong>' . $billboard->Tipo . '</td></tr>';
            $details .= '</table>';
            PDF::writeHTMLCell(189, 0, 10, 150, $details, 0, 1, 0, true, '', true);

            $rented = '';
            $rented .= '<table style="border:6px black solid; border-spacing: 7px">';
            $rented .= '<thead><tr><th style="color: #fff; background-color: #B70202" colspan="3">DETALLES DEL ALQUILER</th></tr></thead>';
            $rented .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Fecha de inicio: </strong>' . $billboard->fecha_inicio . '</td></tr>';
            $rented .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Fecha de fin: </strong>' . $billboard->fecha_fin . '</td></tr>';
            $rented .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Iluminación: </strong>' . $billboard->Iluminacion . '</td></tr>';
            $rented .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Impresión: </strong>' . $billboard->Impresion . '</td></tr>';
            $rented .= '</table>';
            PDF::writeHTMLCell(189, 0, 10, 205, $rented, 0, 1, 0, true, '', true);

            $str = PDF::Output('hello_world.pdf', 'E');
            return response($str);
        } catch (\Exception $e) {
            return response()->json('Ocurrió un problema, por favor recargue la página o inténtelo de nuevo más tarde.', 500);
        }
    }

    public function getBillboardDetail(Request $request)
    {
        try {
            $espacio = json_decode($request->data, true);
            PDF::SetTitle('Detalle Valla Publicitaria');
            PDF::setHeaderCallback(function ($pdf) {
                $image_file = public_path('img/img.png');
                $pdf->Image($image_file, 11, 5, 77, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
                $pdf->setCellPaddings(1, 1, 1, 1);
                $pdf->setCellMargins(1, 1, 1, 1);
                $pdf->SetFillColor(250, 250, 242);
                $txt = "La Paz: Pedro Blanco Esq. Nicolas Acosta Nº 1471\nSanta Cruz: Av 2 de Agosto calle 6 lado capilla\nCochabamba: Av. Blanco Galindo Km. 11 (Aasana)";
                $pdf->MultiCell(100, 19, $txt, 1, 'L', 1, 0, 97, 3, true);
            });
            PDF::setFooterCallback(function ($pdf) use ($espacio) {
                $fecha = date('Y');
                $html  = '<div style="background-color:#F5B7B1;color:black; text-align: center;"><span style="font-size: xx-small;">Copyright © ' . $fecha . ' Imagen S.R.L Todos los derechos reservados.</span></div><hr>';
                $pdf->writeHTMLCell(190, 0, '10', '290', $html, 0, 1, 0, true, '', true);

                $style = array(
                    'border'  => false,
                    'padding' => 'auto',
                    'fgcolor' => array(0, 0, 0),
                    'bgcolor' => false,
                );
                $uuid = "http://imagensrl.test/billboards/{$espacio['uuid']}";
                PDF::write2DBarcode($uuid, 'QRCODE,M', 178, 260, 20, 20, $style, 'N');

                $footer = '';
                $footer .= '<table style="border-spacing: 5px;">';
                $footer .= '<tr style="background-color: #FBFCFC;"><td colspan="3"><strong>Contáctos:</strong></td></tr>';
                $footer .= '<tr style="background-color: #FBFCFC;"><td colspan="3"><strong>La Paz: </strong>Telf.: (591-2) 2493155 - 2493156 Cel.: 76201364</td></tr>';
                $footer .= '<tr style="background-color: #FBFCFC;"><td colspan="3"><strong>Santa Cruz: </strong>Telf./Fax: (591-3) 3494677 - Cel. 77537044</td></tr>';
                $footer .= '<tr style="background-color: #FBFCFC;"><td colspan="3"><strong>Cochabamba: </strong>Telf./Fax: (591-4) 4436519 - Cel.: 76789043 - 77539941</td></tr>';
                $footer .= '</table>';
                PDF::writeHTMLCell(187, 0, '11', '255', $footer, 0, 1, 0, true, '', true);
            });
            PDF::AddPage();
            PDF::writeHTMLCell(0, 0, '10', '26', '<hr>', 0, 0, 0, true, 'J', true);
            $title = '<h1>Información y detalles del espacio publitario</h1>';
            PDF::writeHTMLCell(0, 0, '10', '30', $title, 0, 0, 0, true, 'J', true);
            $image = "https://www.siscoimagen.com/assets/images/uploads/{$espacio['images']}";
            PDF::Image($image, 10, 40, 189, 100, 'JPG', '', 'T', false, 150, '', false, false, 1, false, false, false);
            $description = '<small>Fotografía del Espacio.</small>';
            PDF::writeHTMLCell(0, 0, '10', '141', $description, 0, 0, 0, true, 'J', true);

            $locations = '';
            $locations .= '<table style="border:6px black solid; border-spacing: 7px">';
            $locations .= '<thead><tr><th style="color: #fff; background-color: #B70202" colspan="3">UBICACIÓN</th></tr></thead>';
            $locations .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Ciudad: </strong>' . $espacio['city'] . '</td></tr>';
            $locations .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Zona: </strong>' . $espacio['zone'] . '</td></tr>';
            $locations .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Dirección: </strong>' . $espacio['location'] . '</td></tr>';
            $locations .= '</table>';
            PDF::writeHTMLCell(189, 0, 10, 150, $locations, 0, 1, 0, true, '', true);

            $details = '';
            $details .= '<table style="border:6px black solid; border-spacing: 7px">';
            $details .= '<thead><tr><th style="color: #fff; background-color: #B70202" colspan="3">CARACTERÍSTICAS</th></tr></thead>';
            $details .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Dimensión: </strong>' . $espacio['dimension'] . '</td></tr>';
            $details .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Iluminación: </strong>' . $espacio['illumination'] . '</td></tr>';
            $details .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Costo mensual: </strong>' . $espacio['price'] . ' bs</td></tr>';
            $details .= '<tr style="background-color: #F0F0F0"><td colspan="3"><strong>Tipo de valla: </strong>' . $espacio['type'] . '</td></tr>';
            $details .= '</table>';
            PDF::writeHTMLCell(189, 0, 10, 190, $details, 0, 1, 0, true, '', true);

            $str = PDF::Output('hello_world.pdf', 'E');
            return response($str);
        } catch (\Exception $e) {
            return response()->json('Ocurrió un problema, por favor recargue la página o inténtelo de nuevo más tarde.', 500);
        }
    }

    public function listBillboardRented(Request $request)
    {
        try {
            $billboards = Reserva::from('reserva as r')
                ->join('cliente as c', 'r.Id_cliente', '=', 'c.Id_cliente')
                ->join('espacio as e', 'r.Id_espacio', '=', 'e.Id_espacio')
                ->join('ciudad as i', 'e.Id_ciudad', '=', 'i.Id_ciudad')
                ->join('tipo as t', 'e.Id_tipo', '=', 't.Id_tipo')
                ->where('r.Estado', '!=', 0)
                ->where('r.Id_cliente', '=', $request->input('client'))
                ->select('i.Nombre as Ciudad', 'e.Zona', 'e.Ubicacion', 't.Nombre as Tipo', 'r.Iluminacion', 'r.Impresion', 'r.fecha_inicio', 'r.fecha_fin', DB::raw('(CASE r.Condicion WHEN "1" THEN "ACTIVO" WHEN "0" THEN "TERMINADO" ELSE "TERMINADO" END) AS Estado'))
                ->orderBy('r.Id_reserva', 'DESC')
                ->get();

            PDF::SetTitle('Lista de vallas alquiladas');
            PDF::SetMargins(1, 33, 10);
            PDF::setHeaderCallback(function ($pdf) {
                $image_file = public_path('img/img.png');
                $pdf->Image($image_file, 11, 5, 77, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
                $pdf->setCellPaddings(1, 1, 1, 1);
                $pdf->setCellMargins(1, 1, 1, 1);
                $pdf->SetFillColor(250, 250, 242);
                $txt = "La Paz: Pedro Blanco Esq. Nicolas Acosta Nº 1471\nSanta Cruz: Av 2 de Agosto calle 6 lado capilla\nCochabamba: Av. Blanco Galindo Km. 11 (Aasana)\nE-mail: contactos@imagenpublicidad.com.bo";
                $pdf->MultiCell(100, 19, $txt, 1, 'L', 1, 0, 97, 1, true);
                PDF::writeHTMLCell(0, 0, '10', '26', '<hr>', 0, 0, 0, true, 'J', true);
                $style = array(
                    'border'  => false,
                    'padding' => 'auto',
                    'fgcolor' => array(137, 137, 137),
                    'bgcolor' => false,
                );
                PDF::write2DBarcode('https://www.imagenpublicidad.com.bo', 'QRCODE,M', 260, 2, 30, 25, $style, 'N');
            });
            PDF::setFooterCallback(function ($pdf) {
                $fecha = date('Y');
                $html  = '<div style="background-color:#F5B7B1;color:black; text-align: center;"><span style="font-size: xx-small;">Copyright © ' . $fecha . ' Imagen S.R.L Todos los derechos reservados.</span></div>';
                $pdf->writeHTMLCell(276, 0, '10', '203', $html, 0, 1, 0, true, '', true);
            });
            PDF::AddPage('L', 'A4');
            $title = '<h1>Lista general de vallas alquiladas</h1>';
            PDF::writeHTMLCell(0, 0, '10', '30', $title, 0, 0, 0, true, 'J', true);
            $subtitle = '<p>La lista se ordenará de forma descendente, de acuerdo a la fecha que fueron alquiladas.</p>';
            PDF::writeHTMLCell(0, 0, '10', '40', $subtitle, 0, 0, 0, true, 'J', true);
            $date = "<b>" . date('d-m-Y') . "</b>";
            PDF::writeHTMLCell(0, 0, '262', '30', $date, 0, 1, 0, true, '', true);

            $html = '';
            $html .= '<table style="border:1px black solid; border-spacing: 2px">';
            $html .= '<thead><tr style="color: #fff; font-family: arial; background-color: #D67272; font-size: 11px; font-weight: bold; text-align: center">';
            $html .= '<th style="width: 8%">CIUDAD</th>';
            $html .= '<th style="width: 8%">ZONA</th>';
            $html .= '<th style="width: 16%">UBICACIÓN</th>';
            $html .= '<th style="width: 4%">TIPO</th>';
            $html .= '<th style="width: 8%">ILUMINACIÓN</th>';
            $html .= '<th style="width: 7%">IMPRESIÓN</th>';
            $html .= '<th style="width: 6%">F. INICIO</th>';
            $html .= '<th style="width: 6%">F. FIN</th>';
            $html .= '<th style="width: 6%">ESTADO</th>';
            $html .= '</tr></thead>';
            foreach ($billboards as $billboard) {
                $html .= '<tr style="background-color: #F0F0F0">';
                $html .= '<td style="width: 8%; font-size: 10px;  text-align: left">' . $billboard->Ciudad . '</td>';
                $html .= '<td style="width: 8%; font-size: 10px;  text-align: left">' . $billboard->Zona . '</td>';
                $html .= '<td style="width: 16%; font-size: 10px;  text-align: left">' . $billboard->Ubicacion . '</td>';
                $html .= '<td style="width: 4%; font-size: 10px;  text-align: left">' . $billboard->Tipo . '</td>';
                $html .= '<td style="width: 8%; font-size: 8px;  text-align: left">' . $billboard->Iluminacion . '</td>';
                $html .= '<td style="width: 7%; font-size: 10px;  text-align: left">' . $billboard->Impresion . '</td>';
                $html .= '<td style="width: 6%; font-size: 10px;  text-align: left">' . $billboard->fecha_inicio . '</td>';
                $html .= '<td style="width: 6%; font-size: 10px;  text-align: left">' . $billboard->fecha_fin . '</td>';
                $html .= '<td style="width: 6%; font-size: 10px;  text-align: left">' . $billboard->Estado . '</td>';
                $html .= '</tr>';
            }
            $html .= '</table>';
            PDF::writeHTMLCell(396, 0, '10', '47', $html, 0, 1, 0, true, '', true);

            $str = PDF::Output('hello_world.pdf', 'E');
            return response($str);
        } catch (\Exception $e) {
            return response()->json('Ocurrió un problema, por favor recargue la página o inténtelo de nuevo más tarde.', 500);
        }
    }

    public function listGeneralBillboard()
    {
        try {
            $billboards = Espacio::join('tipo', 'espacio.Id_tipo', '=', 'tipo.Id_tipo')
                ->join('ciudad', 'ciudad.Id_ciudad', '=', 'espacio.Id_ciudad')
                ->select('ciudad.Nombre as Ciudad', 'espacio.Zona', 'espacio.Ubicacion', 'tipo.Nombre as Tipo', 'espacio.Dimension', 'espacio.Iluminacion', DB::raw('(CASE espacio.Estado WHEN "1" THEN "Disponible" WHEN "2" THEN "Ocupada" ELSE "No disponible" END) AS Estado'))
                ->where('espacio.Estado', '!=', 0)
                ->orderBy('espacio.Id_espacio', 'DESC')
                ->get();

            PDF::SetTitle('Lista general de vallas');
            PDF::SetMargins(1, 33, 10);
            PDF::setHeaderCallback(function ($pdf) {
                $image_file = public_path('img/img.png');
                $pdf->Image($image_file, 11, 5, 77, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
                $pdf->setCellPaddings(1, 1, 1, 1);
                $pdf->setCellMargins(1, 1, 1, 1);
                $pdf->SetFillColor(250, 250, 242);
                $txt = "La Paz: Pedro Blanco Esq. Nicolas Acosta Nº 1471\nSanta Cruz: Av 2 de Agosto calle 6 lado capilla\nCochabamba: Av. Blanco Galindo Km. 11 (Aasana)\nE-mail: contactos@imagenpublicidad.com.bo";
                $pdf->MultiCell(100, 19, $txt, 1, 'L', 1, 0, 97, 1, true);
                PDF::writeHTMLCell(0, 0, '10', '26', '<hr>', 0, 0, 0, true, 'J', true);
                $style = array(
                    'border'  => false,
                    'padding' => 'auto',
                    'fgcolor' => array(137, 137, 137),
                    'bgcolor' => false,
                );
                PDF::write2DBarcode('https://www.imagenpublicidad.com.bo', 'QRCODE,M', 260, 2, 30, 25, $style, 'N');
            });
            PDF::setFooterCallback(function ($pdf) {
                $fecha = date('Y');
                $html  = '<div style="background-color:#F5B7B1;color:black; text-align: center;"><span style="font-size: xx-small;">Copyright © ' . $fecha . ' Imagen S.R.L Todos los derechos reservados.</span></div>';
                $pdf->writeHTMLCell(276, 0, '10', '203', $html, 0, 1, 0, true, '', true);
            });
            PDF::AddPage('L', 'A4');
            $title = '<h1>Lista general de vallas</h1>';
            PDF::writeHTMLCell(0, 0, '10', '30', $title, 0, 0, 0, true, 'J', true);
            $date = "<b>" . date('d-m-Y') . "</b>";
            PDF::writeHTMLCell(0, 0, '262', '30', $date, 0, 1, 0, true, '', true);

            $html = '';
            $html .= '<table style="border:1px black solid; border-spacing: 2px">';
            $html .= '<thead><tr style="color: #fff; font-family: arial; background-color: #D67272; font-size: 11px; font-weight: bold; text-align: center">';
            $html .= '<th style="width: 8%">CIUDAD</th>';
            $html .= '<th style="width: 8%">ZONA</th>';
            $html .= '<th style="width: 20%">UBICACIÓN</th>';
            $html .= '<th style="width: 6%">TIPO</th>';
            $html .= '<th style="width: 10%">DIMENSIÓN</th>';
            $html .= '<th style="width: 10%">ILUMINACIÓN</th>';
            $html .= '<th style="width: 7%">ESTADO</th>';
            $html .= '</tr></thead>';
            foreach ($billboards as $billboard) {
                $html .= '<tr style="background-color: #F0F0F0">';
                $html .= '<td style="width: 8%; font-size: 10px;  text-align: left">' . $billboard->Ciudad . '</td>';
                $html .= '<td style="width: 8%; font-size: 10px;  text-align: left">' . $billboard->Zona . '</td>';
                $html .= '<td style="width: 20%; font-size: 10px;  text-align: left">' . $billboard->Ubicacion . '</td>';
                $html .= '<td style="width: 6%; font-size: 10px;  text-align: left">' . $billboard->Tipo . '</td>';
                $html .= '<td style="width: 10%; font-size: 10px;  text-align: left">' . $billboard->Dimension . '</td>';
                $html .= '<td style="width: 10%; font-size: 10px;  text-align: left">' . $billboard->Iluminacion . '</td>';
                $html .= '<td style="width: 7%; font-size: 10px;  text-align: left">' . $billboard->Estado . '</td>';
                $html .= '</tr>';
            }
            $html .= '</table>';
            PDF::writeHTMLCell(396, 0, '10', '40', $html, 0, 1, 0, true, '', true);

            $str = PDF::Output('hello_world.pdf', 'E');
            return response($str);
        } catch (\Exception $e) {
            return response()->json('Ocurrió un problema, por favor recargue la página o inténtelo de nuevo más tarde.', 500);
        }
    }

    public function listBillboardFiltered(Request $request)
    {
        try {
            $billboards = Espacio::join('tipo', 'espacio.Id_tipo', '=', 'tipo.Id_tipo')
                ->join('ciudad', 'ciudad.Id_ciudad', '=', 'espacio.Id_ciudad')
                ->select('ciudad.Nombre as Ciudad', 'espacio.Zona', 'espacio.Ubicacion', 'tipo.Nombre as Tipo', 'espacio.Dimension', 'espacio.Iluminacion', DB::raw('(CASE espacio.Estado WHEN "1" THEN "Disponible" WHEN "2" THEN "Ocupada" ELSE "No disponible" END) AS Estado'))
                ->where('espacio.Estado', '!=', 0);

            if ($request->has('city')) {
                $city = $request->input('city');

                $billboards = $billboards->where(function ($query) use ($city) {
                    $query->where('ciudad.Nombre', 'LIKE', "%" . $city . "%");
                });
            }

            if ($request->has('type')) {
                $type = $request->input('type');

                $billboards = $billboards->where(function ($query) use ($type) {
                    $query->where('tipo.Nombre', 'LIKE', "%" . $type . "%");
                });
            }

            if ($request->has('state')) {
                $state = $request->input('state');

                $billboards = $billboards->where(function ($query) use ($state) {
                    $query->where('espacio.Estado', 'LIKE', "%" . $state . "%");
                });
            }
            if ($request->has('filter')) {
                $filter = $request->input('filter');

                $billboards = $billboards->where(function ($query) use ($filter) {
                    $query->where('espacio.Zona', 'LIKE', "%" . $filter . "%")
                        ->orWhere('espacio.Ubicacion', 'LIKE', "%" . $filter . "%");
                });
            }
            $billboards = $billboards->orderBy('espacio.Id_espacio', 'DESC')->get();

            PDF::SetTitle('Lista general de vallas');
            PDF::SetMargins(1, 33, 10);
            PDF::setHeaderCallback(function ($pdf) {
                $image_file = public_path('img/img.png');
                $pdf->Image($image_file, 11, 5, 77, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
                $pdf->setCellPaddings(1, 1, 1, 1);
                $pdf->setCellMargins(1, 1, 1, 1);
                $pdf->SetFillColor(250, 250, 242);
                $txt = "La Paz: Pedro Blanco Esq. Nicolas Acosta Nº 1471\nSanta Cruz: Av 2 de Agosto calle 6 lado capilla\nCochabamba: Av. Blanco Galindo Km. 11 (Aasana)\nE-mail: contactos@imagenpublicidad.com.bo";
                $pdf->MultiCell(100, 19, $txt, 1, 'L', 1, 0, 97, 1, true);
                PDF::writeHTMLCell(0, 0, '10', '26', '<hr>', 0, 0, 0, true, 'J', true);
                $style = array(
                    'border'  => false,
                    'padding' => 'auto',
                    'fgcolor' => array(137, 137, 137),
                    'bgcolor' => false,
                );
                PDF::write2DBarcode('https://www.imagenpublicidad.com.bo', 'QRCODE,M', 260, 2, 30, 25, $style, 'N');
            });
            PDF::setFooterCallback(function ($pdf) {
                $fecha = date('Y');
                $html  = '<div style="background-color:#F5B7B1;color:black; text-align: center;"><span style="font-size: xx-small;">Copyright © ' . $fecha . ' Imagen S.R.L Todos los derechos reservados.</span></div>';
                $pdf->writeHTMLCell(276, 0, '10', '203', $html, 0, 1, 0, true, '', true);
            });
            PDF::AddPage('L', 'A4');
            $title = '<h1>Lista de vallas filtradas</h1>';
            PDF::writeHTMLCell(0, 0, '10', '30', $title, 0, 0, 0, true, 'J', true);
            $date = "<b>" . date('d-m-Y') . "</b>";
            PDF::writeHTMLCell(0, 0, '262', '30', $date, 0, 1, 0, true, '', true);

            $html = '';
            $html .= '<table style="border:1px black solid; border-spacing: 2px">';
            $html .= '<thead><tr style="color: #fff; font-family: arial; background-color: #D67272; font-size: 11px; font-weight: bold; text-align: center">';
            $html .= '<th style="width: 8%">CIUDAD</th>';
            $html .= '<th style="width: 8%">ZONA</th>';
            $html .= '<th style="width: 20%">UBICACIÓN</th>';
            $html .= '<th style="width: 6%">TIPO</th>';
            $html .= '<th style="width: 10%">DIMENSIÓN</th>';
            $html .= '<th style="width: 10%">ILUMINACIÓN</th>';
            $html .= '<th style="width: 7%">ESTADO</th>';
            $html .= '</tr></thead>';
            foreach ($billboards as $billboard) {
                $html .= '<tr style="background-color: #F0F0F0">';
                $html .= '<td style="width: 8%; font-size: 10px;  text-align: left">' . $billboard->Ciudad . '</td>';
                $html .= '<td style="width: 8%; font-size: 10px;  text-align: left">' . $billboard->Zona . '</td>';
                $html .= '<td style="width: 20%; font-size: 10px;  text-align: left">' . $billboard->Ubicacion . '</td>';
                $html .= '<td style="width: 6%; font-size: 10px;  text-align: left">' . $billboard->Tipo . '</td>';
                $html .= '<td style="width: 10%; font-size: 10px;  text-align: left">' . $billboard->Dimension . '</td>';
                $html .= '<td style="width: 10%; font-size: 10px;  text-align: left">' . $billboard->Iluminacion . '</td>';
                $html .= '<td style="width: 7%; font-size: 10px;  text-align: left">' . $billboard->Estado . '</td>';
                $html .= '</tr>';
            }
            $html .= '</table>';
            PDF::writeHTMLCell(396, 0, '10', '40', $html, 0, 1, 0, true, '', true);

            $str = PDF::Output('hello_world.pdf', 'E');
            return response($str);
        } catch (\Exception $e) {
            return response()->json('Ocurrió un problema, por favor recargue la página o inténtelo de nuevo más tarde.', 500);
        }
    }
}
