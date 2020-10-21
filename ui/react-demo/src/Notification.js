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
import { Grid, Input, Select } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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

let age = 5;

class Notification extends Component {

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
                    <Grid item xs={12}>
                    <FormControl variant="filled" >
        <InputLabel id="demo-simple-select-filled-label">Destination City</InputLabel>
        <Select 
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          placeholder="San Jose"
          style={{minWidth: 150, margin: 8}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"San Jose"}>San Jose</MenuItem>
          <MenuItem value={"San Jose"}>New York</MenuItem>
          <MenuItem value={"San Jose"}>Singapore</MenuItem>
        </Select>
      </FormControl>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={1}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date"
          value={1}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>

    <Button variant="contained" color="primary" className="button" onClick={() => {alert("Card authorized")}}>Authorize</Button>
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

export default Notification;