import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { getEfoTerms } from "../../features/efo/actions";
import { useAppDispatch } from "../../features/efo/hooks";

const useStyles = makeStyles((theme: { spacing: (arg0: number) => any }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ErrorComponent = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h2">
        Something went wrong!
      </Typography>
      <Typography variant="body1" component="p">
        please press the button
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => dispatch(getEfoTerms())}
      >
        Retry
      </Button>
    </div>
  );
};

export default ErrorComponent;
