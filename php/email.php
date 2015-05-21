<?php

if ($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['msg'];

    //send email
    mail("ajagoda@u.rochester.edu", $subject, $email, $message);
}


?>
