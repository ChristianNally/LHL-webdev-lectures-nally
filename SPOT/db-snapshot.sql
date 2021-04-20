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
    day_mnemonic character varying(5)
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
    day_id character varying(5),
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

INSERT INTO public.days (id, day_mnemonic) VALUES (1, 'w01d1');
INSERT INTO public.days (id, day_mnemonic) VALUES (2, 'w01d2');
INSERT INTO public.days (id, day_mnemonic) VALUES (3, 'w01d3');
INSERT INTO public.days (id, day_mnemonic) VALUES (4, 'w01d4');
INSERT INTO public.days (id, day_mnemonic) VALUES (5, 'w01d5');
INSERT INTO public.days (id, day_mnemonic) VALUES (6, 'w02d1');
INSERT INTO public.days (id, day_mnemonic) VALUES (7, 'w02d2');
INSERT INTO public.days (id, day_mnemonic) VALUES (8, 'w02d3');
INSERT INTO public.days (id, day_mnemonic) VALUES (9, 'w02d4');
INSERT INTO public.days (id, day_mnemonic) VALUES (10, 'w02d5');
INSERT INTO public.days (id, day_mnemonic) VALUES (11, 'w03d1');
INSERT INTO public.days (id, day_mnemonic) VALUES (12, 'w03d2');
INSERT INTO public.days (id, day_mnemonic) VALUES (13, 'w03d3');
INSERT INTO public.days (id, day_mnemonic) VALUES (14, 'w03d4');
INSERT INTO public.days (id, day_mnemonic) VALUES (15, 'w03d5');
INSERT INTO public.days (id, day_mnemonic) VALUES (16, 'w04d1');
INSERT INTO public.days (id, day_mnemonic) VALUES (17, 'w04d2');
INSERT INTO public.days (id, day_mnemonic) VALUES (18, 'w04d3');
INSERT INTO public.days (id, day_mnemonic) VALUES (19, 'w04d4');
INSERT INTO public.days (id, day_mnemonic) VALUES (20, 'w04d5');
INSERT INTO public.days (id, day_mnemonic) VALUES (21, 'w05d1');
INSERT INTO public.days (id, day_mnemonic) VALUES (22, 'w05d2');
INSERT INTO public.days (id, day_mnemonic) VALUES (23, 'w05d3');
INSERT INTO public.days (id, day_mnemonic) VALUES (24, 'w05d4');
INSERT INTO public.days (id, day_mnemonic) VALUES (25, 'w05d5');


--
-- Data for Name: objectives; Type: TABLE DATA; Schema: public; Owner: christian.nally
--

INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (2, 'w05d1', 'learning', 'What is a database?', 'A database is a collection of tables. The collection is typically used as a set. A connection to a database is granted via a username and password.', 2);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (3, 'w05d1', 'learning', 'What is a query?', 'A query is a task executed against a database, table or combination of tables. e.g. SELECT, INSERT, etc.', 3);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (4, 'w05d1', 'learning', 'What is a WHERE clause?', 'A query can filter or restrict the information that results via a WHERE clause.', 4);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (5, 'w05d1', 'learning', 'How do I establish a relationship between tables?', 'You can establish a relationship between tables by creating a column that tells you, for each row, which row in another table it is related to.', 5);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (6, 'w05d1', 'learning', 'What is a JOIN clause?', 'The data that a query has access to, can be expanded via JOIN-ing two tables together.', 6);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (7, 'w05d1', 'learning', 'What is an ERD?', 'In the context of databases, an ERD is a diagram that shows each table as an entity, and also shows the relationships between tables.', 7);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (8, 'w05d1', 'performance', 'How do I create a table?', 'CREATE TABLE objectives\n(\n    id bigint,\n    day_id character varying(5),\n    type character varying(12),\n    question text,\n    answer text,\n    sort smallint\n)', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (9, 'w05d1', 'performance', 'How do I INSERT rows into a table?', 'INSERT INTO objectives(id, type, question, answer, sort)\nVALUES (21, w05d1, "How do I INSERT rows into a table?", "solution goes here",2);', 2);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (10, 'w03d4', 'learning', 'Why would we never want to store passwords as plaintext?', 'To keep the passwords away from prying eyes, like hackers and website employees.', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (11, 'w03d4', 'learning', 'Rather than storing passwords as plaintext, how should they be stored?', 'Passwords should always be _hashed_', 2);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (12, 'w03d4', 'learning', 'What is the difference between encryption and hashing?', 'Hashing is one way.', 5);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (13, 'w04d1', 'learning', 'What is the box model?', 'The box model is how DOM elements are typically rendered to occupy a certain amount of screen real estate, via padding, borders and margins.', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (14, 'w04d1', 'performance', 'How do I set the preferred box model?', '* { box-sizing: border-box; }', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (15, 'w04d1', 'learning', 'What is the basic syntax for a CSS ''Rule''?', '[selector] { style: value; ... } ', 0);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (1, 'w05d1', 'learning', 'What is a table?', 'A table is a set of data collected as columns and rows.', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (17, 'w04d2', 'learning', 'What is DOM manipulation?', 'DOM manipulation is the ability of client-side javascript to add, remove or change parts of the DOM after the initial page load.', 1);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (18, 'w04d2', 'learning', 'What is DOM travsersal?', 'DOM traversal is the ability to client-side javascript to wander through the DOM looking for elements that match a certain criteria.', 5);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (20, 'w04d2', 'performance', 'How do you traverse the DOM with jQuery?', '$(''.parent'').children().addClass("tagged");', 6);
INSERT INTO public.objectives (id, day_id, type, question, answer, sort) VALUES (16, 'w04d2', 'performance', 'How do you create a new element using jQuery and dynamically append it to a DOM element?', '$(''<div class="newElement">Text content goes here.</div>'').appendTo($( ".container" ));', 2);


--
-- Name: days_id_seq; Type: SEQUENCE SET; Schema: public; Owner: christian.nally
--

SELECT pg_catalog.setval('public.days_id_seq', 25, true);


--
-- Name: objectives_id_seq; Type: SEQUENCE SET; Schema: public; Owner: christian.nally
--

SELECT pg_catalog.setval('public.objectives_id_seq', 20, true);


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

