<?php 
class Database{ 
    // specify your own database credentials 
    private $host = "localhost"; 
    private $db_name = "angularjs"; 
    private $username = "root"; 
    private $password = ""; 
    public $conn; 
 
    // get the database connection 
    public function getConnection(){ 
        $this->conn = null;
        try{
            $this->conn = new PDO( "mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }   
        return $this->conn;
    }
}
?>


<?php
/*class Database extends PDO {
    //Variable declaration
    private $host = "localhost";
    private $passwd = "";
    private $username = "root";
    private $dbname = "angularjs";

    //Connect to DB when the class construct
    public function __construct($host=NULL, $dbname=NULL, $username=NULL, $passwd=NULL) {
        if(isset($host) && !empty($host)) {
            $this->host = $host;
        }

        if(isset($dbname) && !empty($dbname)) {
            $this->dbname = $dbname;
        }

        if(isset($username) && !empty($username)) {
            $this->username = $username;
        }

        if(isset($passwd) && !empty($passwd)) {
            $this->passwd = $passwd;
        }

        parent::__construct("mysql:dbname=$this->dbname;host=$this->host", $this->username, $this->passwd, NULL);
        parent::setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        parent::setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    }

}*/
?>