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
} from '@material-ui/core';
import { 
	ArrowBack,
	AssignmentInd,
	Home,
	Apps,
	ContactMail,
	ExpandMoreIcon,
	Menu,
} from '@material-ui/icons';

import avatar from '../images/avatar.png';
import Footer from './Footer';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles((theme) => ({
	appbar: {
		// background: '#222',
		// margin: 0,
		background: 'none',
	},
	appbarTitle: {
		flexGrow: '1',
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

const Navbar = () => {
	const [ open, setOpen ] = useState(false);
	const [ state, setState ] = useState({ right: false })
	const classes = useStyles();
	useEffect(() => {
		setOpen(true)
	})

	const toggleDrawer = (anchor, open) => event => {
		if (
			event.type === 'keydown' &&
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
		</div>
	)

	return(
		<React.Fragment>
			<Box component='nav'>
				<AppBar position='fixed' className={classes.appbar} elevation={0}>
					<Toolbar className={classes.appbarWrapper}>
						<Container className={classes.navbarDisplayFlex}>
							<Link className={classes.appbarTitle} href="/">
								<h1>
									Danniel<span className={classes.colorText}> Hansel</span>
								</h1>
							</Link>
							{/* <IconButton onClick={() => setOpen(true)}>
								<ArrowBack className={classes.arrow} />
							</IconButton> */}
							{/* <Typography variant="h5" className={classes.title}>
								Danniel Hansel
							</Typography> */}
							<IconButton
								edge='start'
								aria-label='menu'
								onClick={toggleDrawer('right', true)}
							>
								<Menu fontSize='large' style={{ color: 'white' }}/>
							</IconButton>
							<Drawer 
								// open={open} 
								// anchor="right" 
								// onClose={() => setOpen(false)}>
								anchor='right'
								open={state.right}
								onOpen={toggleDrawer('right', true)}
								onClose={toggleDrawer('right', false)}
							>
									{sideDrawerList("right")}
									<Footer />
							</Drawer>
						</Container>
					</Toolbar>
				</AppBar>
			</Box>
			{/* <SideDrawer navLinks={menuItems}/> */}
			
		</React.Fragment>
	)
};
export default Navbar;