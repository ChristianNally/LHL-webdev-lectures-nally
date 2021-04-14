DROP TABLE IF EXISTS days;

CREATE TABLE days(id serial, 
mnemonic varchar(5), 
title varchar(128), 
video_link varchar(255), 
PRIMARY KEY(id)
);

INSERT INTO days (mnemonic, title, video_link) VALUES('w01d1',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w01d2',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w01d3',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w01d4',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w01d5',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w02d1',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w02d2',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w02d3',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w02d4',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w02d5',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w03d1',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w03d2',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w03d3',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w03d4',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w03d5',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w04d1','Intro to CSS',null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w04d2','Client Side JavaScript & jQuery',null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w04d3',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w04d4','Responsive Design and SASS','https://www.youtube.com/watch?v=_M0PnHWz07o');
INSERT INTO days (mnemonic, title, video_link) VALUES('w04d5',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w05d1','SQL Intro',null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w05d2',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w05d3',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w05d4',null,null);
INSERT INTO days (mnemonic, title, video_link) VALUES('w05d5',null,null);

DROP TABLE IF EXISTS objectives;

CREATE TABLE objectives(id serial,
type varchar(12),
question text, 
answer text,
sort smallint,
day_id integer NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO objectives (day_id,type,question,answer,sort) VALUES ('21','learning', 'What is a table?','A table is a set of data collected as columns and rows.','1');
INSERT INTO objectives (day_id,type,question,answer,sort) VALUES ('21','learning', 'What is a database?','A database is a collection of tables. The collection is typically used as a set. A connection to a database is granted via a username and password.','2');
INSERT INTO objectives (day_id,type,question,answer,sort) VALUES ('21','learning', 'What is a query?','A query is a task executed against a database, table or combination of tables. e.g. SELECT, INSERT, etc.','3');
INSERT INTO objectives (day_id,type,question,answer,sort) VALUES ('21','learning', 'What is a WHERE clause?', 'A query can filter or restrict the information that results via a WHERE clause.','4');
INSERT INTO objectives (day_id,type,question,answer,sort) VALUES ('21','learning', 'How do I establish a relationship between tables?','You can establish a relationship between tables by creating a column that tells you, for each row, which row in another table it is related to.','5');
INSERT INTO objectives (day_id,type,question,answer,sort) VALUES ('21','learning', 'What is a JOIN clause?','The data that a query has access to, can be expanded via JOIN-ing two tables together.','6');
INSERT INTO objectives (day_id,type,question,answer,sort) VALUES ('21','learning', 'What is an ERD?','In the context of databases, an ERD is a diagram that shows each table as an entity, and also shows the relationships between tables.','7');
INSERT INTO objectives (day_id,type,question,answer,sort) VALUES ('21','performance', 'How do I create a table?','CREATE TABLE objectives
(
    id bigint,
    day_id character varying(5),
    type character varying(12),
    question text,
    answer text,
    sort smallint
)','1');
-- INSERT INTO objectives (type,question,answer,sort) VALUES (performance, How do I INSERT rows into a table?,"INSERT INTO objectives(id, type, question, answer, sort)
-- VALUES (21, w05d1, 'How do I INSERT rows into a table?', 'solution goes here',2);",2
