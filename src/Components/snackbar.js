import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={props.displaySnackbar} autoHideDuration={6000} onClose={props.onClose}>
        <Alert onClose={props.onClose} severity="success">
          {props.director} has been successfully {props.action} <Link to={`/director/${props.director}`}>View the talent</Link>
        </Alert>
      </Snackbar>
    </div>
  );
}