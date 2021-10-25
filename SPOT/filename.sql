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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: days; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.days (
    id integer NOT NULL,
    day_mnemonic character varying(5),
    day_description character varying(20),
    title text
);


ALTER TABLE public.days OWNER TO postgres;

--
-- Name: days_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.days_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.days_id_seq OWNER TO postgres;

--
-- Name: days_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.days_id_seq OWNED BY public.days.id;


--
-- Name: objectives; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.objectives (
    id integer NOT NULL,
    day_id integer,
    type character varying(12),
    question text,
    answer text,
    sort smallint
);


ALTER TABLE public.objectives OWNER TO postgres;

--
-- Name: objectives_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.objectives_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.objectives_id_seq OWNER TO postgres;

--
-- Name: objectives_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.objectives_id_seq OWNED BY public.objectives.id;


--
-- Name: understandings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.understandings (
    id integer NOT NULL,
    user_id character(256),
    obj_id integer,
    level integer
);


ALTER TABLE public.understandings OWNER TO postgres;

--
-- Name: understandings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.understandings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.understandings_id_seq OWNER TO postgres;

--
-- Name: understandings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.understandings_id_seq OWNED BY public.understandings.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(256),
    password character varying(256)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: days id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.days ALTER COLUMN id SET DEFAULT nextval('public.days_id_seq'::regclass);


--
-- Name: objectives id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.objectives ALTER COLUMN id SET DEFAULT nextval('public.objectives_id_seq'::regclass);


