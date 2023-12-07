import Blog from './Blog';

const BlogList = (props) => {

	// business logic
	const displayHelper = () => {
		return props.blogData.map((item) => {
			return <Blog title={ item.title } body={ item.body } /> 
		});
	};

	return (
		<div>
			<h1>blog list</h1>
			{ displayHelper() }
		</div>
	);

};

export default BlogList;