import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { 
	Drawer, 
	Box, 
	Container,
	AppBar, 
	Toolbar,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Avatar,
	Divider,
	Typography,
	makeStyles,
	Hidden,
	Link as Links,
} from '@material-ui/core';
import { 
	ArrowBack,
	AssignmentInd,
	Home,
	Apps,
	ContactMail,
	Menu,
} from '@material-ui/icons';

import avatar from '../images/avatar.png';
import Footer from './Footer';
import SideDrawer from './SideDrawer';
import HideOnScroll from './HideOnScroll';
import BackToTop from './BackToTop';

const useStyles = makeStyles((theme) => ({
	appbar: {
		// background: '#222',
		// margin: 0,
		background: 'none',
		fontFamily: 'Nunito',
	},
	appbarTitle: {
		flexGrow: '1',
		// display: 'flex',
		textDecoration: 'none'
	},
	appbarWrapper: {
		width: '80%',
		margin: '0 auto',
	},
	colorText: {
		color: '#5ADD3D',
	},
	navDisplayFlex: {
		display: "flex",
		justifyContent: "space-between",
	},
	arrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
	},
	list:{
		width: 250
	},
}));

const menuItems = [
	{ listIcon: <Home />, listText: "Home", listPath: '/'},
	{ listIcon: <AssignmentInd />, listText: "About", listPath: '/about'},
	{ listIcon: <Apps />, listText: "Blog", listPath: '/blog'},
	{ listIcon: <Apps />, listText: "Project", listPath: '/project'},
	{ listIcon: <ContactMail />, listText: "Contact", listPath: '/contact'},
];

const navbarItems = [
	{ listText: "About", listPath: '/about'},
	{ listText: "Blog", listPath: '/blog'},
	{ listText: "Project", listPath: '/project'},
	{ listText: "Contact", listPath: '/contact'},
]

const Navbar = () => {
	const [ open, setOpen ] = useState(false);
	const [ state, setState ] = useState({ right: false })
	const classes = useStyles();
	useEffect(() => {
		setOpen(true)
	})

	const toggleDrawer = (anchor, open) => event => {
		if (
			event.type === 'Keydown' &&
			(event.type === 'Tab' || event.key === 'Shift')
		) {
			return
		}
		setState({ [anchor]: open })
	}

	const sideList = () => (
		<Box className={classes.menuSliderContainer} component="div">
			<Avatar className={classes.avatar} src={avatar} alt="Danniel Hansel" />
			<Divider />
			<List>
				{menuItems.map((item, i) => (
					<ListItem
						button
						key={i}
						className={classes.listItem}
						onClick={() => setOpen(false)}
						component={Link}
						to={item.listPath}
					>
						<ListItemIcon className={classes.listItem}>
							{item.listIcon}
						</ListItemIcon>
						<ListItemText primary = {item.listText} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	const sideDrawerList = anchor => (
		<div
			className={classes.list}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			{sideList()}
		</div>
	)

	return(
		<React.Fragment>
			<HideOnScroll>
				{/* <Box component='nav'> */}
					<AppBar position='fixed' className={classes.appbar} elevation={0}>
						<Toolbar className={classes.appbarWrapper}>
							<Container className={classes.navDisplayFlex}>
								<Links className={classes.appbarTitle} href="/">
									<h1>
										Danniel<span className={classes.colorText}> Hansel</span>
									</h1>
								</Links>
								<List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
									{navbarItems.map((item, i) => (
										<ListItem
											button
											key={i}
											className={classes.colorText}
											component={Link}
											to={item.listPath}
										>
											<ListItemText primary = {item.listText} />
										</ListItem>
									))}
								</List>
								{/* <Hidden mdUp> */}
									<IconButton
										edge='start'
										aria-label='menu'
										onClick={toggleDrawer('right', true)}
									>
										<Menu fontSize='large' style={{ color: 'white' }}/>
									</IconButton>
								{/* </Hidden> */}
								{/* <Hidden smDown> */}
									<Drawer
										anchor='right'
										open={state.right}
										onOpen={toggleDrawer('right', true)}
										onClose={toggleDrawer('right', false)}
									>
											{sideDrawerList("right")}
											<Footer />
									</Drawer>
								{/* </Hidden> */}
							</Container>
						</Toolbar>
					</AppBar>
				{/* </Box> */}
			</HideOnScroll>
		</React.Fragment>
	)
};
export default Navbar;