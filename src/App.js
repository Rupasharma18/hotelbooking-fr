import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BookForm from './components/bookFrom'
import Booklist from './components/bookinglist';
import './App.css'
import history from '../src/history';

function App() {
  console.log(history, "history")
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path='/booklist' component={Booklist}></Route>
          <Route exact path="/">
          < BookForm/>
          </Route>
        </Switch>
      </div>
    </Router>
   

  );
}

export default App;
