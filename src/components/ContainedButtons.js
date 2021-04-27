import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SaveIcon from "@material-ui/icons/Save";
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";

// More Material UI examples
// https://react.school/material-ui/templates

const useStyles = makeStyles((theme) => ({
  margin: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  spacer: {
    marginBottom: theme.spacing(10)
  }
}));

const defaultTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
});

const customTheme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: purple
  }
});

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={defaultTheme}>
      
      <Container>
        
        
        <div className={classes.margin}>
         
          <Button color="primary" variant="contained">
            primary
          </Button>
          <Button color="primary" variant="contained">
            secondary
          </Button>
        </div>             
              
      </Container>
      <div className={classes.spacer} />
    </ThemeProvider>
  );
}
