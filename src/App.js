import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Login from './pages/login'
import Profile from './pages/profile'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={(routerProps) => <Login {...routerProps} />}
          />
          <Route
            path='/profile/:username'
            component={(routerProps) => <Profile {...routerProps} />}
          />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
