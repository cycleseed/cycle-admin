import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));
const QuantityInput = () => {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        label="Quantity to Collect"
        placeholder="Quantity"
        multiline
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />  
    </form>
  )
}

export default QuantityInput;