--
-- Name: understandings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.understandings ALTER COLUMN id SET DEFAULT nextval('public.understandings_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: days; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.days (id, day_mnemonic, day_description, title) FROM stdin;
40	w08d5	Week 8 Day 5	\N
26	w06d1	Week 6 Day 1	\N
27	w06d2	Week 6 Day 2	\N
28	w06d3	Week 6 Day 3	\N
29	w06d4	Week 6 Day 4	\N
30	w06d5	Week 6 Day 5	\N
35	w07d5	Week 7 Day 5	\N
16	w04d1	Week 4 Day 1	Intro to CSS
21	w05d1	Week 5 Day 1	SQL Intro
22	w05d2	Week 5 Day 2	Database Design
23	w05d3	Week 5 Day 3	SQL from our Apps
6	w02d1	Week 2 Day 1	TDD with Mocha & Chai 
7	w02d2	Week 2 Day 2	Asynchronous Control Flow 
8	w02d3	Week 2 Day 3	Networking with TCP and HTTP 
9	w02d4	Week 2 Day 4	Promises
11	w03d1	Week 3 Day 1	Web Servers 101
12	w03d2	Week 3 Day 2	CRUD with Express
14	w03d4	Week 3 Day 4	Security and Real World HTTP Servers 
17	w04d2	Week 4 Day 2	Client Side JavaScript & jQuery 
18	w04d3	Week 4 Day 3	AJAX
19	w04d4	Week 4 Day 4	Responsive Design and SASS
1	w01d1	Week 1 Day 1	Welcome and Introductions
2	w01d2	Week 1 Day 2	The Dev Workflow
3	w01d3	Week 1 Day 3	Objects in Javascript
4	w01d4	Week 1 Day 4	Callbacks
24	w05d4	Week 5 Day 4	TEST
5	w01d5	Week 1 Day 5	TEST
20	w04d5	Week 4 Day 5	TEST
25	w05d5	Week 5 Day 5	Midterms Kickoff
10	w02d5	Week 2 Day 5	TEST
15	w03d5	Week 3 Day 5	TEST
31	w07d1	Week 7 Day 1	Component-Based UI w/ React
32	w07d2	Week 7 Day 2	Immutable Update Patterns
33	w07d3	Week 7 Day 3	Data Fetching & Other Side Effects 
13	w03d3	Week 3 Day 3	HTTP Cookies & User Authentication 
37	w08d2	Week 8 Day 2	Real World React (Advanced Topics)
36	w08d1	Week 8 Day 1	Unit & Integration Testing
38	w08d3	Week 8 Day 3	End-to-End Testing with Cypress
39	w08d4	Week 8 Day 4	Class-based Components
34	w07d4	Week 7 Day 4	Custom Hooks
\.


--
-- Data for Name: objectives; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.objectives (id, day_id, type, question, answer, sort) FROM stdin;
5	22	learning	How do I establish a relationship between tables?	You can establish a relationship between tables by creating a column that tells you, for each row, which row in another table it is related to.	5
27	22	learning	What are the features required of a primary key?	A Primary Key must be unique (within the table) and can never be null.	6
28	22	learning	What is the most common data type for a Primary Key?	A Primary Key's data type is usually auto-incrementing integer (INTEGER or BIGINT).	7
29	22	learning	What is a Foreign Key?	A Foreign Key is a column on a second table, where the value in a given row indicates an association with a row from the first table. The Foreign Key value on the second table matches the Primary Key value from the first table.	8
32	22	learning	What is an ERD?	ERD; an Entity Relationship Diagram is a diagram that shows the relationships established between entities within a system. For databases, this is more often with regard to relationships between tables.	0
42	12	performance	How do you code EJS templates?	npm i ejs, mkdir views, app.set('view engine', 'ejs');	8
10	14	learning	Why would we never want to store passwords as plaintext?	To keep the passwords away from prying eyes, like hackers and website employees.	7
12	14	learning	What is the difference between encryption and hashing?	Hashing is one way, so you can't recover the original text from the hash.	0
11	14	learning	Rather than storing passwords as plaintext, how should they be stored?	Passwords should always be _hashed_. There is no need to encrypt them, since you never want to be able to see the password yourself.	2
15	16	learning	What is the basic syntax for a CSS 'Rule'?	[selector] { style: value; ... } 	3
13	16	learning	What is the box model?	The box model is how DOM elements are typically rendered to occupy a certain amount of screen real estate, via padding, borders and margins.	4
14	16	performance	How do I set the preferred box model?	* { box-sizing: border-box; }	5
18	\N	learning	What is DOM traversal?	DOM traversal is the ability of client-side javascript to jump from one node to a parent, sibling or child, step by step throughout the DOM, looking for elements that match a certain criteria.	\N
36	23	performance	How do we prevent a SQL Injection attack?	client.query('SELECT * FROM <table> WHERE id = $1', [<id>])   \r\n.then((result) => console.log(result));	4
35	23	learning	What is a SQL injection attack?	A malicious user crafts input for a form submission that will be mistakenly input directly into a database. That input might be any SQL query, including dropping tables or deleting rows. 	3
34	23	performance	How, given a postgres client object, do you submit queries to the database from back-end javascript?	client.query('SELECT * FROM <table>')\r\n   .then((result) => console.log(result));	2
51	12	learning	What does CRUD stand for?	Create. Read. Update. Delete.	0
52	12	learning	What does BREAD stand for?	Browse. Read. Edit. Add. Delete.	1
44	12	performance	How, in NodeJS, do you write a route that accepts a dynamic value as part of the URL?	app.get('/path/:fuzz', (req,res)=>{ console.log(req.params.fuzz); }); 	2
39	18	learning	What are some disadvantages of AJAX?	Creating dynamic content is tricky, asynchronous programming patterns are more complex to code, it requires js and XMLHTTPRequest support, history is not automatically updated.	4
40	12	learning	In the context of web programming, what is a template?	A template is a file containing mainly HTML, but with syntactic morsels of dynamic content.	3
20	17	performance	How do you traverse the DOM with jQuery?	$('.parent').children().addClass("tagged");	4
22	19	performance	How do you set a minimum width on HTML elements?	.these_elements { min-width: 135px; }	4
23	19	performance	How do you set a maximum width on HTML elements?	.these_elements { max-width: 135px; }	5
25	19	learning	What are the absolute length units available in CSS?	mm, cm, in, px, pt, pc (1 pc = 12 pt)	2
24	19	performance	How should we set the web browser's viewport?	<meta name="viewport" content="width=device-width, initial-scale=1.0">	6
26	19	learning	What are the relative length units available in CSS?	em, ex, ch, rem, vw, vh, vmin, vmax, %	7
2	21	learning	What is a database?	A database is a collection of tables. The collection is typically used as a set. A connection to a database is granted via a username and password.	3
21	19	learning	What is responsive web design?	Responsive Web Design is a set of practices that allows web pages to alter their layout and appearance to suit different screen widths and resolutions.	1
4	21	learning	What is a WHERE clause?	A query can filter or restrict the information that results via a WHERE clause.	4
6	21	learning	What is a JOIN clause?	The data that a query has access to, can be expanded via JOIN-ing two tables together.	6
3	21	learning	What is a query?	A query is a task executed against a database, table or combination of tables. e.g. SELECT, INSERT, etc.	5
9	21	performance	How do I INSERT rows into a table?	INSERT INTO objectives(id, type, question, answer, sort)\\nVALUES (21, w05d1, "How do I INSERT rows into a table?", "solution goes here",2);	9
31	21	learning	What are the four types of commands for databases?	DDL, DML, DCL, and TCL. See: https://stackoverflow.com/questions/2578194/what-are-ddl-and-dml	8
7	21	learning	What is an ERD?	In the context of databases, an ERD is a diagram that shows each table as an entity, and also shows the relationships between tables.	7
1	21	learning	What is a table?	A table is a set of data collected as columns and rows.	1
30	21	learning	What are the queries that correspond to the CRUD actions?	The CRUD queries are: INSERT, SELECT, UPDATE and DELETE.	10
8	21	performance	How do I create a table?	CREATE TABLE objectives\\n(\\n    id bigint,\\n    day_id character varying(5),\\n    type character varying(12),\\n    question text,\\n    answer text,\\n    sort smallint\\n)	2
41	12	learning	What is the main reason to use a templating system?	Separating business logic from the presentation layer (separation of concerns), enables specialization of roles for programmers.	4
46	13	performance	How do you read a cookie value that arrives at a NodeJS program in the web request?	```js app.get('/protected', (req, res) => {   const userId = req.cookies.userId;   // do something with the userId }); ```	4
50	12	performance	How, in NodeJS, do you write a route that accepts dynamic values from an HTML <form>?	app.post('/path', (req,res)=>{ console.log(req.body.fuzz); }); 	5
43	12	performance	How often do you need to restart your web server?	Template files are reloaded every time they are rendered, so there is no need to restart your server if you have only changed your EJS template.	6
45	12	learning	Does the order that your routes appear in your source code matter?	Yes. The order of the routes in your file matters. First matched -> First used.	7
63	16	learning	What does it mean to say that with version 5, HTML became more 'semantic'?	The tags introduced in HTML 5 provide ways of describing the purpose and meaning of parts of a page. This is useful for developers, as well as crawlers and bots that are trying to find specific parts of a page to highlight.	2
60	16	learning	What are the three CSS styles most directly related to the box model for any given DOM element?	Margin, Border, Padding	6
61	16	learning	For the CSS styles that take 1,2 or 4 length parameters (padding, margin, etc.) how is each number of parameters interpreted?	For 1 parameter, all 4 sides of the box get the same value. For 2 parameters, the first is 'top' and 'bottom' and the second is 'left' and 'right'. Four parameters specify each side, top, right, bottom and left, respectively.	7
55	14	learning	When is it okay to store plaintext values in cookies?	Almost never. Maybe for things like language preferences, no-login shopping carts, and some basic analytics, but probably not.	1
56	14	learning	What is REST?	REST is a convention for choosing paths and HTTP verbs for end-point routes.	3
57	14	learning	How can you use verbs other than GET and POST in your HTML, given that you're using a NodeJS back-end?	The method-override package: https://www.npmjs.com/package/method-override	4
58	14	learning	What package is available to help you implemented encrypted cookie values?	cookie-session: http://expressjs.com/en/resources/middleware/cookie-session.html	5
54	14	learning	What is HTTPS?	HTTP Secure is the encrypted version of HTTP. Using it means that the traffic between your computer and its destination cannot be read by any server or public wifi system in the delivery path.	6
59	16	learning	What is a Single Page App?	An SPA is an app that leverages AJAX to prevent page reloads. Instead it changes page content by manipulating the DOM directly, using front-end javascript.	0
62	16	learning	What is the difference between a block element and an inline element?	A block element (e.g. <div> or display: block;) occupies the entire width of its container, whereas an inline element (e.g. <span> or display: inline;) will flow, by default from left to right within the container.	1
33	23	performance	How do you connect to a Postgres DB from within Javascript?	const pg = require('pg');\r\nconst config = { \r\n  user: '<user name>',\r\n  password: '<password>',\r\n  database: '<db>',\r\n  host: '<host>' };\r\nconst client = new pg.Client(config);\r\nclient.connect()\r\n.then(() => console.log('db connected'))\r\n.catch(err => console.error('db connection error', err.stack));	1
37	18	learning	What is AJAX?	Asynchronous Javascript and XML is a different paradigm of web request, where smaller amounts of data, or small parts of a webpage are sent and recieved in requests that do not result in page a refresh.	1
66	18	performance	How do you invoke an AJAX request from jQuery?	$.ajax({\r\n  url: url,\r\n  method: "GET", \r\n})\r\n.then((result) => {\r\n  console.log('result:',result);\r\n})\r\n.catch(err => {\r\n  console.log(err); // related error\r\n});	3
67	18	learning	What is CORS and how might you deal with it as an app developer?	Cross Origin Resource Sharing (CORS) is a policy that some APIs use to prevent vulnerabilities to certain kinds of hacking.\r\n\r\nFor a development deployment only, you might choose to install a browser extension that disables your own browser from checking an API's CORS policy, or you might send your API requests via a proxy that does something similar.\r\n\r\nSee https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS and \r\nhttps://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9	5
64	17	learning	What are some examples of Javascript objects that are only defined in the browser context?	window, navigator, document	0
16	17	performance	How do you create a new element using jQuery and dynamically append it to a DOM element?	$('<div class="newElement">Text content goes here.</div>').appendTo($( ".container" ));	2
65	17	learning	What is DOM traversal?	DOM travsersal is the ability for client-side Javascript to move from one node of the DOM to another. Test.	3
70	19	learning	How do you define variables in SASS?	$main-size: 2em;\r\n$background-color: purple;	8
69	19	learning	What is the advantage of mobile first design?	Mobile First Design forces stakeholders to choose the very most important elements for any given webpage. Scaling pages sizes up from there results in a design that retains that focus and affords reasonable value to empty space. This approach is most compatible with the typical tensions associated with the desire to put as much up as possible. Overcrowding a webpage cheapens it, in a design sense.	3
72	6	learning	What is Test Driven Development?	Tests are written before the code. The tests make the expectations of the code explicit. Red - Green - Refactor are the stages of code development. You make the code work (pass the tests!) and then you can refactor the code, safe in the knowledge that the code is relatively easily testable.	0
73	6	learning	What is Mocha?	Mocha is a testing framework. It looks for test files to run in the ./test/ folder.	1
74	6	learning	What is Chai?	Chai is an assertion library. It defines a large number of assertions useful for testing.	2
75	6	performance	How do you export things from any given Javascript file?	module.exports = <AN EXPRESSION WITH A VALUE THAT REQUIRE WILL PICK UP>;\r\n\r\ne.g. \r\n\r\nmodule.exports = {\r\n  myFunc,\r\n  myOtherFunc\r\n};	3
76	6	learning	How do you bring in things that are exported from another Javascript file?	const thing = require("./path/to/javascript-file");	4
77	6	performance	How do you prevent files from being stored in your git repository?	Create a file named .gitignore\r\n\r\nInside that file put a list of filenames (wildcards allowed) where if the line matches a name, it won't be 'seen' by git.\r\n\r\ne.g.\r\n\r\nSee: https://git-scm.com/docs/gitignore\r\n	5
78	31	learning	What is React's Virtual DOM?	The virtual DOM is a copy of the DOM that it kept in memory. React does most of its work there, and then as a final step patches the actual DOM, but only where needed.	0
79	31	performance	How do you create a boilerplate React app?	On the terminal:\r\n\r\n$> npx create-react-app name-of-app-goes-here\r\n	1
80	31	learning	What is JSX?	JSX is a syntax that combines Javascript and HTML. For example, here is a line of valid JSX.\r\n\r\nconst simple = <h1>Hello, World!</h1>;\r\n\r\nWhen you're inside some markup, and want to include some Javascript, you need to enclose it in braces, thusly.\r\n\r\nconst simple = <h1>Hello, {planetNameVariable}!</h1>;\r\n\r\nAdjacent HTML tags must have a parent.	4
81	31	performance	How do you make your own HTML Tags using JSX?	In JSX, a new component can be made by creating a function that returns HTML.\r\n\r\nfunction Button(props){\r\n  return (\r\n    <button>{props.text}</button>\r\n  );\r\n}\r\n\r\nThe following two ways of executing that function from within HTML are equivalent:\r\n\r\n<Button text="click me"></Button>\r\n\r\nor\r\n\r\n{Button({text: 'click me'});	5
38	18	learning	What are some advantages of AJAX?	No page reloads, faster page renders, improved response times, client side rendering reduces network load.	2
68	18	learning	What are the implications of using AJAX calls on the browser history?	An AJAX call in and of itself does not add any locations to the browser history. If it is important that the history be updated to a URL that can return a user to a certain state of the app, then it is the front-end code's responsibility to call the History API to make changes to the browser history.	6
17	17	learning	What is DOM manipulation?	DOM manipulation is the ability of client-side javascript to add, remove or change parts of the DOM after the initial page load.	1
88	33	learning	What is a pure function?	1) The function only depends on its inputs to return a value.\r\n\r\n2) Given the same input, the function always returns the same output.\r\n\r\n3) It doesn't produce changes beyond it's scope.	0
89	33	learning	What are some common side-effects that, if you needed to do them, would make a pure function impure?	Writing to standard out (i.e. console.log()).\r\n\r\nModifying DOM elements outside of React's control.\r\n\r\nEstablishing socket connections.\r\n\r\nRetrieving data from an API.\r\n\r\nSetting timers or intervals.	1
90	33	learning	Why would you choose to put code into a useEffect hook, rather than at the top level of a component?	If you need to ensure that a block of code runs after the component is rendered, then placing that block of code inside a useEffect hook will achieve this.	2
85	32	learning	Why is it important to leave the original version of our state unchanged when we are updating state?	React compares the old and new values of state before deciding which DOM elements to update. A significant speed increase results from using React because it only chooses to update the DOM elements with changed states.\r\n\r\nThis means that when we are updating state, we need to create a new (deep) copy of the state (at least the parts that will change within a given event listener) and leave the original state data structure untouched.\r\n\r\nJavascript's basic operations are often reference values. For example, the = operator will copy the reference to an object, rather than instantiating a new object.\r\n\r\nFor this reason, you will often need to use the spread operator (new in ES6) to make a copy of an object, like so:\r\n\r\nconst copy = {\r\n  ...originalObject,\r\n  keyWithAChangedValue: 'newValue'\r\n};	3
84	32	learning	When updating state on a component, what might cause an infinite loop?	If your component has an event handler that updates state (and certainly, there are many events that should update state), then if your onClick or onChange etc. directly calls your function that updates state, that by itself will trigger a rerendering of the component, which starts the process all over again.\r\n\r\nTo avoid that infinite loop, your event handler can be set to be a callback function. Then when the component rerenders, it will only establish that callback rather than invoking the state setter again. This breaks what would otherwise start an infinite loop of rendering/stateSetting/etc.	4
91	32	learning	When returning a multi-line value from a function, what do parentheses achieve for you?	When returning a multi-line value via a return statement, parentheses enable you to avoid 'automatic semicolon insertion'. \r\n\r\nreturn (\r\n<div>\r\n <h1>Text Goes Here.</h1>\r\n</div>\r\n);	0
83	32	learning	What is the difference between props and state?	Props are values that are handed down into a component, as attributes on the custom HTML tag associated with that component's being called.\r\n\r\nState is controlled data that springs into existance when the useState function is called.	2
92	33	learning	How can you prevent a useEffect hook from running, for instance, if that particular call is not relevant?	The second parameter to the useEffect() function call is a 'dependency array'. That array contains values that React will monitor for changes. So for the following:\r\n\r\nconst [numVisitors, setNumVisitors] = useState(0);\r\n\r\nuseEffect(callback, numVisitors);\r\n\r\n... the callback will only be called (after a render) when numVisitors changes.	4
48	13	learning	What is a web cookie?	It goes well with coffee! A cookie is a name/value pair that stores information related to a particular user on their browser by a certain domain.	1
49	13	learning	How does a web cookie's value transmit from one computer to another?	A webserver sets a cookie value by including the cookie in a response header. After that, every web request that is sent back to that web server by a browswer will include the cookie in the header of those requests.	2
47	13	performance	How do you set a cookie value from within a NodeJS app?	```js app.post('/login', (req, res) => {   // other authenticatey stuff   res.cookie('userId', user.id); // set the cookie's key and value   res.redirect('/'); }); ```	3
53	13	learning	What does it mean to say that HTTP is 'stateless'? Should we all live in a stateless society?	The HTTP protocol itself is unable to associate one request with another. Each request starts from scratch. Cookies are a payload within the headers of a request that enable a server to identify the browser.	0
82	32	learning	What are the two ways to set state on a React Component?	Let's say you have some state set up thusly:\r\n\r\nconst [numVisitors, setNumVisitors] = useState(0);\r\n\r\nSetting state involves calling the state's associated setter function (setNumVisitors in this case).\r\n\r\nThat function can either take the new value for that state, like so:\r\n\r\nsetNumVisitors(5);\r\n\r\nOR...\r\n\r\n... it can take a callback as a parameter, like so:\r\n\r\nsetNumVisitors(currentValue => 5);\r\n\r\nThis second method is the preferred method for setting state.\r\n\r\nRemember that all of the following are equivalent definitions of a function. The input parameter is ignored every time.\r\n\r\nfunction (currentValue){\r\n  return 5;\r\n}\r\n\r\n(currentValue) => { return 5; } \r\n\r\ncurrentValue => 5;\r\n	1
96	37	learning	Compare and contrast Front-End routing with Back-End routing.	Both Front-End and Back-End Routing involve providing a set of code that will be chosen from by the particular system. There is a section of code that applies to any given URL.\r\n\r\nWith Back-End Routing, that code is selected depending on the path included in a new web request, and the appropriate code lives on and is executed on the back-end server.\r\n\r\nWith Front-End Routing, no new web request is actually created. The entire operation is conducted within Front-End code.\r\n\r\nWith React Router Dom, for example, all the endpoints are specified as a specific set of components that will be displayed for any given route.	0
97	37	learning	What are the basic components for React Router Dom?	BrowserRouter (imported 'as' <Router>) knows about (and can control) itself and its descendents. An entirely application would usually have only one component that imports and implements this tag.\r\n\r\n<Link> provides a link that won't initiate a new request. Use the 'to' attribute as the destination.\r\n\r\n<Route> catches the changes initiated by a <Link>. They contain the conditional components to be displayed for any given path. The path attribute is 'fuzzy matched', unless you include the 'exact' attribute.\r\n\r\n<Switch> enforces a 'first match only' policy on <Route> tags. Switch tags can also be put on a sub-component. This helps display page specific content that needs to live inside a sub-component.	1
98	37	learning	Which hook allows your Front-End routing code to extract parameters from the URL?	useParams is a hook, provided by React Router Dom, that allows your code to extract URL parameters, just as req.params would do for node.js.	2
99	37	learning	What is deep linking?	Deep linking is a feature of Front-End Routing, where even if a user clicks on a URL to the app that arrived in an email, or perhaps was saved as a bookmark, the app is loaded from scratch and then displays some deep subpage or state that the link represents.\r\n\r\nWhile the app is still a 'single page app', the app will load all of itself up on that deep link request, but then render the appropriate state to correspond to the link.	3
100	37	learning	How do you create Styled Components?	import styled from 'styled-components';\r\n\r\nconst Styled = () => {\r\n\r\n  const Header2 = styled.h2`\r\n    color: pink;\r\n    text-decoration: underline;\r\n  `;\r\n\r\n  return (\r\n    <div>\r\n      <Header2>Styled Component</h2>\r\n    </div>\r\n  );\r\n\r\n};\r\n\r\n// This is an inline style, that destroys separation of concerns. :-)	5
101	37	learning	How does useContext avoid prop drilling?	Prop drilling is where a component hierarchy passes props from grandparent down to a parent and then down to children, etc.\r\n\r\nWe need one file that stores some context. Import that file and use it as a component that provides context.\r\n\r\n<ContextHolder.Provider value={{counter,setCounter}}>\r\n  <ChildOne/>\r\n  <ChildTwo/>\r\n</ContextHolder.Provider>\r\n\r\n	6
\.


--
-- Data for Name: understandings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.understandings (id, user_id, obj_id, level) FROM stdin;
1	560ab70236287f2800ac1ae79ebcf11bb1f233e4                                                                                                                                                                                                                        	95	1
2	635af0577897b6f6a31736f2869c130bc865bfc1                                                                                                                                                                                                                        	95	3
3	f5301efa24b0981b14d7be57de684e97c37b7db1                                                                                                                                                                                                                        	95	1
4	635af0577897b6f6a31736f2869c130bc865bfc1                                                                                                                                                                                                                        	53	2
5	7130150927d562e9fda83fcd65347c3a20c9a443                                                                                                                                                                                                                        	95	3
6	aab5f5cb5acaa5c41816c5b33428c9f727921063                                                                                                                                                                                                                        	95	3
7	635af0577897b6f6a31736f2869c130bc865bfc1                                                                                                                                                                                                                        	95	1
8	60d7fa8e681e8081b9f5a19d2ad76f186087b390                                                                                                                                                                                                                        	95	2
9	0be14c4092af22375ed2df3092ab708765d7833b                                                                                                                                                                                                                        	95	1
10	24f22c43e17e17de03a9d27c91c15f68682485c9                                                                                                                                                                                                                        	95	1
11	8c2c8c87d7006cef14b614049e61957ca1fe7da7                                                                                                                                                                                                                        	95	3
12	f5301efa24b0981b14d7be57de684e97c37b7db1                                                                                                                                                                                                                        	95	2
13	635af0577897b6f6a31736f2869c130bc865bfc1                                                                                                                                                                                                                        	48	3
14	a1f619dd29cb17340aea375aee99c113cbc05106                                                                                                                                                                                                                        	95	3
15	d24c0731c5152c3ecd784bc409282bea3d3dc78e                                                                                                                                                                                                                        	95	3
16	635af0577897b6f6a31736f2869c130bc865bfc1                                                                                                                                                                                                                        	53	3
17	27792edab093007485b5e0c00db71bd518a3348a                                                                                                                                                                                                                        	95	3
18	1651275bbd42cc7bd9f202e2410dc29648e61ca9                                                                                                                                                                                                                        	95	3
19	635af0577897b6f6a31736f2869c130bc865bfc1                                                                                                                                                                                                                        	49	3
20	99fe6552d30be22df3a3d48a8363da35d5e997aa                                                                                                                                                                                                                        	95	3
21	24f22c43e17e17de03a9d27c91c15f68682485c9                                                                                                                                                                                                                        	95	3
22	2f427f68b3614e441352fe44222ec0849f6490d2                                                                                                                                                                                                                        	95	3
23	62882a9d490c0e1862aa7d6a98d885306a884bb6                                                                                                                                                                                                                        	95	1
24	2f427f68b3614e441352fe44222ec0849f6490d2                                                                                                                                                                                                                        	48	2
25	24f22c43e17e17de03a9d27c91c15f68682485c9                                                                                                                                                                                                                        	95	1
26	5c34fc1645572af02f846d0e9b01c597d6adbdba                                                                                                                                                                                                                        	95	3
27	9f98bf90a1d3554b8cf0db2a88338d4593f7a563                                                                                                                                                                                                                        	95	3
28	24f22c43e17e17de03a9d27c91c15f68682485c9                                                                                                                                                                                                                        	95	3
29	2f427f68b3614e441352fe44222ec0849f6490d2                                                                                                                                                                                                                        	53	1
30	d24c0731c5152c3ecd784bc409282bea3d3dc78e                                                                                                                                                                                                                        	53	3
31	b3dffdf0bc468a27f210fdb8fd4701b110fae7cf                                                                                                                                                                                                                        	95	1
32	2f427f68b3614e441352fe44222ec0849f6490d2                                                                                                                                                                                                                        	53	2
33	353d6a474c3109fe7bda62478adec26462674001                                                                                                                                                                                                                        	95	1
34	2f427f68b3614e441352fe44222ec0849f6490d2                                                                                                                                                                                                                        	49	1
35	ff2d31200cc69ab341dfdfb974959cb95d935631                                                                                                                                                                                                                        	95	3
36	d24c0731c5152c3ecd784bc409282bea3d3dc78e                                                                                                                                                                                                                        	48	2
37	a1f619dd29cb17340aea375aee99c113cbc05106                                                                                                                                                                                                                        	53	2
38	24f22c43e17e17de03a9d27c91c15f68682485c9                                                                                                                                                                                                                        	48	3
39	d24c0731c5152c3ecd784bc409282bea3d3dc78e                                                                                                                                                                                                                        	49	3
40	f5301efa24b0981b14d7be57de684e97c37b7db1                                                                                                                                                                                                                        	53	3
41	2f427f68b3614e441352fe44222ec0849f6490d2                                                                                                                                                                                                                        	47	2
42	d24c0731c5152c3ecd784bc409282bea3d3dc78e                                                                                                                                                                                                                        	47	3
43	2f427f68b3614e441352fe44222ec0849f6490d2                                                                                                                                                                                                                        	46	2
44	d24c0731c5152c3ecd784bc409282bea3d3dc78e                                                                                                                                                                                                                        	46	3
45	60b87a890efa323841fa88baf03d2fb4999f3192                                                                                                                                                                                                                        	46	2
46	60b87a890efa323841fa88baf03d2fb4999f3192                                                                                                                                                                                                                        	53	2
47	60b87a890efa323841fa88baf03d2fb4999f3192                                                                                                                                                                                                                        	48	3
48	60b87a890efa323841fa88baf03d2fb4999f3192                                                                                                                                                                                                                        	49	3
49	60b87a890efa323841fa88baf03d2fb4999f3192                                                                                                                                                                                                                        	46	1
50	562880271f42df02bdc0a3a2aa31e4b4a23b0d55                                                                                                                                                                                                                        	95	3
51	60b87a890efa323841fa88baf03d2fb4999f3192                                                                                                                                                                                                                        	47	1
52	562880271f42df02bdc0a3a2aa31e4b4a23b0d55                                                                                                                                                                                                                        	53	3
53	562880271f42df02bdc0a3a2aa31e4b4a23b0d55                                                                                                                                                                                                                        	48	3
54	562880271f42df02bdc0a3a2aa31e4b4a23b0d55                                                                                                                                                                                                                        	49	3
55	562880271f42df02bdc0a3a2aa31e4b4a23b0d55                                                                                                                                                                                                                        	47	3
56	562880271f42df02bdc0a3a2aa31e4b4a23b0d55                                                                                                                                                                                                                        	46	3
57	e78bbafd74e4e5bc2b14600089d1f72d363e6136                                                                                                                                                                                                                        	53	3
58	a1f619dd29cb17340aea375aee99c113cbc05106                                                                                                                                                                                                                        	48	2
59	e78bbafd74e4e5bc2b14600089d1f72d363e6136                                                                                                                                                                                                                        	48	3
60	a1f619dd29cb17340aea375aee99c113cbc05106                                                                                                                                                                                                                        	95	2
61	a1f619dd29cb17340aea375aee99c113cbc05106                                                                                                                                                                                                                        	46	2
62	5318a409e757c247452d7be8cbec23c5235a92b3                                                                                                                                                                                                                        	53	3
63	5318a409e757c247452d7be8cbec23c5235a92b3                                                                                                                                                                                                                        	48	3
64	a1f619dd29cb17340aea375aee99c113cbc05106                                                                                                                                                                                                                        	47	2
65	5318a409e757c247452d7be8cbec23c5235a92b3                                                                                                                                                                                                                        	49	3
66	a1f619dd29cb17340aea375aee99c113cbc05106                                                                                                                                                                                                                        	49	1
67	5318a409e757c247452d7be8cbec23c5235a92b3                                                                                                                                                                                                                        	47	2
68	5318a409e757c247452d7be8cbec23c5235a92b3                                                                                                                                                                                                                        	46	2
69	e78bbafd74e4e5bc2b14600089d1f72d363e6136                                                                                                                                                                                                                        	49	3
70	e78bbafd74e4e5bc2b14600089d1f72d363e6136                                                                                                                                                                                                                        	49	2
71	undefined                                                                                                                                                                                                                                                       	95	1
72	e78bbafd74e4e5bc2b14600089d1f72d363e6136                                                                                                                                                                                                                        	47	3
73	e78bbafd74e4e5bc2b14600089d1f72d363e6136                                                                                                                                                                                                                        	46	3
74	undefined                                                                                                                                                                                                                                                       	95	1
75	undefined                                                                                                                                                                                                                                                       	95	1
76	undefined                                                                                                                                                                                                                                                       	95	1
77	undefined                                                                                                                                                                                                                                                       	95	1
78	undefined                                                                                                                                                                                                                                                       	95	1
79	undefined                                                                                                                                                                                                                                                       	95	1
80	1                                                                                                                                                                                                                                                               	95	1
81	2                                                                                                                                                                                                                                                               	95	1
82	3                                                                                                                                                                                                                                                               	95	1
83	4                                                                                                                                                                                                                                                               	95	2
84	4                                                                                                                                                                                                                                                               	95	1
85	e78bbafd74e4e5bc2b14600089d1f72d363e6136                                                                                                                                                                                                                        	95	3
86	5                                                                                                                                                                                                                                                               	95	1
87	7                                                                                                                                                                                                                                                               	95	1
88	8                                                                                                                                                                                                                                                               	95	1
89	11                                                                                                                                                                                                                                                              	95	0
90	11                                                                                                                                                                                                                                                              	95	1
91	13                                                                                                                                                                                                                                                              	95	1
92	14                                                                                                                                                                                                                                                              	95	2
93	14                                                                                                                                                                                                                                                              	95	1
94	15                                                                                                                                                                                                                                                              	95	2
95	15                                                                                                                                                                                                                                                              	95	1
96	17                                                                                                                                                                                                                                                              	95	2
97	17                                                                                                                                                                                                                                                              	95	1
98	19                                                                                                                                                                                                                                                              	95	2
99	19                                                                                                                                                                                                                                                              	95	1
100	20                                                                                                                                                                                                                                                              	95	2
101	20                                                                                                                                                                                                                                                              	95	1
102	1651275bbd42cc7bd9f202e2410dc29648e61ca9                                                                                                                                                                                                                        	53	2
103	1651275bbd42cc7bd9f202e2410dc29648e61ca9                                                                                                                                                                                                                        	53	2
104	1651275bbd42cc7bd9f202e2410dc29648e61ca9                                                                                                                                                                                                                        	48	3
105	1651275bbd42cc7bd9f202e2410dc29648e61ca9                                                                                                                                                                                                                        	53	2
106	5c34fc1645572af02f846d0e9b01c597d6adbdba                                                                                                                                                                                                                        	53	3
107	5c34fc1645572af02f846d0e9b01c597d6adbdba                                                                                                                                                                                                                        	48	3
108	5c34fc1645572af02f846d0e9b01c597d6adbdba                                                                                                                                                                                                                        	49	2
109	1651275bbd42cc7bd9f202e2410dc29648e61ca9                                                                                                                                                                                                                        	49	2
110	1651275bbd42cc7bd9f202e2410dc29648e61ca9                                                                                                                                                                                                                        	49	2
111	1651275bbd42cc7bd9f202e2410dc29648e61ca9                                                                                                                                                                                                                        	47	2
112	1651275bbd42cc7bd9f202e2410dc29648e61ca9                                                                                                                                                                                                                        	46	3
113	1651275bbd42cc7bd9f202e2410dc29648e61ca9                                                                                                                                                                                                                        	49	2
114	24f22c43e17e17de03a9d27c91c15f68682485c9                                                                                                                                                                                                                        	53	3
115	24f22c43e17e17de03a9d27c91c15f68682485c9                                                                                                                                                                                                                        	49	3
116	24f22c43e17e17de03a9d27c91c15f68682485c9                                                                                                                                                                                                                        	47	3
117	24f22c43e17e17de03a9d27c91c15f68682485c9                                                                                                                                                                                                                        	46	3
118	db230c750386cf0a5a5c6c82d1d7931c13e9450e                                                                                                                                                                                                                        	53	1
119	353d6a474c3109fe7bda62478adec26462674001                                                                                                                                                                                                                        	95	3
120	5c34fc1645572af02f846d0e9b01c597d6adbdba                                                                                                                                                                                                                        	47	2
121	aab5f5cb5acaa5c41816c5b33428c9f727921063                                                                                                                                                                                                                        	53	2
122	aab5f5cb5acaa5c41816c5b33428c9f727921063                                                                                                                                                                                                                        	48	2
123	aab5f5cb5acaa5c41816c5b33428c9f727921063                                                                                                                                                                                                                        	49	2
124	635af0577897b6f6a31736f2869c130bc865bfc1                                                                                                                                                                                                                        	47	2
125	aab5f5cb5acaa5c41816c5b33428c9f727921063                                                                                                                                                                                                                        	47	2
126	aab5f5cb5acaa5c41816c5b33428c9f727921063                                                                                                                                                                                                                        	46	2
127	5c34fc1645572af02f846d0e9b01c597d6adbdba                                                                                                                                                                                                                        	46	2
128	635af0577897b6f6a31736f2869c130bc865bfc1                                                                                                                                                                                                                        	46	2
129	1679385cda6876f24a6c99e51cdcf23284869751                                                                                                                                                                                                                        	53	3
130	27792edab093007485b5e0c00db71bd518a3348a                                                                                                                                                                                                                        	53	3
131	27792edab093007485b5e0c00db71bd518a3348a                                                                                                                                                                                                                        	48	3
132	dd49fe27154536361a1f2362c6008407c47afa07                                                                                                                                                                                                                        	53	1
133	1679385cda6876f24a6c99e51cdcf23284869751                                                                                                                                                                                                                        	48	3
134	353d6a474c3109fe7bda62478adec26462674001                                                                                                                                                                                                                        	53	2
135	353d6a474c3109fe7bda62478adec26462674001                                                                                                                                                                                                                        	48	3
136	27792edab093007485b5e0c00db71bd518a3348a                                                                                                                                                                                                                        	49	2
137	27792edab093007485b5e0c00db71bd518a3348a                                                                                                                                                                                                                        	47	3
138	353d6a474c3109fe7bda62478adec26462674001                                                                                                                                                                                                                        	49	3
139	27792edab093007485b5e0c00db71bd518a3348a                                                                                                                                                                                                                        	46	3
140	353d6a474c3109fe7bda62478adec26462674001                                                                                                                                                                                                                        	47	3
141	353d6a474c3109fe7bda62478adec26462674001                                                                                                                                                                                                                        	46	3
142	b3dffdf0bc468a27f210fdb8fd4701b110fae7cf                                                                                                                                                                                                                        	53	2
143	7962c54d6f5db771e2bf8d54083c7db3057975ab                                                                                                                                                                                                                        	48	2
144	dd49fe27154536361a1f2362c6008407c47afa07                                                                                                                                                                                                                        	48	3
145	dd49fe27154536361a1f2362c6008407c47afa07                                                                                                                                                                                                                        	49	1
146	ff2d31200cc69ab341dfdfb974959cb95d935631                                                                                                                                                                                                                        	48	3
147	7962c54d6f5db771e2bf8d54083c7db3057975ab                                                                                                                                                                                                                        	53	2
148	dd49fe27154536361a1f2362c6008407c47afa07                                                                                                                                                                                                                        	47	1
149	7962c54d6f5db771e2bf8d54083c7db3057975ab                                                                                                                                                                                                                        	49	2
150	b3dffdf0bc468a27f210fdb8fd4701b110fae7cf                                                                                                                                                                                                                        	48	3
151	7962c54d6f5db771e2bf8d54083c7db3057975ab                                                                                                                                                                                                                        	47	2
152	7962c54d6f5db771e2bf8d54083c7db3057975ab                                                                                                                                                                                                                        	46	2
153	dd49fe27154536361a1f2362c6008407c47afa07                                                                                                                                                                                                                        	46	2
154	b3dffdf0bc468a27f210fdb8fd4701b110fae7cf                                                                                                                                                                                                                        	49	2
155	b3dffdf0bc468a27f210fdb8fd4701b110fae7cf                                                                                                                                                                                                                        	47	1
156	b3dffdf0bc468a27f210fdb8fd4701b110fae7cf                                                                                                                                                                                                                        	46	1
157	ff2d31200cc69ab341dfdfb974959cb95d935631                                                                                                                                                                                                                        	47	3
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password) FROM stdin;
4	christian.nally@lighthouselabs.com	$2b$10$dVC5hUmx8chM3YSWnvjax.qL9Fg/KoDoVUQMwr.4EzO9ZNTFqQ9HS
5	sticksallison@gmail.com	$2b$10$2dI7pROVWvqugQBmgi4IcOGQz0pICss9Kr.6EUR9wdGBg51zEwEKi
6	sticks.allison@gmail.com	$2b$10$zgh5pXCt66M3E246.YHrt.LyIrE.FSoVsyKn7EfHXnyulfRZZmX3a
\.


--
-- Name: days_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.days_id_seq', 25, true);


--
-- Name: objectives_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.objectives_id_seq', 101, true);


--
-- Name: understandings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.understandings_id_seq', 157, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: days days_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.days
    ADD CONSTRAINT days_pkey PRIMARY KEY (id);


--
-- Name: objectives objectives_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.objectives
    ADD CONSTRAINT objectives_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

