import { 
	AppBar, 
	IconButton, 
	Toolbar, 
	Icon, 
	Collapse, 
	Typography, 
	Link,
	Button,
	List,
	ListItem,
	ListItemText, 
	Container, 
	Menu, 
	Hidden, 
	Fab,
	Box,
	Grid,
	Avatar,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'
import { KeyboardArrowUp } from '@material-ui/icons';
import Typed from 'react-typed';

import BackToTop from './BackToTop';
import avatar from '../images/avatar.png';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		fontFamily: 'Nunito',
		textDecoration: 'none',
	},
	appbar: {
		background: 'none',
	},
	colorText: {
		color: '#5ADD3D',
	},
	appbarTitle: {
		flexGrow: '1',
		textDecoration: 'none',
	},
	appbarWrapper: {
		width: '80%',
		margin: '0 auto',
	},
	icon: {
		color: '#fff',
		fontSize: '2.5rem',
	},
	title: {
		color: '#fff',
		fontSize: '4.5rem',
	},
	navBarTabs: {
		color: '#fff',
		fontSize: '1.5rem',
		alignItems: "center",
		display: "flex",
		justifyContent: "center",
	},
	navDisplayFlex: {
		display: "flex",
		justifyContent: "space-between",
	},
	navbarDisplayFlex: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	linkText: {
		textDecoration: 'none',
		textTransform: 'uppercase',
		color: '#5ADD3D',
	},
	navButtons: {
		color: '#5AFF3D',
		fontWeight: 500,
		fontFamily: 'Nunito',
		fontSize: '1.5rem'
	},
	container: {
		textAlign: 'center',
	},
	goDown: {
		// color: '#5AFF3D',
		color: 'tomato',
		fontSize: '4.5rem',
	},
	avatar: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		margin: theme.spacing(1),
	},
	headerTitle: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
	const classes = useStyles();
	const [ checked, setChecked ] = useState(false);
	useEffect(() => {
		setChecked(true)
	})
	return(
		<div className={classes.root} id='header'>
			<Toolbar id="back-to-top-anchor" />
			<BackToTop>
				<Fab color="secondary" size="large" aria-label="scroll back to top" >
					<KeyboardArrowUp />
				</Fab>
			</BackToTop>			
			<Collapse 
				in={checked} 
				{...(checked ? { timeout: 1000 } : {})}
				collapsedHeight={50}
			>
				<Box className={classes.typedContainer}>
					<Grid container justify="center">
						<Avatar className={classes.avatar} src={avatar} alt="Danniel Hansel" />
					</Grid>
					<Typography className={classes.headerTitle} variant="h4">
						<Typed strings={["Danniel Hansel"]} typeSpeed={40} />
					</Typography>
					<Typography classesName={classes.subtitle} variant="h5">
						<Typed 
							strings={[
								"FRONTEND DEVELOPER",
								"NATIVE APP DEVELOPER",
								"DESIGNER",
								"TRAVELER",
							]} 
							typeSpeed={40}
							backSpeed={50}
							loop />
					</Typography>
					<Scroll to='blog-posts' smooth={true}>
						<IconButton>
							<ExpandMoreIcon className={classes.goDown}/>
						</IconButton>
					</Scroll>
				</Box>
				{/* <div className={classes.container}>
					<h1 className={classes.title}>
						Welcome to <br /> My
						<span className={classes.colorText}>Website!</span>
					</h1>
				</div> */}
			</Collapse>
		</div>
	);
}
export default Header;