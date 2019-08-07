import React from 'react';
import { Provider } from './context';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Header from './components/layout/Header';
import AddContact from './components/contacts/addContact1';
import EditContact from './components/contacts/EditContact';
import Contacts from './components/contacts/Contacts';
import About from './components/pages/About.js';
import NotFound from './components/pages/NotFound.js';
import Test from './components/test/Test.js';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// import addContact from './components/contacts/addContact';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/add" component={AddContact} />
              <Route exact path="/edit/:id" component={EditContact} />

              <Route exact path="/about/:id" component={About}></Route>
              <Route exact path="/test" component={Test}></Route>
              <Route exact path="" component={NotFound}></Route>
              
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
