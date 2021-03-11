<?php
  $settings = [
    "host" => "localhost",
    "username" => "mysql",
    "password" => "mysql",
    "database" => "music"
  ];

  $link = mysqli_connect($settings['host'], $settings['username'],
          $settings['password'], $settings['database']) or die('Error' . mysqli_error($link));
  
  mysqli_set_charset($link, "utf8_general_ci");