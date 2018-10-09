<?php

require '../../app/common.php';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}

$commentArr = Comment::fetchAll();

$json = json_encode($commentArr, JSON_PRETTY_PRINT);

header('Content-Type; application/json');
echo json;
