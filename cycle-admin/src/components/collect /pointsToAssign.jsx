import React from 'react';
import {Typography} from '@material-ui/core'

const PointsContainer = ({points}) => {
  return(
    <div>
      <Typography variant='h6'>
          Points : {points}
      </Typography>
    </div>
  )
}

export default PointsContainer;