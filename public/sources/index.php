<?php

header("Access-Control-Allow-Origin: *", false);

function err($elem)
{
    echo $elem;
    header("HTTP/1.0 418 I'm a teapot");
    die();
}

if (isset($_GET["file"])) {
    $file = "./files/" . $_GET["file"];
    if (!file_exists($file)) {
        err("Error: File not found");
    }
    header("Content-Type: text/markdown", false);
    readfile($file);
    die();
}
if (isset($_GET["css"])) {
    $file = "./styles/" . $_GET["css"];
    if (!file_exists($file)) {
        err("Error: File not found");
    }
    header("Content-Type: text/css", false);
    readfile($file);
    die();
}
err("Error: No params provided");