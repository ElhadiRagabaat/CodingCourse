import React from 'react';
import './App.css';
import ResponsiveDrawer from './components/ResposiveDrwer';
import Lessons from './components/Lessons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About';


function App() {
  return (
<Router>
<div>
<ResponsiveDrawer/>
<Switch>
  <Route exact path="/">
<About/>
  </Route>
  <Route exact path="/lessons">
<Lessons/>
  </Route>
</Switch>


</div>
   
</Router>
  );
}

export default App;
