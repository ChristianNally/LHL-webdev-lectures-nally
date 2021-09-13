SELECT * from schedule;
SELECT description AS question, answer from objectives ORDER BY sort;

SELECT * FROM objectives WHERE description LIKE '%table%';

SELECT COUNT(*) FROM objectives WHERE day_id = 'w05d1';
SELECT SUM(sort) FROM objectives WHERE day_id = 'w05d1';

UPDATE objectives SET sort=7 WHERE id=8;

UPDATE schedule SET title='SQL Intro' WHERE id='w05d1';

TRUNCATE schedule;

TRUNCATE objectives;

SELECT title,description,answer FROM schedule JOIN objectives ON schedule.id = day_id;


CREATE TABLE sample_table
(
    id bigint,
    day_id character varying(5),
    type character varying(12),
    question text,
    answer text,
    sort smallint
);