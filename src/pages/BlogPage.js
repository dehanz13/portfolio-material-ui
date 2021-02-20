import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Post from '../components/Post';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
    // background: "#233",
    height: "100%",
  },
}));
const BlogPage = () => {
		const classes = useStyles();
		return(
			<h1>TEST HERE</h1>
		);
	
	
}
export default BlogPage;