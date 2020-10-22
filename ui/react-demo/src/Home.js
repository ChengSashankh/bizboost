import React, { Component } from 'react';
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

class Home extends Component {
    render() {
        return (
            <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
          </IconButton>
          <Typography variant="h6">
          Business Booster
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
  
      <Grid container spacing={6} className="grid">
          <Grid item xs={12}>
            <Paper variant="outlined">
              <img src="./airplane_window.jpeg" className="image" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                ATM Locator
              </Typography>
              <Typography color="textSecondary">
                Find the nearest ATMs where you can use your VISA card.
              </Typography>
            </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" size="large" fullWidth><Link to="/atm">ATMs Near Me</Link></Button>
          </CardActions>
        </Card>
          </Grid>
          <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Travel Notifier
              </Typography>
              <Typography color="textSecondary">
                Find the nearest ATMs where you can use your VISA card.
              </Typography>
            </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" size="large" fullWidth><Link to="/notification">Travel Notification Service</Link></Button>
          </CardActions>
        </Card>
          </Grid>
          <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Merchant Recommender
              </Typography>
              <Typography color="textSecondary">
                Find merchants in your favorite categories - specially for travellers.
              </Typography>
            </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" size="large" fullWidth><Link to="/recommend">Recommended Merchants</Link></Button>
          </CardActions>
        </Card>
          </Grid>
          <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Merchant Search
              </Typography>
              <Typography color="textSecondary">
                Locate the merchants around you who accept VISA cards.
              </Typography>
            </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" size="large" fullWidth><Link to="/merchant">Locate Merchants</Link></Button>
          </CardActions>
        </Card>
          </Grid>
      </Grid>
      </div>
        );
    }
}

export default Home;
