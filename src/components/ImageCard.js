import React from 'react';
import { Collapse, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
		maxWidth: 645,
		// minWidth: 'auto',
		background: 'rgba(0,0,0,0.5)',
		margin: '20px',
		flexGrow: 1,
		padding: theme.spacing(2)
  },
  media: {
    height: 440,
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

export default function ImageCard({ blogPost, checked }) {
  const classes = useStyles();
  return (
		<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={blogPost.imageUrl}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography 
							gutterBottom 
							variant="h5" 
							component="h2"
							className={classes.title}
						>
							{blogPost.title}
						</Typography>
						<Typography 
							variant="body2" 
							color="textSecondary" 
							component="p"
							className={classes.desc}
						>
							{blogPost.description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button variant="contained" color="inherit" className={classes.button} >
						Share
					</Button>
					<Button variant="contained"  color="inherit" className={classes.button}>
						Read More ...
					</Button>
				</CardActions>
			</Card>
		</Collapse>
  );
}