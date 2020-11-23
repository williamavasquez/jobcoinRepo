import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import Login from './pages/login'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path = '/' render = {() => <Login/>} />
        {/* <Route path = '/profile/:username' component = {routerProps => this.renderProfile(routerProps)}/>
        <Route component = {NotFound} /> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
