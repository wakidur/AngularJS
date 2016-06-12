<?php

class Cl_DBclass {

    /**
     * @variable $con will hold database connection
     */
    public $con;

    /**
     * This will create Database connection
     * Where we use MySQLi connection 
     */
    public function __construct() {
        $this->con = mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
        if (mysqli_connect_error())
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

}
