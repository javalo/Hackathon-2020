
import './App.css';
import { Route, Switch } from "react-router-dom";
import Nav from "./components/navBar/Nav";
import Home from "./components/home/home";
import Message from "./components/message/Message";
import { makeStyles } from "@material-ui/core/styles";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'

const useStyles = makeStyles({
  container: {
    display: "flex",
  marginRight: "40px",
  marginTop: "100px"
  }

});
Amplify.configure(awsconfig)
function App() {
 
    const classes = useStyles();
    return (
      <div className={classes.container}>

      
  <Nav></Nav>

  <Switch>

    <Route exact from="/" render={props => <Home />} />

    <Route exact from="/message" render={props => <Message />} />

    <Route exact path="/contact" render={props => <Home {...props} />}  />
   
</Switch>

    </div>
  );
}

export default withAuthenticator(App);
