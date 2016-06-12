<?php
/**
@author muni
@copyright http:www.smarttutorials.net
 */

require_once 'messages.php';

//site specific configuration declartion
define( 'BASE_PATH', 'http://localhost/AngularJS/smarttutorials/login_part1');
define( 'DB_HOST', 'localhost' );
define( 'DB_USERNAME', 'root');
define( 'DB_PASSWORD', '');
define( 'DB_NAME', 'smart_tutorials');

function __autoload($class)
{
    $parts = explode('_', $class);
    $path = implode(DIRECTORY_SEPARATOR,$parts);
    require_once $path . '.php';
    print_r($path);
}
