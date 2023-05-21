<?php
    //to do
    // add captcha

$username = $email = $phone = $phoneExt = $phoneCountry = $location = $category = $message = "";

$usernameErr = $emailErr = $phoneErr = $locationErr = '';
$categoryErr = $messageErr = '';

// if the form has been submitted.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
// ********************************** form validation **********************
  // validate each input.
  //  -check for empties
  //  -check some formats
  if (empty($_POST["user_name"])) {
    $usernameErr = "Name is required.";
  } else {
    $username = test_input($_POST["user_name"]);
    if (!preg_match("/^[a-zA-Z ]*$/", $username)) {
      $usernameErr = "Name error: Only letters and white space allowed";
    }
  }

  if (empty($_POST["user_email"])) {
    $emailErr = "Email is required.";
  } else {
    $email = test_input($_POST["user_email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Email error: Invalid email format";
    }
  }

  if (empty($_POST["user_phone"])) {
    $phoneErr = "Phone is required.";
  } else {
    // default to user-entered phone if intl-formatted phone is unavailable.
    $phone = $_POST["intl_tel"] ? $_POST["intl_tel"] : $_POST["user_phone"];
    $phoneExt = $_POST["intl_ext"];
    $phoneCountry = $_POST["intl_country"];
  }

  if (empty($_POST["user_location"])) {
    $locationErr = "Location is required.";
  } else {
    $location = test_input($_POST["user_location"]);
  }

  if (empty($_POST["user_category"])) {
    $categoryErr = "Inquiry type is required.";
  } else {
    $category = test_input($_POST["user_category"]);
  }

  if (empty($_POST["user_message"])) {
    $messageErr = "Message is required.";
  } else {
    $message = test_input($_POST["user_message"]);
  }
  
  // ****************** email processing/forwarding *************************
  // if passed validation
  if (!($usernameErr || $emailErr || $phoneErr || $locationErr || $categoryErr || $messageErr)) {
    $toEmail = 'temp@eaglescoding.com';
    $subject = 'Contact Request From '.$username;
    $body = '<h1>North Berkeley Contact Request</h1>
      <ul>
        <li><strong>Name:</strong> '.$username.'</li>
        <li><strong>Email:</strong> '.$email.'</li>
        <li><strong>Phone</strong>
          <ul>
            <li><strong>Phone Number:</strong> '.$phone.'</li>
            <li><strong>Phone Extension:</strong> '.$phoneExt.'</li>
            <li><strong>Phone Country:</strong> '.$phoneCountry.'</li>
          </ul>
        </li>
        <li><strong>Location entered by user:</strong> '.$location.'</li>
        <li><strong>Category:</strong> '.$category.'</li>
        <li><strong>Message:</strong> '.$message.'</li>
      </ul>';
    
    //email headers
    $headers = "MIME-Version: 1.0"."\r\n";
    $headers .= "Content-Type:text/html;charset=UTF-8"."\r\n";
    
    // additional headers
    //$headers .= "From: ".$username."<".$email.">"."\r\n";
    
    mail($toEmail, $subject, $body, $headers);
  }

  //*************** server response processing *******************************
  // The response is processed by JS, client-side.
  // If all of the formDataError values are empty, it will display a success message.  Otherwise, error messages will be displayed.
  $formDataErr = array("user_name_err"=>$usernameErr, "user_email_err"=>$emailErr, "user_phone_err"=>$phoneErr, "user_location_err"=>$phoneErr, "user_category_err"=>$categoryErr, "user_message_err"=>$messageErr);
  $response = json_encode($formDataErr);

  echo $response;
}

// security filters.
function test_input($data) {
  $data = trim($data); // trim extra whitespace
  $data = stripslashes($data);
  $data = htmlspecialchars($data); // security - strip malicious code
  return $data;
}
?>
