import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MaterialCard from './materialsCard';

import styled from 'styled-components'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
}));

const CardGrid = ({className})=> {
  const classes = useStyles();

  return (
    <div className={`${className}__card-container`}>
      <Grid container spacing={0} align="center">
            <Grid item md={6}>
              <MaterialCard />
            </Grid>
            <Grid item md={6} >
              <MaterialCard/>
            </Grid>
            <Grid item md={6}>
              <MaterialCard/>
            </Grid>
            <Grid item md={6}>
              <MaterialCard/>
            </Grid>
      </Grid>
    </div>
  );
}

const CardGridStyled = styled(CardGrid)`
  &__card-container{
    max-width: 100%;
  }
`

export default CardGridStyled;