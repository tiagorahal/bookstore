import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header';
import BookStore from './components/bookstore';
import BookNew from './components/booknew';
import Categories from './components/categories';
import store from './redux/configurestore';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <BookStore />
          <BookNew />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
