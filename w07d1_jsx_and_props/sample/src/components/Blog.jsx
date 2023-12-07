function Blog(props) {

	const body = props.body;
	const title = props.title;

	return (
		<div className="blog">
			<h1>{ title }</h1>
			<p>{ body }</p>
		</div>
	);
}

export default Blog;