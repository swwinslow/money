<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);

class Validator
{

}

$validate_admin = function ($request, $response, $next) {
    //if Validated, creates a global AdminSession object called currentAdminSession
    $results = Validator::validate_admin_session($request, $response);
    if (gettype($results) == 'array') {
        return $response->withJSON($results);
    } else {
        $response = $next($request, $response);
    }

    return $response;
};

$app->add(function ($request, $response, $next) {
    $response = $response->withHeader('Content-Type', 'application/json');
    return $next($request, $response);
});
