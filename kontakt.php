<!DOCTYPE html>
<head>
    <title>Das IndifferentenBlatt - Kontakt</title>
    <meta charset="UTF-8">
    <meta lang="de">
    <style>@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap');</style> 
    <link rel="stylesheet" href="style.css">
    <script src="jquery-3.6.0.js"></script>
    <script src="KontaktScript.js"></script>
</head>
<body onload="initJS()">
    <nav>
        <label for="hamburger">&#9776; IndifferentenBlatt - Dumme Nachrichten für dumme Leute</label>
        <input type="checkbox" id="hamburger">
        <ul>
            <li><a href="index.php"><img src="img/paperclip.png" width="40px"></a></li>
            <li><a href="national.php">National</a></li>
            <li><a href="international.php">International</a></li>
            <li><a href="wirtschaft.php">Wirtschaft</a></li>
            <li><a href="politik.php">Politik</a></li>
            <li><a id="currentSite" href="kontakt.php">Kontakt</a></li>
        </ul>
    </nav>
    <main>
        <form method="post" action="submitContact.php">
            <h2>Schreiben Sie uns!</h2>
            <input type="text" name="vorname" id="vorname" value="" placeholder="Vorname" onblur="inputChanged(1)">
            <input type="text" name="nachname" id="nachname" value="" placeholder="Nachname" onblur="inputChanged(2)">
            <br>
            <input type="email" name="email" id="email" value="" placeholder="E-Mail Adresse" onblur="inputChanged(3)">
            <br>
            <textarea name="text" id="text" placeholder="Geben Sie hier Ihre Nachricht ein!" rows="10" onblur="inputChanged(4)"></textarea>
            <br>
            <input type="submit" name="submit" id="submit" value="Abschicken!" disabled="true">
        </form>
    </main>
</body>