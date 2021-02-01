--
-- PostgreSQL database dump
--

CREATE TABLE objectives (
    id SERIAL PRIMARY KEY,
    day_id VARCHAR(5),
    type VARCHAR(12),
    description text,
    answer text,
    sort smallint
);

COPY public.objectives (id, day_id, type, description, answer, sort) FROM stdin;
2	w05d1	learning	 What is a table?	 A table is a set of data collected as columns and rows.	1
3	w05d1	learning	 What is a database?	 A database is a collection of tables. The collection is typically used as a set. A connection to a database is granted via a username and password.	2
4	w05d1	learning	 What is a query?	 A query is a task executed against a database, table or combination of tables. e.g. SELECT, INSERT, etc.	3
7	w05d1	learning	 What is a WHERE clause?	 A query can filter or restrict the information that results via a WHERE clause.	4
5	w05d1	learning	 How do I establish a relationship between tables?	 You can establish a relationship between tables by creating a column that tells you, for each row, which row in another table it is related to.	5
6	w05d1	learning	 What is a JOIN clause?	 The data that a query has access to, can be expanded via JOIN-ing two tables together.	6
8	w05d1	learning	 What is an ERD?	 In the context of databases, an ERD is a diagram that shows each table as an entity, and also shows the relationships between tables.	7
20	w05d1	performance	 How do I create a table?	CREATE TABLE objectives\n(\n    id bigint,\n    day_id character varying(5),\n    type character varying(12),\n    description text,\n    answer text,\n    sort smallint\n)	1
21	w05d1	performance	 How do I INSERT rows into a table?	INSERT INTO objectives(id, type, question, answer, sort)\nVALUES (21, w05d1, 'How do I INSERT rows into a table?', 'solution goes here',2);	2
\.
