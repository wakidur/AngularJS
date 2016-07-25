<?php
/**
@author muni
@copyright http:www.smarttutorials.net
 */

require_once 'messages.php';

//site specific configuration declartion
define( 'BASE_PATH', 'http://demo.smarttutorials.net/twitter/');
define( 'DB_HOST', 'localhost' );
define( 'DB_USERNAME', 'root');
define( 'DB_PASSWORD', '');
define( 'DB_NAME', 'user_login');


//Twitter login
define('TWITTER_CONSUMER_KEY', 'N7Qfafm3B4hZPReVMkY3QQcV1');
define('TWITTER_CONSUMER_SECRET', 'AZ6wugYfXwnPBZcjwx6gdYBkPVWjv2GC7Yu22SVrNRvuqOHwva');
define('TWITTER_OAUTH_CALLBACK', 'http://demo.smarttutorials.net/twitter/index.php');



function __autoload($class)
{
	$parts = explode('_', $class);
	$path = implode(DIRECTORY_SEPARATOR,$parts);
	require_once $path . '.php';
}
