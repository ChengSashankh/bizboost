import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ATM from './ATM'
import Home from './Home'
import Merchant from './Merchant';
import Notification from './Notification';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/atm" component={ATM}></Route>
        <Route exact path="/merchant" component={Merchant}></Route>
        <Route exact path="/notification" component={Notification}></Route>
      </Router>
    </div>
    );
  }
  
  export default App;
  