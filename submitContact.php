<?php
	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
	  	$data = filter_var($data, FILTER_SANITIZE_ENCODED);
	        return $data;
	}
	$vname = $lname = $email = $text = "";
	if($_SERVER["REQUEST_METHOD"] == "POST") {
		$vname = test_input($_POST["vorname"]);
		$lname = test_input($_POST["nachname"]);
		$email = $_POST["email"];
		$email = filter_var($email, FILTER_SANITIZE_EMAIL);
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			echo "Fehlerhafte E-Mail, bitte versuchen Sie es erneut!";
			return;
		}
		$text = test_input($_POST["text"]);
	} else {
		echo "Fehler beim Formularaufruf! Bitte senden Sie Ihre Anfrage über das Kontraktformular.";
		return;
	}
	
	$conn = new mysqli("localhost", "ContactSubmitter", "hnYOjIrnY[f.jKG.", "IndifferentenBlatt");
	if($conn->connect_error) {
		die("Fehler bei der MySQL-Verbindung: " . $conn->connect_error);
	}
	mysqli_set_charset($conn, "utf8");
	$sql = "INSERT INTO `Kontakte`(`Vorname`, `Nachname`, `EMail`, `Text`) VALUES ('$vname','$lname','$email','$text');";
	if($conn->query($sql)) {
		header("Location: kontaktSuccess.php");
	} else {
		header("Location: kontaktFailure.php");
	}
	$conn->close();
?>