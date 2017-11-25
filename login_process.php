<?php
        //Get values from the form in login.php file


$username = $_POST['username'];
$password = $_POST['password'];

//to prevent mysql injection
//$username = stripcslashes($username);
//$password = stripcslashes($password);


//connect to the server and select database

mysqli_connect("localhost" , "root","root");
$con = mysqli_connect("localhost" , "root","root");
mysqli_select_db($con,"boostnexus");

//query the database for user

$result = mysqli_query($con,"select * from users where username = '$username' and password = '$password'")
                            or die("Failed to query database".mysql_error());

$row = mysqli_fetch_array($result);
if ($row['username'] == $username && $row['password'] == $password) {
  echo "Login success! Welcome ".$row['username'];
} else {
  echo "Failed to login!";
}

header("Location: http://localhost/boostnexus/administrator_logged.html"); /* Redirect browser */
exit();



 ?>
