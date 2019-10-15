<?php

//die("index.php");

if(empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] == "off"){
    $redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $redirect);
    exit();
}

$redirect = 'https://' . $_SERVER['HTTP_HOST'] . "/site";
header('HTTP/1.1 301 Moved Permanently');
header('Location: ' . $redirect);

?>