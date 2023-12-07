import './App.css';
import BlogList from './components/BlogList';

// server.js <--- pure javascript to hold the business logic for your routes, back-end

// views/home.ejs <----- MOSTLY HTML with little 'scriptlets' of Javascript inside <%= %>
// server-side rendering

function App() {

	const blogs = [
		{title: "Title 1", body: "The quick brown fox jumps over the lazy dogs' back."},
		{title: "Title 2", body: "This is different blog text. This is different blog text. This is different blog text. This is different blog text. "},
		{title: "Title Three", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia. "}
	];

  return (
    <div className="App">
			<h1>App Title</h1>
			<BlogList blogData={ blogs } />
    </div>
  );
}

export default App;
