import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import Schedule from './pages/Schedule';
import Organization from './pages/Organization';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Navbar} />
        <Route exact path='/schedule' component={Navbar} />
        <Route exact path='/orgnization' component={Navbar} />
        <Route exact path='/login' component={Navbar} />
        <Route exact path='/register' component={Navbar} />
        <Switch>
          <Route exact path='/'>
            <Index />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/schedule'>
            <Schedule />
          </Route>
          <Route exact path='/organization'>
            <Organization />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Route exact path='/' component={Footer} />
        <Route exact path='/schedule' component={Footer} />
        <Route exact path='/orgnization' component={Footer} />
        <Route exact path='/login' component={Footer} />
        <Route exact path='/register' component={Footer} />
      </Router>
    </div>
  );
}

export default App;
