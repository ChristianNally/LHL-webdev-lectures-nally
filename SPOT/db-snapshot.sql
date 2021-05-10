--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.objectives DROP CONSTRAINT objectives_pkey;
ALTER TABLE ONLY public.days DROP CONSTRAINT days_pkey;
ALTER TABLE public.objectives ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.days ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE public.objectives_id_seq;
DROP TABLE public.objectives;
DROP SEQUENCE public.days_id_seq;
DROP TABLE public.days;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: days; Type: TABLE; Schema: public; Owner: christian.nally
--

CREATE TABLE public.days (
    id integer NOT NULL,
    day_mnemonic character varying(5),
    day_description character varying(20)
);


ALTER TABLE public.days OWNER TO "christian.nally";

--
-- Name: days_id_seq; Type: SEQUENCE; Schema: public; Owner: christian.nally
--

CREATE SEQUENCE public.days_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.days_id_seq OWNER TO "christian.nally";

--
-- Name: days_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: christian.nally
--

ALTER SEQUENCE public.days_id_seq OWNED BY public.days.id;


--
-- Name: objectives; Type: TABLE; Schema: public; Owner: christian.nally
--

CREATE TABLE public.objectives (
    id integer NOT NULL,
    day_id integer,
    type character varying(12),
    question text,
    answer text,
    sort smallint
);


ALTER TABLE public.objectives OWNER TO "christian.nally";

--
-- Name: objectives_id_seq; Type: SEQUENCE; Schema: public; Owner: christian.nally
--

CREATE SEQUENCE public.objectives_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.objectives_id_seq OWNER TO "christian.nally";

--
-- Name: objectives_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: christian.nally
--

ALTER SEQUENCE public.objectives_id_seq OWNED BY public.objectives.id;


--
-- Name: days id; Type: DEFAULT; Schema: public; Owner: christian.nally
--

ALTER TABLE ONLY public.days ALTER COLUMN id SET DEFAULT nextval('public.days_id_seq'::regclass);


--
-- Name: objectives id; Type: DEFAULT; Schema: public; Owner: christian.nally
--

ALTER TABLE ONLY public.objectives ALTER COLUMN id SET DEFAULT nextval('public.objectives_id_seq'::regclass);


--
-- Data for Name: days; Type: TABLE DATA; Schema: public; Owner: christian.nally
--

INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (1, 'w01d1', 'Week 1 Day 1');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (2, 'w01d2', 'Week 1 Day 2');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (3, 'w01d3', 'Week 1 Day 3');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (4, 'w01d4', 'Week 1 Day 4');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (5, 'w01d5', 'Week 1 Day 5');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (6, 'w02d1', 'Week 2 Day 1');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (7, 'w02d2', 'Week 2 Day 2');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (8, 'w02d3', 'Week 2 Day 3');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (9, 'w02d4', 'Week 2 Day 4');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (10, 'w02d5', 'Week 2 Day 5');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (11, 'w03d1', 'Week 3 Day 1');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (12, 'w03d2', 'Week 3 Day 2');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (13, 'w03d3', 'Week 3 Day 3');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (14, 'w03d4', 'Week 3 Day 4');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (15, 'w03d5', 'Week 3 Day 5');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (16, 'w04d1', 'Week 4 Day 1');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (17, 'w04d2', 'Week 4 Day 2');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (18, 'w04d3', 'Week 4 Day 3');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (19, 'w04d4', 'Week 4 Day 4');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (20, 'w04d5', 'Week 4 Day 5');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (21, 'w05d1', 'Week 5 Day 1');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (22, 'w05d2', 'Week 5 Day 2');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (23, 'w05d3', 'Week 5 Day 3');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (24, 'w05d4', 'Week 5 Day 4');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (25, 'w05d5', 'Week 5 Day 5');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (26, 'w06d1', 'Week 6 Day 1');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (27, 'w06d2', 'Week 6 Day 2');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (28, 'w06d3', 'Week 6 Day 3');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (29, 'w06d4', 'Week 6 Day 4');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (30, 'w06d5', 'Week 6 Day 5');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (31, 'w07d1', 'Week 7 Day 1');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (32, 'w07d2', 'Week 7 Day 2');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (33, 'w07d3', 'Week 7 Day 3');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (34, 'w07d4', 'Week 7 Day 4');
INSERT INTO public.days (id, day_mnemonic, day_description) VALUES (35, 'w07d5', 'Week 7 Day 5');


--
-- Data for Name: objectives; Type: TABLE DATA; Schema: public; Owner: christian.nally
--

INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (10, 14, 'learning', 'Why would we never want to store passwords as plaintext?', 'To keep the passwords away from prying eyes, like hackers and website employees.', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (11, 14, 'learning', 'Rather than storing passwords as plaintext, how should they be stored?', 'Passwords should always be _hashed_', 2);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (12, 14, 'learning', 'What is the difference between encryption and hashing?', 'Hashing is one way.', 5);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (13, 16, 'learning', 'What is the box model?', 'The box model is how DOM elements are typically rendered to occupy a certain amount of screen real estate, via padding, borders and margins.', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (14, 16, 'performance', 'How do I set the preferred box model?', '* { box-sizing: border-box; }', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (15, 16, 'learning', 'What is the basic syntax for a CSS ''Rule''?', '[selector] { style: value; ... } ', 0);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (17, 17, 'learning', 'What is DOM manipulation?', 'DOM manipulation is the ability of client-side javascript to add, remove or change parts of the DOM after the initial page load.', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (20, 17, 'performance', 'How do you traverse the DOM with jQuery?', '$(''.parent'').children().addClass("tagged");', 6);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (16, 17, 'performance', 'How do you create a new element using jQuery and dynamically append it to a DOM element?', '$(''<div class="newElement">Text content goes here.</div>'').appendTo($( ".container" ));', 2);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (18, 17, 'learning', 'What is DOM traversal?', 'DOM traversal is the ability to client-side javascript to wander through the DOM looking for elements that match a certain criteria.', 5);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (21, 19, 'learning', 'What is responsive web design?', 'Responsive Web Design is a set of practices that allows web pages to alter their layout and appearance to suit different screen widths and resolutions.', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (22, 19, 'performance', 'How do you set a minimum width on HTML elements?', '.these_elements { min-width: 135px; }', 20);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (23, 19, 'performance', 'How do you set a maximum width on HTML elements?', '.these_elements { max-width: 135px; }', 21);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (24, 19, 'performance', 'How should we set the web browser''s viewport?', '<meta name="viewport" content="width=device-width, initial-scale=1.0">', 22);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (25, 19, 'learning', 'What are the absolute length units available in CSS?', 'mm, cm, in, px, pt, pc (1 pc = 12 pt)', 30);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (26, 19, 'learning', 'What are the relative length units available in CSS?', 'em, ex, ch, rem, vw, vh, vmin, vmax, %', 31);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (5, 22, 'learning', 'How do I establish a relationship between tables?', 'You can establish a relationship between tables by creating a column that tells you, for each row, which row in another table it is related to.', 5);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (27, 22, 'learning', 'What are the features required of a primary key?', 'A Primary Key must be unique (within the table) and can never be null.', 6);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (28, 22, 'learning', 'What is the most common data type for a Primary Key?', 'A Primary Key''s data type is usually auto-incrementing integer (INTEGER or BIGINT).', 7);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (29, 22, 'learning', 'What is a Foreign Key?', 'A Foreign Key is a column on a second table, where the value in a given row indicates an association with a row from the first table. The Foreign Key value on the second table matches the Primary Key value from the first table.', 8);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (32, 22, 'learning', 'What is an ERD?', 'ERD; an Entity Relationship Diagram is a diagram that shows the relationships established between entities within a system. For databases, this is more often with regard to relationships between tables.', 0);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (8, 21, 'performance', 'How do I create a table?', 'CREATE TABLE objectives\n(\n    id bigint,\n    day_id character varying(5),\n    type character varying(12),\n    question text,\n    answer text,\n    sort smallint\n)', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (2, 21, 'learning', 'What is a database?', 'A database is a collection of tables. The collection is typically used as a set. A connection to a database is granted via a username and password.', 3);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (3, 21, 'learning', 'What is a query?', 'A query is a task executed against a database, table or combination of tables. e.g. SELECT, INSERT, etc.', 4);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (30, 21, 'learning', 'What are the queries that correspond to the CRUD actions?', 'The CRUD queries are: INSERT, SELECT, UPDATE and DELETE.', 6);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (4, 21, 'learning', 'What is a WHERE clause?', 'A query can filter or restrict the information that results via a WHERE clause.', 7);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (6, 21, 'learning', 'What is a JOIN clause?', 'The data that a query has access to, can be expanded via JOIN-ing two tables together.', 8);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (7, 21, 'learning', 'What is an ERD?', 'In the context of databases, an ERD is a diagram that shows each table as an entity, and also shows the relationships between tables.', 9);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (37, 18, 'learning', 'What is AJAX?', 'Asynchronous Javascript and XML is a different paradigm of web request, where smaller amounts of data, or small parts of a webpage are sent and recieved in requests that do not result in page a refresh.', 0);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (38, 18, 'learning', 'What are some advantages of AJAX?', 'No page reloads, faster page renders, improved response times, client side rendering reduces network load.', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (39, 18, 'learning', 'What are some disadvantages of AJAX?', 'Creating dynamic content is tricky, asynchronous programming patterns are more complex to code, it requires js and XMLHTTPRequest support, history is not automatically updated.', 2);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (33, 23, 'performance', 'How do you connect to a Postgres DB from within Javascript?', 'const pg = require(''pg'');  const config = {     user: ''<user name>'',     password: ''<password>'',     database: ''<db>'',     host: ''<host>'' };  const client = new pg.Client(config);', 0);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (34, 23, 'performance', 'How, given a postgres client object, do you submit queries to the database from back-end javascript?', 'client.connect(); client   .query(''SELECT * FROM <table>'')   .then((result) => console.log(result));', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (35, 23, 'learning', 'What is a SQL injection attack?', 'A malicious user crafts input for a form submission that will be mistakenly input directly into a database. That input might be any SQL query, including dropping tables or deleting rows. ', 3);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (36, 23, 'performance', 'How do we prevent a SQL Injection attack?', '```js client   .query(''SELECT * FROM <table> WHERE id = $1'', [<id>])   .then((result) => console.log(result)); ```', 4);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (1, 21, 'learning', 'What is a table?', 'A table is a set of data collected as columns and rows.', 0);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (9, 21, 'performance', 'How do I INSERT rows into a table?', 'INSERT INTO objectives(id, type, question, answer, sort)\nVALUES (21, w05d1, "How do I INSERT rows into a table?", "solution goes here",2);', 2);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (31, 21, 'learning', 'What are the four types of commands for databases?', 'DDL, DML, DCL, and TCL. See: https://stackoverflow.com/questions/2578194/what-are-ddl-and-dml', 5);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (42, 12, 'performance', 'How do you code EJS templates?', 'npm i ejs, mkdir views, app.set(''view engine'', ''ejs'');', 3);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (49, 13, 'learning', 'How does a web cookie''s value transmit from one computer to another?', 'A webserver sets a cookie value by including the cookie in a response header. After that, every web request that is sent back to that web server by a browswer will include the cookie in the header of those requests.', 0);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (45, 12, 'learning', 'Does the order that your routes appear in your source code matter?', 'Yes. The order of the routes in your file matters. First matched -> First used.', 0);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (40, 12, 'learning', 'In the context of web programming, what is a template?', 'A template is a file containing mainly HTML, but with syntactic morsels of dynamic content.', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (41, 12, 'learning', 'What is the main reason to use a templating system?', 'Separating business logic from the presentation layer (separation of concerns), enables specialization of roles for programmers.', 2);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (43, 12, 'performance', 'How often do you need to restart your web server?', 'Template files are reloaded every time they are rendered, so there is no need to restart your server if you have only changed your EJS template.', 4);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (44, 12, 'performance', 'How, in NodeJS, do you write a route that accepts a dynamic value as part of the URL?', 'app.get(''/path/:fuzz'', (req,res)=>{ console.log(req.params.fuzz); }); ', 5);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (48, 13, 'learning', 'What is a web cookie?', 'A cookie is a name/value pair that stores information related to a particular user on their browser by a certain domain.', 0);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (47, 13, 'performance', 'How do you set a cookie value from within a NodeJS app?', '```js app.post(''/login'', (req, res) => {   // other authenticatey stuff   res.cookie(''userId'', user.id); // set the cookie''s key and value   res.redirect(''/''); }); ```', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (46, 13, 'performance', 'How do you read a cookie value that arrives at a NodeJS program in the web request?', '```js app.get(''/protected'', (req, res) => {   const userId = req.cookies.userId;   // do something with the userId }); ```', 2);


--
-- Name: days_id_seq; Type: SEQUENCE SET; Schema: public; Owner: christian.nally
--

SELECT pg_catalog.setval('public.days_id_seq', 25, true);


--
-- Name: objectives_id_seq; Type: SEQUENCE SET; Schema: public; Owner: christian.nally
--

SELECT pg_catalog.setval('public.objectives_id_seq', 49, true);


--
-- Name: days days_pkey; Type: CONSTRAINT; Schema: public; Owner: christian.nally
--

ALTER TABLE ONLY public.days
    ADD CONSTRAINT days_pkey PRIMARY KEY (id);


--
-- Name: objectives objectives_pkey; Type: CONSTRAINT; Schema: public; Owner: christian.nally
--

ALTER TABLE ONLY public.objectives
    ADD CONSTRAINT objectives_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

