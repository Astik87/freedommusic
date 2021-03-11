<?php
  require("./db.php");

  $query = '';

  if ($_GET['id'] != NULL) {
    $query = "SELECT * FROM musics WHERE id IN ("
    . implode(',', $_GET['id'])
    . ")";

    $res = mysqli_query($link, $query);

    echo json_encode(mysqli_fetch_all($res, MYSQLI_ASSOC));
  } else {
    echo "false";
  }