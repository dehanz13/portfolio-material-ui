import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
	Box,
	TextField,
	Typography,
	Grid,
	Button
} from '@material-ui/core';
import Send from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	contactContainer: {
		// background: "#233",
		// backgroundColor: "#6772e5",
		boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
		height: "100vh",
  },
  heading: {
		color: "#FEFFFF",
		fontFamily: 'Nunito',
    textAlign: "center",
    textTransform: "uppercase",
		marginBottom: "1rem",
		fontWeight: 700,
  },
  form: {
		// background: "#233",
		boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
		color: "#fff",
		fontFamily: 'Nunito',
  },
  button: {
    marginTop: "1rem",
    color: "#feffff",
		borderColor: "#DEF2F1",
		fontFamily: 'Nunito',
		fontSize: 25,
  },
  field: {
		// fontFamily: 'Nunito',
    margin: "1rem 0rem",
  },
}));
const InputField = withStyles({
	root: {
		'& label.Mui-focused':{
			color: '#2B7A78',
		},
		'& label': {
			color: '#2B7A78',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset':{
				borderColor: '#2B7A78',
			},
			'&:hover fieldset': {
				borderColor: '#2B7A78',
			},
			'&.Mui-focused fieldset': {
				color: '#fff',
				borderColor: '#2B7A78',
			},
		},
	},
})(TextField);

const Contact = () => {
	const classes = useStyles();
	return(
		<Box component='div' className={classes.contactContainer}>
			<Grid container justify='center'>
				<Box component='form' className={classes.form}>
					<Typography variant='h2' className={classes.heading}>
						Contact Me
					</Typography>
					<InputField 
						fullWidth={true}
						label='Name'
						variant='outlined'
						inputProps={{ className: classes.input}}
					/>
					<InputField 
						fullWidth={true}
						label='Email'
						variant='outlined'
						inputProps={{ className: classes.input}}
						className={classes.field}
					/>
					<InputField 
						fullWidth={true}
						label='Message'
						variant='outlined'
						multiline
						rows={4}
						inputProps={{ className: classes.input}}
					/>
					<Button
						variant='outlined'
						fullWidth={true}
						endIcon={<Send />}
						className={classes.button}
					>
						Submit
					</Button>
				</Box>
			</Grid>
		</Box>
	);
};
export default Contact;