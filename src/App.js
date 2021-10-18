import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Registration from './Components/Registration/Registration';
import SignIn from './Components/SignIn/SignIn';
import NotPage from './Components/NotPage/NotPage';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/logIn">
            <SignIn></SignIn>
          </Route>
          <Route path="/details/:serviceId">
            <Details></Details>
          </Route>

          <Route path="*">
            <NotPage></NotPage>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
