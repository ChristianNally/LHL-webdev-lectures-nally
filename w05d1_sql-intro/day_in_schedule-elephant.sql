--
-- PostgreSQL database dump
--

-- Dumped from database version 11.8 (Ubuntu 11.8-1.pgdg18.04+1)
-- Dumped by pg_dump version 13.1

-- Started on 2021-02-01 07:50:07 PST

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

SET default_tablespace = '';

--
-- TOC entry 238 (class 1259 OID 1219677)
-- Name: day_in_schedule; Type: TABLE; Schema: public; Owner: blfhmesb
--

CREATE TABLE public.day_in_schedule (
    id character(5) NOT NULL,
    title character(64),
    video_link character(255)
);


ALTER TABLE public.day_in_schedule OWNER TO blfhmesb;

--
-- TOC entry 5419 (class 0 OID 1219677)
-- Dependencies: 238
-- Data for Name: day_in_schedule; Type: TABLE DATA; Schema: public; Owner: blfhmesb
--

COPY public.day_in_schedule (id, title, video_link) FROM stdin;
w01d1	\N	\N
w01d2	\N	\N
w01d3	\N	\N
w01d4	\N	\N
w01d5	\N	\N
w02d1	\N	\N
w02d2	\N	\N
w02d3	\N	\N
w02d4	\N	\N
w02d5	\N	\N
w03d1	\N	\N
w03d2	\N	\N
w03d3	\N	\N
w03d4	\N	\N
w03d5	\N	\N
w04d1	Intro to CSS                                                    	\N
w04d2	Client Side JavaScript & jQuery                                 	\N
w04d3	\N	\N
w04d4	Responsive Design and SASS                                      	https://www.youtube.com/watch?v=_M0PnHWz07o                                                                                                                                                                                                                    
w04d5	\N	\N
w05d1	SQL Intro                                                       	\N
w05d2	\N	\N
w05d3	\N	\N
w05d4	\N	\N
w05d5	\N	\N
\.


--
-- TOC entry 5289 (class 2606 OID 1219769)
-- Name: day_in_schedule day_in_schedule_pkey; Type: CONSTRAINT; Schema: public; Owner: blfhmesb
--

ALTER TABLE ONLY public.day_in_schedule
    ADD CONSTRAINT day_in_schedule_pkey PRIMARY KEY (id);


-- Completed on 2021-02-01 07:50:12 PST

--
-- PostgreSQL database dump complete
--

