import React from 'react'
import { makeStyles } from '@mui/styles';
import {AppBar ,Toolbar,Button,Container, CardMedia, Typography, Grid,} from "@mui/material"
import { Link } from 'react-router-dom';
import anbLogo from  "../../../src/assets/anb-logo.PNG"; 


const useStyles = makeStyles({

    stickyHeader: {
        position: "sticky",
        top: 0.5,
        height : 70,
        boxShadow: "rgb(0 0 0 / 8%) 0px 1px 1px !important"
    }
  
})

const Header = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static" style={{boxShadow:"none"}}>
                <Toolbar style={{background : "white", boxShadow:'rgb(0 0 0 / 8%) 0px 1px 1px' }} >
                        <Link to={"/"} style={{textDecoration: "none"}}>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <img src={anbLogo} alt="img" height="42" />
                            <h2 style={{color : "red"}}>airbnb</h2>
                          </div>
                        </Link>
                </Toolbar>
            </AppBar> 
            <br />
        
        </div>
    )
}

export default Header
