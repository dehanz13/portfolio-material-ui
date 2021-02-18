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
	Fab } from '@material-ui/core';
// import { Link as Links } from 'react-router-dom';
import { Route, Link as Links} from 'react-router-dom'

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'
import { KeyboardArrowUp } from '@material-ui/icons';

import SideDrawer from './SideDrawer';
import HideOnScroll from './HideOnScroll';
import BackToTop from './BackToTop';
import BlogPage from '../pages/BlogPage';

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
		// fontWeight: 500,
		// fontFamily: 'Nunito',
		// fontSize: '2rem'
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
		color: '#5AFF3D',
		fontSize: '4.5rem',
	}
}));
const navLinks = [
	{ title: 'Blog', path: 'blog-posts'},
	{ title: 'Project', path: 'projects'},
	{ title: 'About', path: '/about'},
	{ title: 'Contact', path: '/contact'},
]
const Header = () => {
	const classes = useStyles();
	const [ checked, setChecked ] = useState(false);
	useEffect(() => {
		setChecked(true)
		
	})
	return(
		<div className={classes.root} id='header'>
			<HideOnScroll>
				<AppBar className={classes.appbar} elevation={0} position="fixed">
					<Toolbar className={classes.appbarWrapper}>
						<Container className={classes.navbarDisplayFlex}>
							<Link className={classes.appbarTitle} href="/">
								<h1>
									Danniel<span className={classes.colorText}> Hansel</span>
								</h1>
							</Link>
							<Hidden smDown>
								<List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
									{/* <li><a className={classes.linkText} href="/BlogPage">BLOG</a></li>
									<li><Links to='/blogs' >BLOGS</Links></li> */}
									{navLinks.map(({ title, path }) => (
										// <li><a href={path} key={title} className={classes.linkText} >
												<li><a href={path} key={title} className={classes.linkText} >
													<Scroll to={path} smooth={true}>
														<ListItem button >
															<ListItemText primary={title}/>
														</ListItem>
													</Scroll>
												</a></li>
									))}
								</List>
								{/* <Route path='/blogs'><BlogPage /></Route> */}
								{/* <Button  to='/blog' component={Links} className={classes.navButtons} value="blog">
									Blogs
								</Button>
								<Button  href='/' component={Links} className={classes.navButtons}>
									Projects
								</Button>
								<Button  href='/' component={Links} className={classes.navButtons}>
									About
								</Button>
								<Button  href='/' component={Links} className={classes.navButtons}>
									Contact
								</Button> */}
							</Hidden>
							<Hidden mdUp>
								<SideDrawer navLinks={navLinks}/>
							</Hidden>
						</Container>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
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
export default Header;