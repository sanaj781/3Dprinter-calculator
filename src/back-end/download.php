<?php
require 'autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$auth = 0;
if ($_GET['jwt']) {
    $jwt = $_GET['jwt'];
    include 'token.php';
    try {
        $decoded = JWT::decode($jwt, new Key($secret_key, 'HS512'));
        if ($decoded) {
            $auth = 1;
            echo json_encode(array(
                "message" => "Access granted.",

            ));
        }
    } catch (Exception $e) {
        echo json_encode(array(
            "message" => "Access denied.",
            "error" => $e->getMessage()
        ));
    }
    if ($auth === 1) {
        if (isset($_GET['order'])) {
            //Read the filename
            $filename = $_GET['order'];
            //Check the file exists or not
            if (file_exists($filename)) {

                //Define header information
                header('Content-Description: File Transfer');
                header('Content-Type: application/octet-stream');
                header("Cache-Control: no-cache, must-revalidate");
                header("Expires: 0");
                header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
                header('Content-Length: ' . filesize($filename));
                header('Pragma: public');

                //Clear system output buffer
                flush();

                //Read the size of the file
                readfile($filename);

                //Terminate from the script
                die();
            } else {
                echo "File does not exist.";
            }
        } else
            echo "Filename is not defined.";
    }
}
