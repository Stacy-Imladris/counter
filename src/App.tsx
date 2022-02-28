import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";
import {Grid, Paper} from "@mui/material";

function App() {
    return (
        <Grid container direction="row" spacing={5} justifyContent="center" alignItems="center" height={'700px'}>
            <Grid item>
                <Paper elevation={3}>
                    <SettingsCounter/>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={3}>
                    <Counter/>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default App;