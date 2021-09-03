import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/configurestore';
import Navbar from './components/navbar';
import Books from './components/pages/books';
import Categories from './components/pages/categories';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
