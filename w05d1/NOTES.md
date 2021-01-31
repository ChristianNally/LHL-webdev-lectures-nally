Learning Objectives (Theory)

Understand what a database is
Understand what a table (within a DB) is rows and columns
Understand what a relationship between tables is
Understand that a query is executed against a table or combination of tables
Understand that a query can expand the information the results via JOIN
Understand that a query can filter/restrict the information that results via WHERE
Understand what an ERD is

Performance Objectives (Practice)

The student will be able to demonstrate the ability to ...

create a DB in Postgres
create a Table (rows and columns) in Postgres
create a Field within a Table within a DB in Postgres
relate tables (via PK and FK) in Postgres
create ERDs 
write SQL statements that correspond to natural questions 
    about a given dataset including variations on...
    SELECT fields FROM table WHERE conditional ORDER BY field;

use compound WHERE clauses to filter results e.g. AND and OR 
use compound ORDER BY clauses to set the order will 
double quotes means a reference to a field name or table name
single quotes means a string value

ORDER BY multiple comma separated fields, default sort is ASC, DESC must be mentioned

Notes
-----

Here is some SQL, just to look at it. (CRUD examples.)

Aggregation Functions (like COUNT(), field name of the function is lowercase of the function name, etc.)
Alias any field using AS to change field names.

Let's set up an RDBMS.

SELECT * is bad practice. Instead, select the fields you are interested in.

