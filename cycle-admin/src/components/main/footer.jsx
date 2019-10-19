import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {Container} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root:{
    backgroundColor: "black",

  }
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        ya traigo sueño
      </Container>
    </div>
  );
}


export default Footer;