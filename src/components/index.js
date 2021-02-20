import React from 'react';
import Header from './Header';
import Post from './Post';
import Project from './Project';

const Home = () => {
	return(
		<React.Fragment>
			<Header />
			<Post />
			<Project />
		</React.Fragment>
	);
};
export default Home;