CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  ObjectId mediumint NOT NULL AUTO_INCREMENT,
  username varchar(255),
  text varchar(145),
  roomname varchar(255),
  PRIMARY KEY (ObjectId)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

