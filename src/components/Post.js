import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Container, Typography } from '@material-ui/core'
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
	},
	blogsContainer: {
		// paddingLeft: '40px',
		// paddingRight: '40px',
		paddingTop: theme.spacing(3)
	},
	blogTitle: {
		paddingBottom: theme.spacing(3)
	},
}));
export default function Header() {
	const classes = useStyles();
	const checked = useWindowPosition('header');

	return(
		<div className={classes.root} id="blog-posts">
			<Container maxWidth="xl" className={classes.blogsContainer}>
				<Typography variant="h2" className={classes.blogsTitle}>
					<Box fontWeight="fontWeightBold" m={2} textAlign="center" fontFamily="Nunito" color="white">
						Blogs
					</Box>
				</Typography>
				<Grid container spacing={3} className={classes.gridContainer} >
					<Grid item xs={12} sm={6} md={4}>
						<ImageCard blogPost={blogs[0]} checked={checked}/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ImageCard blogPost={blogs[1]} checked={checked}/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ImageCard blogPost={blogs[2]} checked={checked}/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ImageCard blogPost={blogs[0]} checked={checked}/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ImageCard blogPost={blogs[1]} checked={checked}/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}