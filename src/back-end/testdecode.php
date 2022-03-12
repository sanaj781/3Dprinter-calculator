<?php
require 'autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$key = "YOUR_SECRET_KEY";
// $payload = array(
//     "iss" => $issuer_claim,
//     "aud" => $audience_claim,
//     "iat" => $issuedat_claim,
//     "nbf" => $notbefore_claim,
//     "exp" => $expire_claim,
//     "data" => array(
//         "username" => $row['name'],
//         "role" => $row['role'],
//     )
// );

/**
 * IMPORTANT:
 * You must specify supported algorithms for your application. See
 * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
 * for a list of spec-compliant algorithms.
 */
// $jwt = JWT::encode($payload, $key, 'HS256');
$jwt1 = array('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJUSEVfSVNTVUVSIiwiYXVkIjoiVEhFX0FVRElFTkNFIiwiaWF0IjoxNjQ3MDAxMTY2LCJuYmYiOjE2NDcwMDExNjYsImV4cCI6MTY0NzAwMTc2NiwiZGF0YSI6eyJ1c2VybmFtZSI6IkRlbnlzIFNoZXZjaGVua28iLCJyb2xlIjoiYWRtaW4ifX0.UDEEX_JWibyhBb7HZY_-W4ZRNycAWGsssVfn0ORC2MJ4QH5cORDQ8NbuKE4Q4rr2gZzcMciF5tME2NzfADhoAA');
$jwt = $jwt1[0];
echo ($jwt);
try {
    $decoded = JWT::decode($jwt, new Key($key, 'HS512'));
    if ($decoded) {
        echo json_encode(array(
            "message" => "Access granted:",
            "error" => $e->getMessage()
        ));
    } else {
        echo json_encode(array(
            "message" => "Access denied:",
            "jwt" => $key,
        ));
    }
} catch (Exception $e) {

    http_response_code(401);

    echo json_encode(array(
        "message" => "Access denied.",
        "error" => $e->getMessage()
    ));
}



// print_r($decoded);
