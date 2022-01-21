--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 14.1

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
    user_id integer NOT NULL,
    objective_id integer NOT NULL,
    level integer NOT NULL
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
    email character varying(256) NOT NULL,
    password character varying(256) NOT NULL,
    admin integer DEFAULT 0
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
2	21	learning	What is a database?	A database is a collection of tables. The collection is typically used as a set. A connection to a database is granted via a username and password.	3
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
23	19	performance	How do you set a maximum width on HTML elements?	.these_elements { max-width: 135px; }	4
25	19	learning	What are the absolute length units available in CSS?	mm, cm, in, px, pt, pc (1 pc = 12 pt)	5
22	19	performance	How do you set a minimum width on HTML elements?	.these_elements { min-width: 135px; }	3
26	19	learning	What are the relative length units available in CSS?	em, ex, ch, rem, vw, vh, vmin, vmax, %	6
24	19	performance	How should we set the web browser's viewport?	<meta name="viewport" content="width=device-width, initial-scale=1.0">	2
43	12	performance	How often do you need to restart your web server?	Template files are reloaded every time they are rendered, so there is no need to restart your server if you have only changed your EJS template.	6
15	16	learning	What is the basic syntax for a CSS 'Rule'?!!!!	[selector] { style: value; ... } 	3
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
72	6	learning	What is Test Driven Development?	Tests are written before the code. The tests make the expectations of the code explicit. Red - Green - Refactor are the stages of code development. You make the code work (pass the tests!) and then you can refactor the code, safe in the knowledge that the code is relatively easily testable.	0
73	6	learning	What is Mocha?	Mocha is a testing framework. It looks for test files to run in the ./test/ folder.	1
74	6	learning	What is Chai?	Chai is an assertion library. It defines a large number of assertions useful for testing.	2
75	6	performance	How do you export things from any given Javascript file?	module.exports = <AN EXPRESSION WITH A VALUE THAT REQUIRE WILL PICK UP>;\r\n\r\ne.g. \r\n\r\nmodule.exports = {\r\n  myFunc,\r\n  myOtherFunc\r\n};	3
76	6	learning	How do you bring in things that are exported from another Javascript file?	const thing = require("./path/to/javascript-file");	4
77	6	performance	How do you prevent files from being stored in your git repository?	Create a file named .gitignore\r\n\r\nInside that file put a list of filenames (wildcards allowed) where if the line matches a name, it won't be 'seen' by git.\r\n\r\ne.g.\r\n\r\nSee: https://git-scm.com/docs/gitignore\r\n	5
78	31	learning	What is React's Virtual DOM?	The virtual DOM is a copy of the DOM that it kept in memory. React does most of its work there, and then as a final step patches the actual DOM, but only where needed.	0
79	31	performance	How do you create a boilerplate React app?	On the terminal:\r\n\r\n$> npx create-react-app name-of-app-goes-here\r\n	1
70	19	learning	How do you define variables in SASS?	$main-size: 2em;\r\n$background-color: purple;	7
81	31	performance	How do you make your own HTML Tags using JSX?	In JSX, a new component can be made by creating a function that returns HTML.\r\n\r\nfunction Button(props){\r\n  return (\r\n    <button>{props.text}</button>\r\n  );\r\n}\r\n\r\nThe following two ways of executing that function from within HTML are equivalent:\r\n\r\n<Button text="click me"></Button>\r\n\r\nor\r\n\r\n{Button({text: 'click me'});	5
38	18	learning	What are some advantages of AJAX?	No page reloads, faster page renders, improved response times, client side rendering reduces network load.	2
68	18	learning	What are the implications of using AJAX calls on the browser history?	An AJAX call in and of itself does not add any locations to the browser history. If it is important that the history be updated to a URL that can return a user to a certain state of the app, then it is the front-end code's responsibility to call the History API to make changes to the browser history.	6
17	17	learning	What is DOM manipulation?	DOM manipulation is the ability of client-side javascript to add, remove or change parts of the DOM after the initial page load.	1
88	33	learning	What is a pure function?	1) The function only depends on its inputs to return a value.\r\n\r\n2) Given the same input, the function always returns the same output.\r\n\r\n3) It doesn't produce changes beyond it's scope.	0
89	33	learning	What are some common side-effects that, if you needed to do them, would make a pure function impure?	Writing to standard out (i.e. console.log()).\r\n\r\nModifying DOM elements outside of React's control.\r\n\r\nEstablishing socket connections.\r\n\r\nRetrieving data from an API.\r\n\r\nSetting timers or intervals.	1
90	33	learning	Why would you choose to put code into a useEffect hook, rather than at the top level of a component?	If you need to ensure that a block of code runs after the component is rendered, then placing that block of code inside a useEffect hook will achieve this.	2
92	33	learning	How can you prevent a useEffect hook from running, for instance, if that particular call is not relevant?	The second parameter to the useEffect() function call is a 'dependency array'. That array contains values that React will monitor for changes. So for the following:\r\n\r\nconst [numVisitors, setNumVisitors] = useState(0);\r\n\r\nuseEffect(callback, numVisitors);\r\n\r\n... the callback will only be called (after a render) when numVisitors changes.	4
48	13	learning	What is a web cookie?	It goes well with coffee! A cookie is a name/value pair that stores information related to a particular user on their browser by a certain domain.	1
49	13	learning	How does a web cookie's value transmit from one computer to another?	A webserver sets a cookie value by including the cookie in a response header. After that, every web request that is sent back to that web server by a browswer will include the cookie in the header of those requests.	2
47	13	performance	How do you set a cookie value from within a NodeJS app?	```js app.post('/login', (req, res) => {   // other authenticatey stuff   res.cookie('userId', user.id); // set the cookie's key and value   res.redirect('/'); }); ```	3
53	13	learning	What does it mean to say that HTTP is 'stateless'? Should we all live in a stateless society?	The HTTP protocol itself is unable to associate one request with another. Each request starts from scratch. Cookies are a payload within the headers of a request that enable a server to identify the browser.	0
96	37	learning	Compare and contrast Front-End routing with Back-End routing.	Both Front-End and Back-End Routing involve providing a set of code that will be chosen from by the particular system. There is a section of code that applies to any given URL.\r\n\r\nWith Back-End Routing, that code is selected depending on the path included in a new web request, and the appropriate code lives on and is executed on the back-end server.\r\n\r\nWith Front-End Routing, no new web request is actually created. The entire operation is conducted within Front-End code.\r\n\r\nWith React Router Dom, for example, all the endpoints are specified as a specific set of components that will be displayed for any given route.	0
97	37	learning	What are the basic components for React Router Dom?	BrowserRouter (imported 'as' <Router>) knows about (and can control) itself and its descendents. An entirely application would usually have only one component that imports and implements this tag.\r\n\r\n<Link> provides a link that won't initiate a new request. Use the 'to' attribute as the destination.\r\n\r\n<Route> catches the changes initiated by a <Link>. They contain the conditional components to be displayed for any given path. The path attribute is 'fuzzy matched', unless you include the 'exact' attribute.\r\n\r\n<Switch> enforces a 'first match only' policy on <Route> tags. Switch tags can also be put on a sub-component. This helps display page specific content that needs to live inside a sub-component.	1
83	32	learning	What is the difference between props and state?	Props are values that are handed down into a component, as attributes on the custom HTML tag associated with that component's being called.\r\n\r\nState is controlled data that springs into existance when the useState function is called.	3
84	32	learning	When updating state on a component, what might cause an infinite loop?	If your component has an event handler that updates state (and certainly, there are many events that should update state), then if your onClick or onChange etc. directly calls your function that updates state, that by itself will trigger a rerendering of the component, which starts the process all over again.\r\n\r\nTo avoid that infinite loop, your event handler can be set to be a callback function. Then when the component rerenders, it will only establish that callback rather than invoking the state setter again. This breaks what would otherwise start an infinite loop of rendering/stateSetting/etc.	5
98	37	learning	Which hook allows your Front-End routing code to extract parameters from the URL?	useParams is a hook, provided by React Router Dom, that allows your code to extract URL parameters, just as req.params would do for node.js.	2
99	37	learning	What is deep linking?	Deep linking is a feature of Front-End Routing, where even if a user clicks on a URL to the app that arrived in an email, or perhaps was saved as a bookmark, the app is loaded from scratch and then displays some deep subpage or state that the link represents.\r\n\r\nWhile the app is still a 'single page app', the app will load all of itself up on that deep link request, but then render the appropriate state to correspond to the link.	3
100	37	learning	How do you create Styled Components?	import styled from 'styled-components';\r\n\r\nconst Styled = () => {\r\n\r\n  const Header2 = styled.h2`\r\n    color: pink;\r\n    text-decoration: underline;\r\n  `;\r\n\r\n  return (\r\n    <div>\r\n      <Header2>Styled Component</h2>\r\n    </div>\r\n  );\r\n\r\n};\r\n\r\n// This is an inline style, that destroys separation of concerns. :-)	5
101	37	learning	How does useContext avoid prop drilling?	Prop drilling is where a component hierarchy passes props from grandparent down to a parent and then down to children, etc.\r\n\r\nWe need one file that stores some context. Import that file and use it as a component that provides context.\r\n\r\n<ContextHolder.Provider value={{counter,setCounter}}>\r\n  <ChildOne/>\r\n  <ChildTwo/>\r\n</ContextHolder.Provider>\r\n\r\n	6
21	19	learning	What is responsive web design?	Responsive Web Design is a set of practices that allows web pages to alter their layout and appearance to suit different screen widths and resolutions.	0
69	19	learning	What is the advantage of mobile first design?	Mobile First Design forces stakeholders to choose the very most important elements for any given webpage. Scaling pages sizes up from there results in a design that retains that focus and affords reasonable value to empty space. This approach is most compatible with the typical tensions associated with the desire to put as much up as possible. Overcrowding a webpage cheapens it, in a design sense.	1
102	22	learning	In SQL, what convention applies to whether you can include lowercase or uppercase letters in a table or column name?	By convention, tables and columns are given names in snake_case. That is, words are separated by underscores and all letters are lower case.	9
103	32	learning	Coffee or Naan?	confused  => Coffee\r\nfair      => Either is Fine\r\nexcellent => Naan	0
91	32	learning	When returning a multi-line value from a function, what do parentheses achieve for you?	When returning a multi-line value via a return statement, parentheses enable you to avoid 'automatic semicolon insertion'. \r\n\r\nreturn (\r\n<div>\r\n <h1>Text Goes Here.</h1>\r\n</div>\r\n);	1
82	32	learning	What are the two ways to set state on a React Component?	Let's say you have some state set up thusly:\r\n\r\nconst [numVisitors, setNumVisitors] = useState(0);\r\n\r\nSetting state involves calling the state's associated setter function (setNumVisitors in this case).\r\n\r\nThat function can either take the new value for that state, like so:\r\n\r\nsetNumVisitors(5);\r\n\r\nOR...\r\n\r\n... it can take a callback as a parameter, like so:\r\n\r\nsetNumVisitors(currentValue => 5);\r\n\r\nThis second method is the preferred method for setting state.\r\n\r\nRemember that all of the following are equivalent definitions of a function. The input parameter is ignored every time.\r\n\r\nfunction (currentValue){\r\n  return 5;\r\n}\r\n\r\n(currentValue) => { return 5; } \r\n\r\ncurrentValue => 5;\r\n	2
85	32	learning	Why is it important to leave the original version of our state unchanged when we are updating state?	React compares the old and new values of state before deciding which DOM elements to update. A significant speed increase results from using React because it only chooses to update the DOM elements with changed states.\r\n\r\nThis means that when we are updating state, we need to create a new (deep) copy of the state (at least the parts that will change within a given event listener) and leave the original state data structure untouched.\r\n\r\nJavascript's basic operations are often reference values. For example, the = operator will copy the reference to an object, rather than instantiating a new object.\r\n\r\nFor this reason, you will often need to use the spread operator (new in ES6) to make a copy of an object, like so:\r\n\r\nconst copy = {\r\n  ...originalObject,\r\n  keyWithAChangedValue: 'newValue'\r\n};	4
80	31	learning	WTF?; DROP TABLE objectives; SELECT * FROM objectives 	JSX is a syntax that combines Javascript and HTML. For example, here is a line of valid JSX.\r\n\r\nconst simple = <h1>Hello, World!</h1>;\r\n\r\nWhen you're inside some markup, and want to include some Javascript, you need to enclose it in braces, thusly.\r\n\r\nconst simple = <h1>Hello, {planetNameVariable}!</h1>;\r\n\r\nAdjacent HTML tags must have a parent.	4
\.


