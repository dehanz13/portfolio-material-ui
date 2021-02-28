import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom'

import Home from './components';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';

import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    // maxWidth: '100vw',
    // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg2.jpg'})`,
    backgroundColor: '#3AAFA9',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));
function App() {
  const classes = useStyles();
  return(
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blogs' component={BlogPage} />
          <Route exact path='/projects' component={ProjectPage} />
          <Route exact path='/contact' component={Contact} />
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
