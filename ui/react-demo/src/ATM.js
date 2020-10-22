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
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ATMs = [
    {
        city: "Allen Twp, Pennsylvania",
        state: "Pennsylvania",
        country: "USA",
        coordinates: {
            "latitude": 40.69641000000007,
            "longitude": -75.47009999999995
        },
    },
    {
        city: "Allen Twp, Pennsylvania",
        state: "Pennsylvania",
        country: "USA",
        coordinates: {
            "latitude": 40.69641000000007,
            "longitude": -75.47009999999995
        },
    },
    {
        city: "Allen Twp, Pennsylvania",
        state: "Pennsylvania",
        country: "USA",
        coordinates: {
            "latitude": 40.69641000000007,
            "longitude": -75.47009999999995
        },
    }
]

class ATM extends Component {

    constructor() {
        super();
        this.state = {
            clicked: false
        }
    }
    
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

                <Grid container spacing={2} className="grid">
                <Grid item xs={12} className="button">
                    <Typography variant="h4">Need to withdraw some cash?</Typography>
                </Grid>
                    <Grid item xs={12}>
                        <Button onClick={() => this.setState({clicked: !this.state.clicked})} variant="contained" color="primary" className="button">ATMs Near Me</Button>
                    </Grid>
                    {
                        this.state.clicked ? (ATMs.map(item => (
                            <Grid item xs={5}>
                                <Card>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            {item.city}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            {item.state + "," + item.country}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => { window.open("http://www.google.com/maps/place/" + item.coordinates.latitude + "," + item.coordinates.longitude)}} variant="contained" color="primary">Directions</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))) : null
                    }
                </Grid>
            </div>
            );
        }
}

export default ATM;