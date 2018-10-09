<<?php

$comment = new Comment($_POST);

$ccomment->create();

echo json_encode($comment);
