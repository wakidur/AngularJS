<?php
class Product{
     
    // database connection and table name
    private $conn;
    private $table_name = "images";
     
    // object properties
    public $id;
    public $original_image;
    public $thumbnail_image;
    public $ip_address;
    
     
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    
    // read products
function readAll(){
 
    // select all query
    $query = "SELECT 
                id, original_image, thumbnail_image, ip_address
            FROM 
                " . $this->table_name . "
            ORDER BY 
                id DESC";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
     
    // execute query
    $stmt->execute();
     
    return $stmt;
}
  
}
