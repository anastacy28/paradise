<?php

$recepient = "zayuliya22@gmail.com";
$sitename = "paradise-wave";

$method = $_SERVER['REQUEST_METHOD'];

if ( $method === 'POST' ) {
	foreach ( $_POST as $key => $value ) {
			if ( $value != "" ) {
				$message .= "" . $key . ":" . " " . $value . "\n";
			}
		}
}


$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");