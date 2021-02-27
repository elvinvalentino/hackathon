import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Index from './pages/Index';
import Schedule from './pages/Schedule';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Index />
          </Route>
          <Route exact path='/schedule'>
            <Schedule />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
