import React from 'react';
import { Collapse } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
		maxWidth: 645,
		background: 'rgba(0,0,0,0.5)',
		margin: '20px'
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
});

export default function ImageCard({blogPost, checked}) {
  const classes = useStyles();

  return (
		<Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
			<Card className={classes.root}>
				{/* <CardActionArea> */}
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
				{/* </CardActionArea> */}
				{/* <CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
					<Button size="small" color="primary">
						Learn More
					</Button>
				</CardActions> */}
			</Card>
		</Collapse>
  );
}