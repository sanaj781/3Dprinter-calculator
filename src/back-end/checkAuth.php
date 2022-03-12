<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Content-Type,      Accept");

header("Content-Type: application/json; charset=UTF-8");
require 'autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$auth = 0;
if (!(preg_match('/Bearer\s(\S+)/', $_SERVER['HTTP_AUTHORIZATION'], $matches))) {
    echo 'Token not found in request';
    exit;
} else {
    $jwt = $matches[1];
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
}
