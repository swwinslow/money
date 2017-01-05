<?php

/**
 * @SWG\Swagger(
 *   schemes={"http"},
 *   host="localhost:8888",
 *   basePath="/orchid_site/public/api",
 *   produces={"application/json"},
 *   @SWG\Info(
 *     title="Orchid Site Backend",
 *     description="RESTful service for Orchid Site",
 *     version="1.0.0",
 *     @SWG\Contact(name="The Digital Corps", email="bsu.digital.corps@gmail.com"),
 * 	   @SWG\License(name="proprietary")
 *   )
 * )
 *
 * @SWG\Definition(
 * 	    definition="Error",
 * 		required={"status", "error", "msg"},
 *		@SWG\Property(property="status", type="integer"),
 *		@SWG\Property(property="error", type="boolean"),
 *		@SWG\Property(property="msg", type="string"),
 * 	 )
 */
if (PHP_SAPI == 'cli-server') {
    // To help the built-in PHP dev server, check if the request was actually for
    // something which should probably be served as a static file
    $file = __DIR__ . $_SERVER['REQUEST_URI'];
    if (is_file($file)) {
        return false;
    }
}

require __DIR__ . '/../vendor/autoload.php';

session_start();

// Instantiate the app
$settings = require __DIR__ . '/../src/settings.php';
$app = new \Slim\App($settings);
$current_admin_session;
// Set up dependencies
require __DIR__ . '/../src/dependencies.php';

// Register middleware
require __DIR__ . '/../src/middleware.php';

// Register routes
require __DIR__ . '/../src/api/trans.php';
require __DIR__ . '/../src/api/pay.php';
require __DIR__ . '/../src/api/investments.php';
require __DIR__ . '/../src/api/complete.php';

//Register Models
require __DIR__ . '/../src/Model/Trans.php';
require __DIR__ . '/../src/Model/Pay.php';
require __DIR__ . '/../src/Model/Investments.php';
require __DIR__ . '/../src/Model/Complete.php';

// Run app
$app->run();
