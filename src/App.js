import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Registration from './Components/Registration/Registration';
import NotPage from './Components/NotPage/NotPage';
import Details from './Components/Details/Details';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/SignIn/PrivateRoute/PrivateRoute';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Schedule from './Components/Schedule/Schedule';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>

            <PrivateRoute exact path="/schedule">
              <Schedule></Schedule>
            </PrivateRoute>

            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <Route path="*">
              <NotPage></NotPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
