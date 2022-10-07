<?php
$user_name = $_POST["name"];
$user_email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$email_from = "connorbernard@berkeley.edu";
$email_subject = "Gypsy's: $subject"
$email_body = "
    User: $user_name\n
    User email: $user_email\n
    Message: $message\n
"
$headers = "From: $email_from";
$headers .= "Reply-To: $user_email";
mail("connorbernard@berkeley.edu", $email_subject, $email_body, $headers);
?>
