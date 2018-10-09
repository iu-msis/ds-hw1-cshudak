<<?php

Class Comment {

  public $id;
  public $comment;


  Public function __construct($data) {
    $this->$id = isset($data['id']) ? $row['id'] : null;
    $this->comment = $data[comment];
  }

  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PASSWORD);
    $sql = 'INSERT Homework (id, comment)
      VALUES(? ?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->id,
      $this->comment

    ]);

    $this->id = $db->lastInsertID();
  }

  public static function fetchall() {

    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'SELECT * FROM Homework';
    $success = $statement->execute();


    //Handle results

    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $newComment = new Comment($row);
      array_push($arr, $newComment);

    }

    return $arr;
  }


}
