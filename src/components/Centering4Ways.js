import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    marginAutoContainer: {
      width: 500,
      height: 80,
      display: 'flex',
      backgroundColor: 'gold',
    },
    marginAutoItem: {
      margin: 'auto'
    },
    alignItemsAndJustifyContent: {
      width: 500,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
    },
  }))
const Centering4Ways = () => {
    const classes = useStyles()
    return (
      <React.Fragment>
        <Box
          display="flex" 
          width={500} height={80} 
          bgcolor="lightblue"
        >
          <Box m="auto">
            1. Box (margin: auto)
          </Box>
        </Box>
        <Box 
          display="flex" 
          width={500} height={80} 
          bgcolor="lightgreen"
          alignItems="center"
          justifyContent="center"
        >
          2. Box (alignItems and justifyContent)
        </Box>
        <div className={classes.marginAutoContainer}>
          <div className={classes.marginAutoItem}>
            3. useStyles (margin: auto)
          </div>
        </div>
        <div className={classes.alignItemsAndJustifyContent}>
          4. useStyles (alignItems and justifyContent)
        </div>
      </React.Fragment>
    )
  }
  export default Centering4Ways