import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardMedia} from '@material-ui/core';


const useStyles = makeStyles(theme => ({

  media: {
    height: 240,
    width: 300,
    borderRadius: 7,
  
  },
}));

const  BasicCard = () => {
  const classes = useStyles();

  return (
    <div>
        <CardMedia
          className = {classes.media}
          image='https://via.placeholder.com/300/250'
          title='Basic Collect Card'
        />

    </div>
  );
}

export default BasicCard;