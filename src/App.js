import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// CSS
import './App.css';

import Home from './pages/Home';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className='App'>
      <h1 className='app-title'>React - Spring Boot</h1>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/person/:id' component={UserPage} />
      </Router>
    </div>
  );
}

export default App;
