import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';

import Books from './components/pages/books';
import Categories from './components/pages/categories';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <Books />
        </Route>

      </Switch>
    </Router>
  </>
);

export default App;
