<?php
$database = new PDO('mysql:host=localhost;dbname=donation', "root", "root", array(
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
));
