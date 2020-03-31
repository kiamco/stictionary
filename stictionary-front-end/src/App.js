import React from 'react';
import './App.css';
import LoginPage from './pageviews/login.js';
import SignUpPage from './pageviews/sigup.js';
import { Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Footer from './components/footer.js';
import NavBar from './components/navbar.js';

const App = (props) => {
  console.log(props.history);

  return (
    <div className="App">
      <Route  component={NavBar} />
      <Route exact path='/login' render={(props) => <LoginPage {...props}/>} />
      <Route  exact path='/signup' render={(props) => <SignUpPage {...props}/>}/>
      <Box mt={5}>
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
