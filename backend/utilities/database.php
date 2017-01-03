<?php
$database = new PDO('mysql:host=localhost;dbname=money', "root", "root", array(
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
));
