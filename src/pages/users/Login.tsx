import React from 'react'
import {Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import greyimage from '../../assets/img/grey2.jpg'
import { url } from 'inspector';
import { observer } from 'mobx-react-lite';

export default observer( function Login(){

    const paperStyle={padding:'70px 70px', width:300, margin:"140px auto", borderRadius:20}
    const paperStyle2={padding:'0px 6px', width:250, margin:"20px 0px 12px  auto",marginLeft:510,marginTop:100, borderRadius:20}
    const paperStyle3={padding:'60px 70px', width:300, margin:"120px 0px 12px auto"}
    const headerStyle={margin:0, fontFamily:'Century Gothic'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Grid sx={{display:'flex',textAlign:'center'}}>
             <Box
                sx={{
                    width: 900,
                }}
                ><Typography  sx={{color:'black',fontFamily:'Montserrat', fontWeight:'black',fontSize:40}} style={paperStyle3}>ORION | </Typography>
                <Typography  sx={{color:'black',fontFamily:'Montserrat', fontWeight:'black',fontSize:30}} style={paperStyle2}>Start Your Free Rental Service </Typography>
           </Box>
                <Box sx={{
                    backgroundImage:`url(${greyimage})`, 
               
                    width: 1050,
                    height:920,
                   
                    backgroundRepeat:'no-repeat'
                }}>
            <Paper elevation={20} style={paperStyle}>
                <Grid  >
                   
                    <h2 style={headerStyle} >Login</h2>
                    <Typography variant='caption' sx={{fontFamily:'Century Gothic'}}>Please fill this form to create an account !</Typography>
                </Grid>
                <form style={{marginTop:20,padding:2}}>
                    <TextField style={{marginTop:5}} id="standard-basic" variant="standard" fullWidth label='Name' placeholder="Enter your Name"/>
                   
                    <TextField style={{marginTop:5}}id="standard-basic" variant="standard"fullWidth label='Password' placeholder="Enter your Password"/>
                  
                    <FormControlLabel style={{marginTop:5}} control={<Checkbox name='checkedA' />} label="I accept the terms and conditions"></FormControlLabel>
                    <Button style={{marginTop:20}} type='submit' variant='contained' color='primary' sx={{fontFamily:'Century Gothic'}}>Login</Button>
                    <div >
                        {/* <a href="#"><small className="reset">Password Reset</small></a><br></br> */}
                        <a href="/register"><small className="reset" style={{color:'blue'}}>If u dont have account,please Sign Up!</small></a> 
                        {/* <a href="#"><small className="reset ml-2">Quick Recover</small></a> */}
                    </div>

                </form>
                
            </Paper>
            </Box>
            
        </Grid>
    )
})

