import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, Box} from '@material-ui/core'
import ImageCard from './ImageCard';
import projects from '../static/projects';
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
		paddingTop: theme.spacing(3)
	},
	blogTitle: {
		paddingBottom: theme.spacing(3),
	},
}));
export default function Header() {
	const classes = useStyles();
	const checked = useWindowPosition('header');
	return(
		<div className={classes.root} id="projects">
			<Container maxWidth="xl" className={classes.blogsContainer}>
				<Typography variant="h2" className={classes.blogsTitle}>
					<Box fontWeight="fontWeightBold" m={2} textAlign="center" fontFamily="Nunito" color="white">
						Projects
					</Box>
				</Typography>
				<Grid container spacing={3} className={classes.gridContainer}>
					<Grid item xs={12} sm={6} md={4}>
						<ImageCard blogPost={projects[0]} checked={checked}/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ImageCard blogPost={projects[1]} checked={checked}/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ImageCard blogPost={projects[1]} checked={checked}/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ImageCard blogPost={projects[1]} checked={checked}/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<ImageCard blogPost={projects[0]} checked={checked}/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}