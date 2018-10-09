<<?php

chdir(__DIR__);

set_include_path (__DIR__);

if ($_SERVER['REQUEST_METHOD'] == 'POST'
&& stripos($_SERVER[CONTENT_TYPE], 'application/json')
  $_POST = json_decode(file_get_contents('php://input'),
}




require 'app/environment.php';
