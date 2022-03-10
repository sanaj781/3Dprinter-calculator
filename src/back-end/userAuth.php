<?php
require 'db.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
$select = mysqli_query($conn, "SELECT * FROM users WHERE login = '" . $_POST['username'] . "' AND password= '" . $_POST['password'] . "'");
$row = mysqli_fetch_assoc($select);
if (mysqli_num_rows($select)) {
    echo json_encode(["role" =>  $row['role'], "username" =>  $row['name'], "login" =>  $row['login'], "password" =>  $row['password'],]);
    $successAuth = 1;
} else echo json_encode(["error" => 1,]);
