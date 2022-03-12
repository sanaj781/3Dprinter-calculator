<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
require 'db.php';
$orders = [];
$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
$sql = "SELECT * FROM calculation_requests WHERE status='wyceniono'";
$result = mysqli_query($conn, $sql);
$resultCheck = mysqli_num_rows($result);

if ($resultCheck > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $orders[] = $row;
    }
}
echo json_encode(["row" => $orders,]);
