import React from 'react';
import './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
