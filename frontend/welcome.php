<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome Page</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <style type="text/css">
        body{ font: 14px sans-serif; }
        .wrapper{ width: 350px; padding: 20px; }
    </style>
</head>
<body>
    <div class="wrapper">
        <h2>Welcome to travel booster services</h2>
        <p>partnered by Visa</p>
        <div class="form-group">
                <input type="submit" class="btn btn-primary" value="logout">
                <a class="btn btn-link" href="logout.php">Logout</a>
        </div>
        <button onclick="location.href = 'logout.php';" id="logoutButton" class="float-left submit-button" >Log out</button>
        <button onclick="location.href = 'travelnotifications.php';" id="logoutButton" class="float-left submit-button" >Travel notifications</button>
        <button onclick="location.href = 'locateatm.php';" id="logoutButton" class="float-left submit-button" >Locate ATM</button>
        <button onclick="location.href = 'locatemerchant.php';" id="logoutButton" class="float-left submit-button" >Locate Merchant</button>
        <button onclick="location.href = 'lostcard.php';" id="logoutButton" class="float-left submit-button" >Lost Card</button>
    </div>    
</body>
</html>