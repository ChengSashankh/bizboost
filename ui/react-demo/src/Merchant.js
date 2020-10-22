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
import { Grid, Input } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const merchants = [
    {
        "visaMerchantName": "STARBUCKS",
        "visaStoreName": "STARBUCKS",
        "merchantCity": "SAN JOSE",
        "merchantState": "CA",
        "merchantCountryCode": "840",
        "merchantPostalCode": "95110-1216",
        "merchantStreetAddress": "1661 AIRPORT BLVD # 3E",
        "merchantUrl": [
            "STARBUCKS.COM"
        ],
        "locationAddressLatitude": "37.363363",
        "locationAddressLongitude": "-121.921986"
    }
]

class Merchant extends Component {

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
                    <Typography variant="h4">Looking for merchants who accept your card?</Typography>
                </Grid>
                    <Grid item xs={12}>
                        <TextField variant="standard" placeholder="starbucks" className="button"></TextField>
                        <Button onClick={() => this.setState({clicked: !this.state.clicked})} variant="contained" color="primary" className="button">Search</Button>
                    </Grid>
                    {
                        this.state.clicked ? (merchants.map(item => (
                            <Grid item xs={5}>
                                <Card>
                                    <CardContent>
                                        <Typography color="textPrimary" gutterBottom>
                                            {item.visaMerchantName}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            {item.merchantStreetAddress}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            {item.merchantCity + "," + item.merchantState}
                                        </Typography>
                                        <Typography color="textSecondary">
                                            {item.merchantPostalCode}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => { window.open("http://www.google.com/maps/place/" + item.locationAddressLatitude + "," + item.locationAddressLongitude)}} variant="contained" color="primary">Directions</Button>
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

export default Merchant;