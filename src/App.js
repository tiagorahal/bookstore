import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


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