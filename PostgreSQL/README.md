#

## YouTube video about users, roles, passwords, ...
https://www.youtube.com/watch?v=-2kYJ0gZmCo

## Suggested security recommendations for production servers:

REVOKE CREATE ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON DATABASE testdb FROM PUBLIC;

## PostgreSQL used to have users vs. groups. Now it only has rolls. This vocabulary can cause confusion.

vvv source: https://stackoverflow.com/questions/27709456/what-is-the-difference-between-a-user-and-a-role/27709582

Previous versions of Postgres, and some other DB systems, have separate concepts of "groups" (which are 
granted access to database objects) and "users" (who can login, and are members of one or more groups).

In modern versions of Postgres, the two concepts have been merged: a "role" can have the ability to login, 
the ability to "inherit" from other roles (like a user being a member of a group, or a group being a member 
of another group), and access to database objects.

For convenience, many tools and manuals refer to any user with login permission as a "user" or "login 
role", and any without as a "group" or "group role", since it is useful and common practice to keep roughly 
to that structure. This is entirely a convention of terminology, and to understand the permissions, you 
need only understand the options available when creating roles and granting them access.

Again purely for convenience, Postgres still accepts commands using the old terminology, such as CREATE 
USER and CREATE GROUP which are both aliases for CREATE ROLE. If you write CREATE USER, the LOGIN 
permission will be added to the new role by default, to emulate the old behaviour when that was a separate 
command.

^^^ source: https://stackoverflow.com/questions/27709456/what-is-the-difference-between-a-user-and-a-role/27709582

## CHEATSHEET

\du      lists the roles
\l       lists the databases
\dt      lists the tables

show search_path;        shows a list of 'schemas' whereby a user can access tables

A 'fully qualified' table name includes <schemaname>.<tablename>

You can eliminate the <schemaname> from your queries IF the search path includes a schema that contains 
that table.

DROP ROLE <rolename>;


CREATE ROLE <rolename>;  e.g. CREATE ROLE read_only;

GRANT CONNECT ON DATABASE <dbname> TO <rolename>
GRANT USAGE ON SCHEMA app_schema TO read_only;
GRANT SELECT ON TABLE <tablename1>,<tablename2> TO read_only;
GRANT SELECT ON ALL TABLES IN SCHEMA app_schema TO read_only;
ALTER DEFAULT PRIVILEGES IN SCHEMA app_schema GRANT SELECT ON TABLES TO read_only;

CREATE USER <username> WITH PASSWORD 'secret_password';
GRANT <rolename> TO <username>;



#
# The Data Directory
#

SHOW data_directory; 


#
# A really great commandline and other cheatsheet
#
https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546

