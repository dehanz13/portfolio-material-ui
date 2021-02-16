import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Icon, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'

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
		margin: '0 auto'
	},
	icon: {
		color: '#fff',
		fontSize: '2rem',
	},
	title: {
		color: '#fff',
		fontSize: '4.5rem',
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
	return(
		<div className={classes.root} id='header'>
			<AppBar className={classes.appbar} elevation={0}>
				<Toolbar className={classes.appbarWrapper}>
					<h1 className={classes.appbarTitle}>
						Hi<span className={classes.colorText}> there!</span>
					</h1>
					<IconButton>
						<SortIcon className={classes.icon} />
					</IconButton>
				</Toolbar>
			</AppBar>
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