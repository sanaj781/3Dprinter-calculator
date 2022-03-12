<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include 'db.php';
require 'autoload.php';

use \Firebase\JWT\JWT;

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$select = mysqli_query($conn, "SELECT * FROM users WHERE login = '" . $_POST['username'] . "' AND password= '" . $_POST['password'] . "'");
$row = mysqli_fetch_assoc($select);
if (mysqli_num_rows($select)) {
    include 'token.php';
    $jwt = JWT::encode($token, $secret_key, 'HS512');
    echo json_encode(
        array(
            "jwt" => $jwt,
        )
    );
} else {
    echo json_encode(["error" => 1,]);
}
