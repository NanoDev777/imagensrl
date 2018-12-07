<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PDF;

class ClienteController extends Controller
{
    public function getReport(Request $request)
    {
        $espacio = json_decode($request->data, true);
        PDF::SetTitle('Hello World');
        PDF::setHeaderCallback(function ($pdf) {
            $image_file = public_path('img/img.png');
            $pdf->Image($image_file, 11, 5, 77, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
            $pdf->setCellPaddings(1, 1, 1, 1);
            $pdf->setCellMargins(1, 1, 1, 1);
            $pdf->SetFillColor(250, 250, 242);
            $txt = "La Paz: Pedro Blanco Esq. Nicolas Acosta Nº 1471\nSanta Cruz: Av 2 de Agosto calle 6 lado capilla\nCochabamba: Av. Blanco Galindo Km. 11 (Aasana)";
            $pdf->MultiCell(100, 19, $txt, 1, 'L', 1, 0, 97, 3, true);
        });
        PDF::setFooterCallback(function ($pdf) {
            $fecha = date('Y');
            $html  = '<div style="background-color:#F5B7B1;color:black; text-align: center;"><span style="font-size: xx-small;">Copyright © ' . $fecha . ' Imagen S.R.L Todos los derechos reservados.</span></div><hr>';
            $pdf->writeHTMLCell(190, 0, '10', '290', $html, 0, 1, 0, true, '', true);

            $style = array(
                'border'  => false,
                'padding' => 'auto',
                'fgcolor' => array(0, 0, 0),
                'bgcolor' => false,
            );
            PDF::write2DBarcode('www.tcpdf.org', 'QRCODE,H', 178, 260, 20, 20, $style, 'N');

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
        PDF::Image('https://www.siscoimagen.com/assets/images/uploads/CAC_a.jpg', 10, 40, 189, 100, 'JPG', '', 'T', false, 150, '', false, false, 1, false, false, false);
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
    }
}
