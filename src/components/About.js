import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
	Grid, 
	Container, 
	Typography, 
	Box, 
	CssBaseline,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('md')]:{
			flexDirection: 'column',
		},
		// width: '80%'
  },
  secondContainer: {
    padding: 8,
  },
	mainContainer: {
    // background: "#233",
    // marginTop: ,
		// background: "none",
		// minHeight: '30%',
		// maxWidth: 1500,
		// width: 1,
		// zIndex: 15,
		width: theme.spacing(100),
		margin: theme.spacing(0), 
    // top: "45%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // position: "absolute",
		maxWidth: '50vw',
  },
	heading: {
		color: 'tomato',
		padding: '3rem 0',
    textTransform: 'uppercase',
    fontFamily: 'Nunito',
	},
	subtitle1: {
    color: 'tan',
    fontFamily: 'Nunito',
	},
	subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
	timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
}));
const About = () => {
	const classes = useStyles();
	return(
		<React.Fragment>
			<div className={classes.root}>
				<Box component='header' className={classes.mainContainer}>
					<Typography variant='h3' align='center' className={classes.heading}>
						About me...
					</Typography>
					<Box component='div' >
						<Typography variant='h4' align='center' className={classes.subtitle1}>
							My name is Danniel Hansel and I am a Frontend Developer based in Dallas, Texas.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
							ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
							Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
							repudiandae, rerum necessitatibus nisi mollitia.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
							ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
							Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
							repudiandae, rerum necessitatibus nisi mollitia.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
							ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
							Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
							repudiandae, rerum necessitatibus nisi mollitia.
              
						</Typography>
					</Box>
				</Box>
			</div>
		</React.Fragment>
	);
};
export default About;