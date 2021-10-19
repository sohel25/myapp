import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Register from './pages/register/Register';
import Home from './pages/register/home/Home';
import Header from './componant/header/Header';
import Login from './pages/register/login/Login';

function App() {
  return (
    <>
   
    <Router>
       <Header />
      <Switch>
        {/* <Route exact path="/">
           <Home />
        </Route> */}
        {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route> */}
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register">
           <Register />
        </Route>
        {/* <Route path="/profile/:username">
          <Profile />
        </Route> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
