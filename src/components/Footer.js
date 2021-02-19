import React from 'react';
import { 
	makeStyles, 
	BottomNavigation, 
	BottomNavigationAction, 
} from '@material-ui/core';
import { 
	Facebook, 
	Twitter, 
	Instagram, 
	LinkedIn, 
	GitHub 
} from '@material-ui/icons';

const useStyles = makeStyles({
	bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
	const classes = useStyles();
	return(
		<BottomNavigation className={classes.bottomNavContainer}>
			<BottomNavigationAction icon={<Facebook />} className={classes.root}/>
			<BottomNavigationAction icon={<Twitter />} className={classes.root} />
			<BottomNavigationAction icon={<Instagram />} className={classes.root}/>
			<BottomNavigationAction icon={<GitHub />} className={classes.root} />
		</BottomNavigation>
	)
}
export default Footer;