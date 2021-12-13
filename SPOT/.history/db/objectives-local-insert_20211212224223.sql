DROP TABLE IF EXISTS understandings;
CREATE TABLE understandings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    objective_id INTEGER NOT NULL,
    level INTEGER NOT NULL,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id),
    CONSTRAINT fk_objective
      FOREIGN KEY(objective_id) 
	  REFERENCES objectives(id)      
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(256) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL,
    type INTEGER DEFAULT 0
);

DROP TABLE IF EXISTS days;
CREATE TABLE days (
    id SERIAL PRIMARY KEY,
    day_mnemonic VARCHAR(5)
);

INSERT INTO days (day_mnemonic) VALUES ('w01d1');
INSERT INTO days (day_mnemonic) VALUES ('w01d2');
INSERT INTO days (day_mnemonic) VALUES ('w01d3');
INSERT INTO days (day_mnemonic) VALUES ('w01d4');
INSERT INTO days (day_mnemonic) VALUES ('w01d5');
INSERT INTO days (day_mnemonic) VALUES ('w02d1');
INSERT INTO days (day_mnemonic) VALUES ('w02d2');
INSERT INTO days (day_mnemonic) VALUES ('w02d3');
INSERT INTO days (day_mnemonic) VALUES ('w02d4');
INSERT INTO days (day_mnemonic) VALUES ('w02d5');
INSERT INTO days (day_mnemonic) VALUES ('w03d1');
INSERT INTO days (day_mnemonic) VALUES ('w03d2');
INSERT INTO days (day_mnemonic) VALUES ('w03d3');
INSERT INTO days (day_mnemonic) VALUES ('w03d4');
INSERT INTO days (day_mnemonic) VALUES ('w03d5');
INSERT INTO days (day_mnemonic) VALUES ('w04d1');
INSERT INTO days (day_mnemonic) VALUES ('w04d2');
INSERT INTO days (day_mnemonic) VALUES ('w04d3');
INSERT INTO days (day_mnemonic) VALUES ('w04d4');
INSERT INTO days (day_mnemonic) VALUES ('w04d5');
INSERT INTO days (day_mnemonic) VALUES ('w05d1');
INSERT INTO days (day_mnemonic) VALUES ('w05d2');
INSERT INTO days (day_mnemonic) VALUES ('w05d3');
INSERT INTO days (day_mnemonic) VALUES ('w05d4');
INSERT INTO days (day_mnemonic) VALUES ('w05d5');

DROP TABLE IF EXISTS objectives;
CREATE TABLE objectives (
    id SERIAL PRIMARY KEY,
    day_id VARCHAR(5),
    type VARCHAR(12),
    question text,
    answer text,
    sort smallint
);

INSERT INTO objectives (day_id, type, question, answer, sort) VALUES ('w05d1', 'learning', 'What is a table?', 'A table is a set of data collected as columns and rows.', 1);
INSERT INTO objectives (day_id, type, question, answer, sort) VALUES ('w05d1', 'learning', 'What is a database?', 'A database is a collection of tables. The collection is typically used as a set. A connection to a database is granted via a username and password.', 2);
INSERT INTO objectives (day_id, type, question, answer, sort) VALUES ('w05d1', 'learning', 'What is a query?', 'A query is a task executed against a database, table or combination of tables. e.g. SELECT, INSERT, etc.', 3);
INSERT INTO objectives (day_id, type, question, answer, sort) VALUES ('w05d1', 'learning', 'What is a WHERE clause?', 'A query can filter or restrict the information that results via a WHERE clause.', 4);
INSERT INTO objectives (day_id, type, question, answer, sort) VALUES ('w05d1', 'learning', 'How do I establish a relationship between tables?', 'You can establish a relationship between tables by creating a column that tells you, for each row, which row in another table it is related to.', 5);
INSERT INTO objectives (day_id, type, question, answer, sort) VALUES ('w05d1', 'learning', 'What is a JOIN clause?', 'The data that a query has access to, can be expanded via JOIN-ing two tables together.', 6);
INSERT INTO objectives (day_id, type, question, answer, sort) VALUES ('w05d1', 'learning', 'What is an ERD?', 'In the context of databases, an ERD is a diagram that shows each table as an entity, and also shows the relationships between tables.', 7);
INSERT INTO objectives (day_id, type, question, answer, sort) VALUES ('w05d1', 'performance', 'How do I create a table?', 'CREATE TABLE objectives\n(\n    id bigint,\n    day_id character varying(5),\n    type character varying(12),\n    question text,\n    answer text,\n    sort smallint\n)', 1);
INSERT INTO objectives (day_id, type, question, answer, sort) VALUES ('w05d1', 'performance', 'How do I INSERT rows into a table?', 'INSERT INTO objectives(id, type, question, answer, sort)\nVALUES (21, w05d1, "How do I INSERT rows into a table?", "solution goes here",2);', 2);
