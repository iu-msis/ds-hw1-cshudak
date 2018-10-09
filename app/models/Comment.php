<<?php

Class Comment {

  public $id;
  public $comment;


  public function __construct($data) {
    $this->$id = isset($data['id']) ? $data['id'] : null;
    $this->comment = $data['comment'  ];
  }

  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PASSWORD);
    $sql = 'INSERT INTO Homework (comment)
      VALUES(?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->comment
    ]);

    $this->id = $db->lastInsertID();
  }

  public static function fetchall() {

    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'SELECT * FROM Homework';
    $statement = $db->prepare($sql);
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
