import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@material-ui/core'


const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    marginTop: 30


  },
  media: {
    height: 140,
  },
});

const MaterialCard = () => {
  const classes = useStyles();

  return (
       // Card One
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Recycled Material"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Collect 
          </Button>
        </CardActions>
      </Card>
  );
}




export default MaterialCard;
