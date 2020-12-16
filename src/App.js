
import './App.css';
import { Route, Switch } from "react-router-dom";
import Nav from "./components/navBar/Nav";
import Home from "./components/home/home";
function App() {
  return (
    <div className="App">
  <Nav></Nav>

  <Switch>

    <Route exact from="/" render={props => <Home />} />

    <Route exact path="/contact" render={props => <Home {...props} />}  />
</Switch>

    </div>
  );
}

export default App;
