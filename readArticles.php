<?php
	$national = array();
	$international = array();
	$wirtschaft = array();
	$politik = array();
	//MySQL
	$conn = new mysqli("localhost", "ArticleReader", "(!*uN_P(8S6mRWLt", "IndifferentenBlatt");
	if($conn->connect_error) {
		die("Fehler bei der MySQL-Verbindung: " . $conn->connect_error);
	}
	mysqli_set_charset($conn, "utf8");
	$sql = "SELECT * FROM `Articles`;";
	$sqlResult = $conn->query($sql);
	//Loop and save in arrays
	while($artikel = $sqlResult->fetch_object()) {
		switch($artikel->Category) {
			case 0: {
				$national[] = array($artikel->Title, $artikel->Content);
				break;
			}
			case 1: {
				$international[] = array($artikel->Title, $artikel->Content);
				break;
			}
			case 2: {
				$wirtschaft[] = array($artikel->Title, $artikel->Content);
				break;
			}
			case 3: {
				$politik[] = array($artikel->Title, $artikel->Content);
				break;
			}
		}
	}
	$all = array("National"=>$national, "International"=>$international, "Wirtschaft"=>$wirtschaft, "Politik"=>$politik);
	$jsonResult = json_encode($all);
	echo $jsonResult;
	$conn->close();
?>