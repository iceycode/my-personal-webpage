<?php

//Yet another php for email via form
if(isset($_POST['email'])) {



    // EDIT THE 2 LINES BELOW AS REQUIRED

    $email_to = "allen.jagoda@gmail.com";

    $email_subject = "Inquiery from Visitor";





    function died($error) {

        // your error code can go here

        echo "We are very sorry, but there were error(s) found with the form you submitted. ";

        echo "These errors appear below.<br /><br />";

        echo $error."<br /><br />";

        echo "Please go back and fix these errors.<br /><br />";

        die();

    }



    // validation expected data exists

    if(!isset($_POST['name']) ||

        !isset($_POST['email']) ||

        !isset($_POST['message'])) {

        died('One or more of the form fields are not filled in.');

    }



    $first_name = $_POST['name']; // required
//    $last_name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['message']; // required


    //this gets filled out by conditionals below
    $error_message = "";

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if(!preg_match($email_exp,$email_from)) {

    $error_message .= 'The email address you entered does not appear to be valid.<br />';

  }

    $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$first_name)) {

    $error_message .= 'The name you entered does not appear to be valid.<br />';

  }

//  if(!preg_match($string_exp,$last_name)) {
//
//    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
//
//  }

  if(strlen($comments) < 2) {

    $error_message .= 'The message you entered is too short.<br />';

  }

  if(strlen($error_message) > 0) {

    died($error_message);
  }

    $email_message = "Form details below.\n\n";



    function clean_string($string) {

      $bad = array("content-type","bcc:","to:","cc:","href");

      return str_replace($bad,"",$string);

    }



    $email_message .= "First Name: ".clean_string($first_name)."\n";

    $email_message .= "Last Name: ".clean_string($last_name)."\n";

    $email_message .= "Email: ".clean_string($email_from)."\n";

    $email_message .= "Telephone: ".clean_string($telephone)."\n";

    $email_message .= "Message: ".clean_string($message)."\n";





// create email headers

$headers = 'From: '.$email_from."\r\n".

'Reply-To: '.$email_from."\r\n" .

'X-Mailer: PHP/' . phpversion();

@mail($email_to, $email_subject, $email_message, $headers);

?>

<script language="javascript" type="text/javascript">
		$(document).ready(function(){
            alert('Thank you for contacting me. I will get back to you as soon as I can.');
            window.location = '/index.html';
        });

</script>

<?php

}

?>
