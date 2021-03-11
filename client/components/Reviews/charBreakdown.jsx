import React from 'react';
import { StaticRating } from '../../starRating.jsx';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const CharBreakdown = ({ metadata }) => {
  const charList = Object.keys(metadata.characteristics);

  return (
    <Grid container item>
      {charList.map(char => {
        const position = Math.round(100 * (metadata.characteristics[char].value / 5) )
        if (char === 'Quality' || char === 'Comfort') {
          return (
            <Grid container item style={{marginTop: '10px'}}>
              <Grid item xs={1}></Grid>
              <Grid item xs={3} key={char}>
                <h5>{char}:</h5>
              </Grid>
              <Grid container item justify="center" spacing={1}>
                <Grid item xs={3}>
                  <div className="slider s1" style={{
                    backgroundColor: 'lightgrey',
                    display: 'inline-block',
                    width: '100%',
                    height: '12px'
                    }}>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="slider s2" style={{
                    backgroundColor: 'lightgrey',
                    display: 'inline-block',
                    width: '100%',
                    height: '12px'
                    }}>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div className="slider s3" style={{
                    backgroundColor: 'lightgrey',
                    display: 'inline-block',
                    width: '100%',
                    height: '12px'
                    }}>
                  </div>
                </Grid>
              </Grid>
              <Grid container item justify="space-around">
                <Grid item xs={3}>
                  Poor
                </Grid>
                <Grid item xs={3} style={{textAlign: 'right'}}>
                  Perfect
                </Grid>
              </Grid>
            </Grid>
          )} else {
            return (
              <Grid container item style={{marginTop: '10px'}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3} key={char}>
                  <h5>{char}:</h5>
                </Grid>
                <Grid container item justify="center" spacing={1}>
                  <Grid item xs={3}>
                    <div className="slider s1" style={{
                      backgroundColor: 'lightgrey',
                      display: 'inline-block',
                      width: '100%',
                      height: '12px'
                      }}>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="slider s2" style={{
                      backgroundColor: 'lightgrey',
                      display: 'inline-block',
                      width: '100%',
                      height: '12px'
                      }}>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="slider s3" style={{
                      backgroundColor: 'lightgrey',
                      display: 'inline-block',
                      width: '100%',
                      height: '12px'
                      }}>
                    </div>
                  </Grid>
                </Grid>
                <Grid container item justify="center">
                  <Grid item xs={3}>
                    Too Small
                  </Grid>
                  <Grid item xs={3} style={{textAlign: 'center'}}>
                    Perfect
                  </Grid>
                  <Grid item xs={3} style={{textAlign: 'right'}}>
                    Too Large
                  </Grid>
                </Grid>
              </Grid>
            )
          }
      })}
    </Grid>
  )
}

export default CharBreakdown;
