import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom'

import Home from './components';
import Header from './components/Header';
import About from './components/About';
import Post from './components/Post';
import Project from './components/Project';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));
function App() {
  const classes = useStyles();
  return(
    <React.Fragment>
      <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/blogs' component={Post} />
        <Route exact path='/projects' component={Project} />
      </Switch>
      </div>
    </React.Fragment>
  );
}
export default App;

// This is my original App.js (Below)
// export default function App() {
//   const classes = useStyles();
//   return(
//     <div className={classes.root}>
//       <CssBaseline />
//       <Header />
//       <Post />
//       <Project />
//     </div>
//   );
// }
