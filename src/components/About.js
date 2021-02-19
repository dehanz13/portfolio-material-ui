import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, Box } from '@material-ui/core'

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
}));
export default function Header() {
	const classes = useStyles();
	return(
		<div className={classes.root} id='about'>
			<Container>
				<Typography>
					<Box>
						About Me
					</Box>
				</Typography>
				<Grid>
					<Grid item>
						
					</Grid>
				</Grid>
			</Container>

		</div>
	);
}