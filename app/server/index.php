<?php
  require('./db.php');
  
  $query = "SELECT id FROM musics LIMIT 5";

  $res = mysqli_query($link, $query);
  $res = mysqli_fetch_all($res, MYSQLI_ASSOC);

  $ids = [];

  foreach ($res as $value) {

    array_push($ids, $value["id"]);

  }

  echo json_encode($ids);