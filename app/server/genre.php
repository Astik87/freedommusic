<?php
  require('./db.php');

  $res = mysqli_query($link, "SELECT * FROM genre");
  $res = mysqli_fetch_all($res, MYSQLI_ASSOC);
  echo json_encode($res);

  mysqli_close($link);