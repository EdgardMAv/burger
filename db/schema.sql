DROP DATABASE IF EXISTS burgerdb;

CREATE DATABASE burgers_db
USE burgers_db;


CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

SELECT * FROM burgers