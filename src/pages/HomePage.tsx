import React from 'react'
import {Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import greyimage from '../assets/img/grey2.jpg'
import { url } from 'inspector';
import { observer } from 'mobx-react-lite';
import Login from './users/Login';
import Guide from '../components/Guide';
import Properties from '../components/Properties';
import GetStarted from '../components/GetStarted';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Details from '../components/Details';
import Footer from '../components/Footer';

export default observer (function HomePage(){
    return(
        <>
        <Hero />
        <Companies />
        <Guide />
        <Properties />
        <Details />
        <GetStarted />
        <Footer />
        {/* <Login /> */}
        </>
    )
})


