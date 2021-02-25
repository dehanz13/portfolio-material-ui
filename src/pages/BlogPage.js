import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
	Box,
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Container,
	Typography,
} from '@material-ui/core'

import Post from '../components/Post';

const blogPosts = [
	{
		title: 'First Blog Post',
		description: 'This is my first blog post about myself!',
		imageUrl: process.env.PUBLIC_URL + '/assets/island1.jpg',
		direction: 'left',
		time: '1500',
	},
	{
		title: 'Second Blog Post',
		description: 'This is my second blog post about my journey!',
		imageUrl: process.env.PUBLIC_URL + '/assets/island2.jpg',
		direction: 'right',
		time: '1500',
	},
	{
		title: 'Third Blog Post',
		description: 'This is my first blog post about myself!',
		imageUrl: process.env.PUBLIC_URL + '/assets/island1.jpg',
		direction: 'left',
		time: '1500',
	},
]

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 600,
		// minWidth: 'auto',
		background: 'rgba(0,0,0,0.5)',
		// margin: '20px',
		margin: '3rem auto',
		flexGrow: 1,
		padding: theme.spacing(2),
		[theme.breakpoints.down('md')]:{
			flexDirection: 'column',
			maxWidth: 300,
		}
		
	},
	mainContainer: {
    // background: "#233",
    height: "100%",
  },
  media: {
		height: 300,
		[theme.breakpoints.down('md')]:{
			height: 200,
		}
	},
	title: {
		fontFamily: 'Nunito',
		fontWeight: 'bold',
		fontSize: '2rem',
		color: '#fff',
	},
	desc: {
		fontFamily: 'Nunito',
		fontSize: '1.1rem',
		color: '#ddd',
	},
	button: {
		margin: theme.spacing(1),
	},
	blogsContainer: {
		// paddingLeft: '40px',
		// paddingRight: '40px',
		paddingTop: theme.spacing(3)
	},
	blogsTitle: {
		paddingBottom: theme.spacing(3)
	},
}));
const BlogPage = () => {
		const classes = useStyles();
		return(
			<div className={classes.mainContainer}>
				<Container maxWidth='xl' className={classes.blogsContainer}>
					<Typography variant='h2' className={classes.blogsTitle}>
						<Box fontWeight='fontWeightBold' m={2} textAlign='center' fontFamily='Nunito' color='white'>
							Blogs
						</Box>
					</Typography>
					<Grid container justify='center'>
				{blogPosts.map((blog, i) => (
					<Grid item xs={12} sm={8} md={4} key={i}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia 
									component='img'
									alt='Blog 1'
									height='140'
									image={blog.imageUrl}
									className={classes.media}
								/>
								<CardContent>
									<Typography 
										variant='h5' 
										gutterBottom
										component='h2'
										className={classes.title}
									>
										{blog.title}
									</Typography>
									<Typography 
										variant='body2' 
										color='textSecondary'
										component='p'
										className={classes.desc}
									>
										{blog.description}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
							<Button variant='contained' size='small' color='secondary' className={classes.button}>
									Read more...
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
				</Container>
			</div>
		);
	
	
}
export default BlogPage;