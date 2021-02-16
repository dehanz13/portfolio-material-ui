import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ImageCard from './ImageCard';
import blogs from '../static/blogs';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('md')]:{
			flexDirection: 'column',
		}
	}
}));
export default function Header() {
	const classes = useStyles();
	const checked = useWindowPosition('header');

	return(
		<div className={classes.root} id="blog-posts">
			<ImageCard blogPost={blogs[0]} checked={checked}/>
			<ImageCard blogPost={blogs[1]} checked={checked}/>
		</div>
	);
}