<?php

class Product {

    // database connection and table name 
    private $conn;
    private $table_name = "primary_from_submit";
    // object properties 
    public $id;
    public $firstname;
    public $lastname;
    public $email;
    public $description;
    public $created;
    
    // constructor with $db as database connection 
    public function __construct($db) {
        $this->conn = $db;
    }
    /*for using construct method
      public function __construct(Database $db) {
        $this->conn = $db;
    }*/
    
    // read products
    public function readAll() {
        // select all query
        $query = "SELECT id, firstname, lastname, email, description, created FROM " . $this->table_name . " ORDER BY id ASC";
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // execute query
        $stmt->execute();
        return $stmt;
    }

    // create product
   /* public function create() {

        // query to insert record
        $query = "INSERT INTO " . $this->table_name . " SET name=:name, price=:price, description=:description, created=:created";
        // prepare query
        $stmt = $this->conn->prepare($query);
        // posted values
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->description = htmlspecialchars(strip_tags($this->description));
        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":price", $this->price);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":created", $this->created);
        // execute query
        if ($stmt->execute()) {
            return true;
        } else {
            echo "<pre>";
            print_r($stmt->errorInfo());
            echo "</pre>";

            return false;
        }
    }*/

    // used when filling up the update product form

    /*public function readOne() {
       // query to read single record
        $query = "SELECT name, price, description  FROM " . $this->table_name . "WHERE id = ? LIMIT  0,1";
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // bind id of product to be updated
        $stmt->bindParam(1, $this->id);
        // execute query
        $stmt->execute();
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        // set values to object properties
        $this->name = $row['name'];
        $this->price = $row['price'];
        $this->description = $row['description'];
    }
*/
    // update the product
  /*  public function update() {
        // update query
        $query = "UPDATE " . $this->table_name . " SET  name = :name, price = :price,  description = :description WHERE id = :id";
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // posted values
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->description = htmlspecialchars(strip_tags($this->description));
        // bind new values
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':price', $this->price);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':id', $this->id);
        // execute the query
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
*/
    // delete the product
    /*function delete() {
        // delete query
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
        // prepare query
        $stmt = $this->conn->prepare($query);
        // bind id of record to delete
        $stmt->bindParam(1, $this->id);
        // execute query
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }*/

}

?>