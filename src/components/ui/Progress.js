import React from 'react'
import {LinearProgress} from '@mui/material';

export default function Progress(props) {
    return (
        <React.Fragment>
          <LinearProgress variant="determinate" color={props.color} value={props.value} />
        </React.Fragment>
      );
}
