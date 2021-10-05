import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowDetails from './Components/ShowDetails/ShowDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/show/:detailsId'>
          <ShowDetails></ShowDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
