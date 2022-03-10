<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include 'db.php';
require_once 'autoload.php';

use \Firebase\JWT\JWT;

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
$select = mysqli_query($conn, "SELECT * FROM users WHERE login = '" . $_POST['username'] . "' AND password= '" . $_POST['password'] . "'");
$row = mysqli_fetch_assoc($select);
if (mysqli_num_rows($select)) {
    $secret_key = "YOUR_SECRET_KEY";
    $issuer_claim = "THE_ISSUER"; // this can be the servername
    $audience_claim = "THE_AUDIENCE";
    $issuedat_claim = time(); // issued at
    $notbefore_claim = $issuedat_claim + 10; //not before in seconds
    $expire_claim = $issuedat_claim + 60; // expire time in seconds
    $token = array(
        "iss" => $issuer_claim,
        "aud" => $audience_claim,
        "iat" => $issuedat_claim,
        "nbf" => $notbefore_claim,
        "exp" => $expire_claim,
        "data" => array(

            "username" => $row['name'],
            "role" => $row['role'],
        )
    );
    $jwt = JWT::encode($token, $secret_key, 'HS512');
    echo json_encode(
        array(
            "message" => "Successful login.",
            "username" => $row['name'],
            "role" => $row['role'],
            "expireAt" => $expire_claim,

            "jwt" => $jwt,

        )
    );
} else echo json_encode(["error" => 1,]);
