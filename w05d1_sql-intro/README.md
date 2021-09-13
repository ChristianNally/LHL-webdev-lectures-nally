# Learning the Vocabulary

|Question|Answer|
|--|--|
|What is a table?	|A table is a set of data collected as columns and rows.|	
|How do I create a table?	|CREATE TABLE objectives\n(\n id bigint,\n day_id character varying(5),\n type character varying(12),\n question text,\n answer text,\n sort smallint\n)|	
|How do I INSERT rows into a table?	|INSERT INTO objectives(id, type, question, answer, sort)\nVALUES (21, w05d1, "How do I INSERT rows into a table?", "solution goes here",2);|	
|What is a database?	|A database is a collection of tables. The collection is typically used as a set. A connection to a database is granted via a username and password.|	
|What is a query?	|A query is a task executed against a database, table or combination of tables. e.g. SELECT, INSERT, etc.|	
|What are the four types of commands for databases?	|DDL, DML, DCL, and TCL. See: https://stackoverflow.com/questions/2578194/what-are-ddl-and-dml|	
|What are the queries that correspond to the CRUD actions?	|The CRUD queries are: INSERT, SELECT, UPDATE and DELETE.|	
|What is a WHERE clause?	|A query can filter or restrict the information that results via a WHERE clause.|	
|What is a JOIN clause?	|The data that a query has access to, can be expanded via JOIN-ing two tables together.|	
|What is an ERD?	|In the context of databases, an ERD is a diagram that shows each table as an entity, and also shows the relationships between tables.|	

# How to Actually Do Things

Today you will learn how to...

create a DB in Postgres
create a Table (columns) in Postgres
insert rows into a table in Postgres
relate tables (via PK and FK) in Postgres
create an ERD
write a simple SQL SELECT statement
    about a given dataset including variations on...
    SELECT fields FROM table WHERE conditional ORDER BY field;

use compound WHERE clauses to filter results e.g. AND and OR 
use compound ORDER BY clauses to set the order that will be presented
use double quotes means a reference to a field name or table name
use single quotes means a string value


# Notes

## Background

Why Databases?

Two Types of "Queries": DDL vs DML

RDBMS Systems (postgres, MySQL, Oracle)

Why Postgres?

SQLite

Tools: psql vs. pgAdmin (phpMyAdmin)

## Basic SQL Selection Queries

Simple SELECT Queries

Aggregation Functions (like COUNT(), field name of the function is lowercase of the function name, etc.)

Alias any field using AS to change field names.

SELECT * is bad practice. Instead, select the fields you are interested in.

For Date Queries we have NOW() and CURRENT_DATE to make queries useful as written.

DISTINCT : give us back distinct values of a given column. this works well for a single field. (GROUP BY is better for combinations)

## Relationships

One to many relationship e.g. initially  day <-> learning objective

## There is an Order to which the clauses are executed

Note WHERE comes before SELECT, so you will get errors trying to establish a filter using fields from the SELECT clause

But you can use HAVING, which is kind of a where clause for GROUP BY specs. note that you can't use SELECT 'AS' labels here.

SELECT is for display purposes. That's why it runs toward the end of the query.

The default JOIN type is "INNER JOIN"

different join types
LEFT JOIN
INNER JOIN
RIGHT JOIN
FULL OUTER JOIN

## A Note on Speed

SQL is hyper optimized for speed, and so there is an advantage to doing things all in one query.

# Sample Queries

## count (an aggregate function)

SELECT count(id) 
FROM objectives;

## a where clause

SELECT question, answer
FROM objectives
WHERE type = 'performance';

## a where clause with AND

SELECT question, answer
FROM objectives
WHERE type = 'performance' AND sort < 5;

## JOIN
SELECT day_description, question, answer
FROM objectives
JOIN days ON objectives.day_id = days.id;

## having (... because you cannot use WHERE on an aggregate function)

SELECT count(day_id) 
FROM objectives 
GROUP BY day_id 
HAVING count(day_id) > 3;