--
-- Data for Name: understandings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.understandings (id, user_id, objective_id, level) FROM stdin;
1	1	50	2
2	1	42	3
3	1	42	1
4	1	96	3
5	1	96	2
6	1	96	1
7	1	96	2
8	1	59	2
9	1	59	1
10	1	59	2
11	2	59	3
12	2	59	1
13	2	62	3
14	2	62	2
15	4	59	1
16	4	62	1
17	4	63	1
18	4	15	1
19	4	13	1
20	4	14	1
21	4	60	1
22	4	61	1
23	4	59	3
24	4	61	3
25	4	59	3
26	4	59	2
27	9	59	1
28	9	62	3
29	9	63	3
30	13	59	3
33	18	1	0
34	18	8	0
35	21	1	2
36	29	1	3
37	32	1	2
38	24	1	2
39	29	8	3
40	29	2	3
41	29	4	3
42	29	3	3
43	29	6	2
44	28	1	3
45	39	1	1
46	39	1	0
47	29	7	2
48	28	8	2
49	29	31	3
50	29	9	3
51	32	1	3
52	28	2	3
53	28	4	3
54	34	1	3
55	36	1	3
56	32	8	1
57	28	3	3
58	24	8	2
59	28	6	3
60	29	30	3
61	41	1	2
62	24	2	3
63	35	1	3
64	32	2	2
65	34	2	3
66	34	8	2
67	28	7	2
68	26	1	3
69	24	4	3
70	32	4	3
71	35	8	3
72	41	8	2
73	36	8	2
74	34	4	2
75	41	1	1
76	40	1	2
77	35	2	2
78	40	1	3
79	30	1	3
80	41	1	2
81	22	1	2
82	32	3	3
83	31	1	3
84	35	4	3
85	24	6	2
86	41	1	1
87	33	1	3
88	32	6	2
89	28	31	2
90	39	1	2
91	35	3	2
92	39	8	2
93	26	8	2
94	28	31	1
95	34	3	2
96	24	7	2
97	33	8	2
98	39	2	2
99	26	8	3
100	39	1	3
101	41	1	2
102	22	8	2
103	33	2	3
104	39	4	2
105	34	6	2
106	31	8	2
107	39	3	2
108	35	7	1
109	32	7	3
110	25	1	3
111	39	6	2
112	34	6	3
113	26	2	2
114	35	31	1
115	31	2	2
116	39	7	2
117	35	9	3
118	34	7	2
119	35	30	2
120	39	31	1
121	36	2	3
122	26	4	3
123	32	31	1
124	34	31	3
125	34	31	2
126	39	9	2
127	24	30	2
128	36	4	3
129	32	9	2
130	24	9	2
131	39	30	1
132	39	30	2
133	26	3	3
134	32	30	3
135	35	6	2
136	24	31	1
137	24	31	2
138	26	6	2
139	24	3	2
140	44	1	3
141	36	3	2
142	25	8	2
143	34	9	3
144	26	7	2
145	44	8	2
146	22	2	2
147	36	6	3
148	22	3	2
149	25	2	3
150	26	31	1
151	34	30	3
152	36	7	1
153	40	8	2
154	26	9	3
155	22	4	2
156	33	4	3
157	26	30	3
158	40	2	3
159	33	3	3
160	36	31	2
161	40	4	3
162	33	6	2
163	31	6	3
164	22	6	1
165	36	9	3
166	40	3	2
167	33	31	1
168	36	30	2
169	22	7	1
170	40	6	1
171	31	3	3
172	30	8	3
173	30	2	3
174	40	7	3
175	40	31	2
176	30	4	3
177	45	1	2
178	40	9	2
179	40	30	3
180	30	3	3
181	30	6	2
182	45	8	1
183	30	7	2
184	22	31	1
185	30	31	2
186	22	30	2
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, admin) FROM stdin;
2	sticksallison@gmail.com	$2b$10$pDEufymxQOi3kPpUvrIaBO.J4H9v.fWs5JlS75o9MeXeROC9X5ggu	0
1	christian.nally@lighthouselabs.com	$2b$10$mgnKRQpDFxTqNws71Lxl5.H7BlTIa.5UdFmDojAfKEnzgqPRT3qqG	1
3	galianofoodgirl@gmail.com	$2b$10$gd8u6UCo6H0koF10PALJ/uijzTeRzOLTB9dVjqGcqHk6wv.xBtzSG	0
4	naliano@protonmail.ch	$2b$10$k7wWhaVMKc/mHjgukWOoAOiAW.QO4US6.rIhQOR98a1m4G7JRAF/2	0
5	nadernasr7@gmail.com	$2b$10$z.CdrSiQVBKGVYKFz0KZGuXZY4a2xdNJfeQVBnJ/BW3.I311SyhQC	0
6	a@a.com	$2b$10$JZDlCwW8.sdLoLUAkKvauOZNE6BnFfJWKeGgxd.JUHiepU7SKzIFu	0
7	pineapple@mail.com	$2b$10$mFBzzCEGE4uwA23/icox/uCws3Bjq9aX6W6OnGBISbZ.rTciNrms6	0
8	nik@gmail.com	$2b$10$ClD.GkLuBNmCC1dYM/IpZ.i0KF67qRrLovHx39V7quTbCaNm6Fhy6	0
9	lucianavivianigallo@gmail.com	$2b$10$78SLVByXfBNLg0za6hDPSecFGy/beuSIwWUV7tDC4dZI6l4uY9rpS	0
10	duygu.yldrm4820@gmail.com	$2b$10$eMiz117z8Qd0AEys1odfnOYT6JGKJReemo17f4be3tX9I40LmCo.O	0
11	nadi.fatah@gmail.com	$2b$10$TNtzTyRIic9HlK/85KJmFeRlgeEj7giUmRNwYzeIrYxjNFfaLGk3S	0
12		$2b$10$S8amHOAdjKRKrr6Lh4jHPOIHydSm/dN.Gm5Vk63Fp8K5vYtlZ7dlq	0
13	martinp0512@gmail.com	$2b$10$fqX7sMwcN4RB17v/SiymU.EuD2zW7YYqKaiH.fKSHk7Gp8F3wu3ea	0
14	jessica.suzumura@aol.com	$2b$10$94QHL3kw2xgQ/caeH.oVn.Mm8wjJT4V1zh2r9VbrCVU2BaXHqKrUy	0
15	abc@abcd.com	$2b$10$jW38gfqy6Rv02syGu2NRH.8I8DRA71CeHFPP.6ZWjBVUA4akIsasO	0
16	hailan6257@gmail.com	$2b$10$AxCiUNGO2buJwjFgAS39EuiFD/QLJ9Yx4SgztJHer7wRvaNMgxMpC	0
17	sonia@gmail.com	$2b$10$i.uxWPZXBRS0Bqf8TxDx4.meNPXZWxpNNIkD9z74Nn08N63zyrImi	0
18	test@example.com	$2b$10$xh1VWKv4T133kq3NZKfBremQNzuHLjYg5LiobJQ06i.Lu6OQfLMKm	0
19	valhustle@gmail.com	$2b$10$eQm58dibRAQbcS9JWsocluR2M7luJ32JebYX/Sl6S8piauB/vMLey	0
20	injectSQLmodules@hackthis.com	$2b$10$.lVyfOwo0U.k/CX0Zr0k/O7yZK0FGtaXwMjBR1hXahi8jbZlb.e2C	0
21	a@example.com	$2b$10$B..EGTyJSnJtzELavDU88.51cpiszh6.P9Xnfs4vDoirwqNG5ZQh2	0
22	1@a.com	$2b$10$lhpVZZ3aUpe/EzJjZVgB2ObsuaeCt/95PlNQwjf/I10cO652O8btq	0
23	hi@hi.hi	$2b$10$dTEarexkHuLXrd6udveekOzQFdxWNIzEvdzghZS/zo7BYPmiYMj/C	0
24	anon@gmail.com	$2b$10$pMzr5iueJgq5u6X3aKHmjO6o3aeSDqcEE.bYaSYy5XCG.BOPjW3Bu	0
25	valid@email.com	$2b$10$D53OUXJiI2hjAdCUpQuJaerDBqA4XWXYL/mywofbr7WsIe/Pkfz6m	0
26	email@email.com	$2b$10$v.UhkntGVMqMxFiaoBZSoOIYE27nxOZ2CaWofqnifnqpn7mTGj/YS	0
27	Chcchuksng@yahoo.com	$2b$10$8dLk9tCADpoHSOnWVDpMqOseFhg1Nb4k9YslQBKDISBw2bJfN0ay2	0
28	kittens@kitty.ca	$2b$10$HSVdSsDKbWrwAKyamGezC.MAsTc8uTFlc3Yx/X/T7fY3pl2a.HtFK	0
29	uwu@uwu.com	$2b$10$SQ6/VzrSK7EhfTS3AB4vzemfkH8TURn5zVnQT6eGTOS1e4/7BXfHi	0
30	hello@hello.com	$2b$10$XgpQX3v7MNTnUIqZ5zfMJuffujJ/wVW4CWOkhmjoCuw1wU5ZbfAgC	0
31	1@2.com	$2b$10$GW/JV4s0u4QXcbVGAoRos.IMPHYZhUvX35ZEeuw0.cPkCEbyUcYr.	0
32	try2@hotmail.com	$2b$10$BLGFHa5zBMouzpytTkf83.dFy/JPt0e6m6Sd0ltoRyNrjXmnc1g02	0
33	coolem@il.com	$2b$10$16TUfrh/zCUjue9QRl9uSOOBP7R8fzAy8asiYEdxgB9iePD4cYwrm	0
34	elena.cherpakova@gmail.com	$2b$10$2SalW7XL42gMfxNer2TH5en.jrFPHeuKpFGKofaZYiC8xlRy0RAwC	0
35	hi@gmail.com	$2b$10$hcI38mOh08oMzQzJC3EHmuuzHtlTzJExJvbXqV4uPLJDBS8bV0zTC	0
36	gandalf@middleearth.ca	$2b$10$vypJPR36jRrM45r8hcJqr.h72LDxio9652aiS6Mi9pr/fDDH9.2tG	0
37	asdf@gmail.com	$2b$10$LUztKoLUVHBf0P0CdrEvxuVEZPjQE3POP1TqJM/RA5HOrDrqdR.DS	0
38	chcchuksng@yahoo.com	$2b$10$aCowTcLBaqYJtCTL5czv9uzuX7RKzCr5wcz9sh75GDE0xBYCZzgNK	0
39	b@msn.com	$2b$10$rL6.Dlkcoe3rX.DqTqYVxeF5YRRoC7ClFUruw9.JdJXL/huRbRaGa	0
40	database@table.com	$2b$10$5BBPW3HD71j/JD5OV0aJ2ONxfagWmg/NOlIei8hRtCuq9azmaKgbe	0
41	donthephan@gmail.com	$2b$10$gjILSvgl.sDFGsM2I2a5guUgvVMV3jEUm0Vu.C3UrOHD8XCHQ.uGO	0
42	mdever@live.ca	$2b$10$EVzADftzVf24mKvp90iToOX4Kf9503bBJntx0QdK7y4/rWaLJOUIy	0
43	helllo@ello	$2b$10$57ogT565G2L1e9jEFyAcIeh07s9/fXwTG6FELU3EXOkB3mmhA2U9W	0
44	hello@hello	$2b$10$D/KJ0wZ2zNbLglftkM/XRep70vMh8rrAMBcKGiySZkuRPm3XGipO6	0
45	eight@8.com	$2b$10$HOaqeBsa6Q6ssqTGVOgfKueOqupE4Bx0AfmI5fmx9DwNfHji7Fbym	0
\.


--
-- Name: days_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.days_id_seq', 25, true);


--
-- Name: objectives_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.objectives_id_seq', 103, true);


--
-- Name: understandings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.understandings_id_seq', 186, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 45, true);


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
-- Name: understandings understandings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.understandings
    ADD CONSTRAINT understandings_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: understandings fk_objective; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.understandings
    ADD CONSTRAINT fk_objective FOREIGN KEY (objective_id) REFERENCES public.objectives(id);


--
-- Name: understandings fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.understandings
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

