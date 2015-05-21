<?php
//Contact form in PHP
//Attributes
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_message = $_POST['message'];
//$field_subject = $_POST['subject'];

$mail_to = "ajagoda@u.rochester.edu";

$subject = "Inquiery from Visitor";
//$subject = $field_subject;
////Subject of email
//if ($field_subject != ""){
//    $subject = $field_subject;
//}

$body_message = 'From: '.$field_name."\n";
$body_message .= 'Email: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

//wraps message body
$body_message = wordwrap($body_message, 70, "\r\n");

//HEADERS OF MESSAGE
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

//Status of mail: used by function below to check if sent
$mail_status = mail($mail_to, $subject, $body_message, $headers);

// If-else statement for mail status executing
//if [success], else [failure]
if ($mail_status) {
?>
	<script language="javascript" type="text/javascript">
		$(document).ready(function(){
            alert('Thank you for contacting me. I will get back to you as soon as I can.');
            window.location = '/index.html';
        });

	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		document.alert('Message failed. Please, send an email to ajagoda@u.rochester.edu');
        window.location = '/index.html';
	</script>
<?php
}
?>
