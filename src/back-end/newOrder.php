<?php
require 'userAuth.php';
if ($successAuth) {
    unset($role);
    $query = "INSERT INTO calculation_requests (project_title, ordering_person, project_file, material, color, project_description, status)
VALUES(
'" . $_POST['projectName'] . "',
'" . $_POST['fullname'] . "',
'" . $_POST['projectFile'] . "',
'" . $_POST['choosenMaterial'] . "',
'" . $_POST['materialColor'] . "',
'" . $_POST['description'] . "',
'wyslano do wyceny'
)";
    if ($_POST['projectName'] && $_POST['choosenMaterial'] && $_POST['materialColor'] && $_POST['description']) $result = @mysqli_query($conn, $query);
    if ($result) {
        echo json_encode(["sent" => 1,]);
    } else echo json_encode(["sent" => 0,]);
} else echo 'you are not authorized !';
