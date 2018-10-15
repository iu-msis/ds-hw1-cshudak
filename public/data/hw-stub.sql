CREATE TABLE Homework (
  id INT AUTO_INCREMENT,
  comment VARCHAR(80) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO Homework (id, comment)
VALUES (1, 'life is good');
INSERT INTO Homework (id, comment)
VALUES (2, 'after you');
INSERT INTO Homework (id, comment)
VALUES (3, 'complete the core');

INSERT INTO Homework (comment)
VALUES ('life is awesome');
