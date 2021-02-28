import * as React from 'react';
import { useState } from 'react';
import { 
	IconButton, 
	List, 
	ListItem, 
	ListItemText,
	Drawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	list:{
		width: 250
	},
	linkText: {
		textDecoration: "none",
		color: "#5ADD3D",
		fontFamily: 'sans-serif',
	},
	sideDrawerFlex: {
		display: 'grid',
		justifyContent: 'space-between',
		backgroundColor: '#2B7A78',
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
}));
const SideDrawer = ({ navLinks }) => {
	const classes = useStyles();
	const [ state, setState ] = useState({ right: false });

	const toggleDrawer = (anchor, open) => event => {
		if (
			event.type === "keydown" &&
			(event.type === "Tab" || event.key === "Shift")
		) {
			return
		}
		setState({ [anchor]: open}) //This anchor is MUI props to decide the drawer slide in from top, left, right, or bottom.
	}

	const sideDrawerList = anchor => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
			>
			<List component="nav" className={classes.sideDrawerFlex}>
				{navLinks.map(({ title, path }) => (
					<a href={path} key={title} className={classes.linkText} >
						<ListItem button >
							<ListItemText primary={title} />
						</ListItem>
					</a>
				))}
			</List>
		</div>
	);
	return(
		<React.Fragment>
			<IconButton 
				edge="start" 
				aria-label="menu"
				onClick={toggleDrawer("right", true)}
				>
				<Menu fontSize="large" style={{ color: `white` }}/>
			</IconButton>
			<Drawer
				anchor="right"
				open={state.right}
				onOpen={toggleDrawer("right", true)}
				onClose={toggleDrawer("right", false)}
			>
				{sideDrawerList("right")}
			</Drawer>
		</React.Fragment>
	)
}

export default SideDrawer;