import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'
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
	Hidden, } from '@material-ui/core';

import SideDrawer from './SideDrawer';
import HideOnScroll from './HideOnScroll';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		fontFamily: 'Nunito',
	},
	appbar: {
		background: 'none',
	},
	colorText: {
		color: '#5ADD3D',
	},
	appbarTitle: {
		flexGrow: '1',
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
		color: '#fff',
		fontWeight: '400',
		fontSize: '1rem',
	},
	container: {
		textAlign: 'center',
	},
	goDown: {
		color: '#5AFF3D',
		fontSize: '4.5rem',
	}
}));
export default function Header() {
	const classes = useStyles();
	const [ checked, setChecked ] = useState(false);
	useEffect(() => {
		setChecked(true);
	})
	const navLinks = [
		{ title: `Blog`, path: `/blog`},
		{ title: `Project`, path: `/project`},
		{ title: `About`, path: `/about`},
		{ title: `Contact`, path: `/contact`},
	]
	return(
		<div className={classes.root} id='header'>
			<HideOnScroll>
			<AppBar className={classes.appbar} elevation={0}>
				<Toolbar className={classes.appbarWrapper}>
					<Container className={classes.navbarDisplayFlex}>
						<Link className={classes.appbarTitle} href="/">
							<h1>
								Danniel<span className={classes.colorText}> Hansel</span>
							</h1>
						</Link>
						<Hidden smDown>
							<List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
								{navLinks.map(({ title, path }) => (
									<a href={path} key={title} className={classes.linkText}>
										<ListItem button>
											<ListItemText primary={title} />
										</ListItem>
									</a>
								))}
							</List>
						</Hidden>
						<Hidden mdUp>
							<SideDrawer navLinks={navLinks}/>
						</Hidden>
						{/* <IconButton>
							<SortIcon className={classes.icon} />
						</IconButton> */}
					</Container>
				</Toolbar>
			</AppBar>
			</HideOnScroll>
			<Collapse 
				in={checked} 
				{...(checked ? { timeout: 1000 } : {})}
				collapsedHeight={50}
				>
				<div className={classes.container}>
					<h1 className={classes.title}>
						Welcome to <br /> My
						<span className={classes.colorText}>Website!</span>
					</h1>
					<Scroll to='blog-posts' smooth={true}>
						<IconButton>
							<ExpandMoreIcon className={classes.goDown}/>
						</IconButton>
					</Scroll>
				</div>
			</Collapse>
		</div>
	);
}