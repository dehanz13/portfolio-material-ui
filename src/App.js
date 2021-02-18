import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom'

import Header from './components/Header';
import Post from './components/Post';
import Project from './components/Project';
import BlogPage from './pages/BlogPage';

import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));
export default function App() {
  const classes = useStyles();
  return(
    // <Router>
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      {/* <nav>
        <li>
          <Link to='/blogs'>BLOGSS</Link>
        </li>
      </nav>
      <Switch>
        <Route exact path='/'></Route>
        <Route path='/blogs'><BlogPage /></Route>
      </Switch> */}
      
        {/* <Switch> */}
          {/* <Route path='/' exact/> */}
          {/* <Route path='/blogs'>
            <BlogPage />
          </Route> */}
          {/* <Route path='/blogs' component={BlogPage}/> */}
        {/* </Switch> */}

      <Post />
      <Project />
    </div>
    // </Router>
  );
}
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
