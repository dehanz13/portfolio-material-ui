import React from 'react';
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
	Typography,
} from '@material-ui/core';

import project1 from '../images/html-css-js-lg.jpg';
import project2 from "../images/html-css-javascript.jpg";
import project3 from '../images/javascript-fullstack.jpg';
import project4 from '../images/mern-stack.jpg';
import project5 from '../images/react-redux.jpg';
import project6 from '../images/react.png';
// import projects from '../static/projects';

const projects = [
	{
		title: "Project 1",
		description: "This is a sample of a portfolio site that I built using ReactJs, GatsbyJs, NodeJs, Netlify.",
		imageUrl: project1,
		direction: 'left',
		time: '1500',
	},
	{
		title: "Project 2",
		description: "This is a sample of a portfolio site that I built using ReactJs, GatsbyJs, NodeJs, Netlify.",
		imageUrl: project2,
		direction: 'right',
		time: '1500',
	},
	{
		title: "Project 3",
		description: "This is a sample of a portfolio site that I built using ReactJs, GatsbyJs, NodeJs, Netlify.",
		imageUrl: project3,
		direction: 'left',
		time: '1500',
	},
	{
		title: "Project 4",
		description: "This is a sample of a portfolio site that I built using ReactJs, GatsbyJs, NodeJs, Netlify.",
		imageUrl: project4,
		direction: 'right',
		time: '1500',
	},
	{
		title: "Project 5",
		description: "This is a sample of a portfolio site that I built using ReactJs, GatsbyJs, NodeJs, Netlify.",
		imageUrl: project5,
		direction: 'left',
		time: '1500',
	},
	{
		title: "Project 6",
		description: "This is a sample of a portfolio site that I built using ReactJs, GatsbyJs, NodeJs, Netlify.",
		imageUrl: project6,
		direction: 'right',
		time: '1500',
	},
]

const useStyles = makeStyles((theme) => ({
	mainContainer: {
    // background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 600,
    margin: "3rem auto",
	},
	root: {
		maxWidth: 645,
		// minWidth: 'auto',
		background: 'rgba(0,0,0,0.5)',
		margin: '20px',
		flexGrow: 1,
		padding: theme.spacing(2)
  },
  media: {
    height: 300,
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
}));

const ProjectPage = () => {
	const classes = useStyles();
	return(
		<Box component='div' className={classes.mainContainer}>
			<Grid container justify='center'>
				{projects.map((project, i) => (
					<Grid item xs={12} sm={8} md={4} key={i}>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia 
									component='img'
									alt='Project 1'
									height='140'
									image={project.imageUrl}
									className={classes.media}
								/>
								<CardContent>
									<Typography 
										variant='h5' 
										gutterBottom
										component='h2'
										className={classes.title}
									>
										{project.title}
									</Typography>
									<Typography 
										variant='body2' 
										color='textSecondary'
										component='p'
										className={classes.desc}
									>
										{project.description}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button variant='contained' size='small' color='primary' className={classes.button}>
									Share
								</Button>
								<Button variant='contained' size='small' color='primary' className={classes.button}>
									Source
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
export default ProjectPage;