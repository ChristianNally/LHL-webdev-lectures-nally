--
-- PostgreSQL database dump
--

CREATE TABLE schedule (
    id character(5) NOT NULL,
    title character(64),
    video_link character(255),
    video_date DATE
);

COPY schedule (id, title, video_link, video_date) FROM stdin;
w01d1	\N	\N	\N
w01d2	\N	\N	\N
w01d3	\N	\N	\N
w01d4	\N	\N	\N
w01d5	\N	\N	\N
w02d1	\N	\N	\N
w02d2	\N	\N	\N
w02d3	\N	\N	\N
w02d4	\N	\N	\N
w02d5	\N	\N	\N
w03d1	\N	\N	\N
w03d2	\N	\N	\N
w03d3	\N	\N	\N
w03d4	\N	\N	\N
w03d5	\N	\N	\N
w04d1	Intro to CSS                                                    	\N	\N
w04d2	Client Side JavaScript & jQuery                                 	\N	\N
w04d3	\N	\N	\N
w04d4	Responsive Design and SASS                                      	https://www.youtube.com/watch?v=_M0PnHWz07o                                                                                                                                                                                                                    	\N
w04d5	\N	\N	\N
w05d1	SQL Intro                                                       	\N	\N
w05d2	\N	\N	\N
w05d3	\N	\N	\N
w05d4	\N	\N	\N
w05d5	\N	\N	\N
\.

ALTER TABLE ONLY schedule
    ADD CONSTRAINT schedule_pkey PRIMARY KEY (id);
