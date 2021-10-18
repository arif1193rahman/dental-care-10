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
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/SignIn/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/logIn">
              <SignIn></SignIn>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <Route path="*">
              <NotPage></NotPage>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
