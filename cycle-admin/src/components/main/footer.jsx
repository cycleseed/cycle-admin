import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {Box} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root:{
    backgroundColor: "black",
    height: 80,

  }
}))

const Footer = () => {
  const classes = useStyles();

  return (
   
   
      <Box className={classes.root}/>
   
  );
}


export default Footer;