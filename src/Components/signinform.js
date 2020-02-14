import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import backEndAddress from '../config';


export default function SubmitSignin(props) {
  const classes = useStyles();
  var initData = {
    userName: props.name,
    userPassword: props.password,
  }
  let signinError = ''

  const [values, setValues] = useState({...initData});

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [session, setSession] = useState(false);


  var handleSubmit = function() {
    console.log('Submit signin');
    fetch(`${backEndAddress}/signin`, {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `userName=${values.userName}&userPassword=${values.userPassword}`
       })
    .then(function(response) {
      return response.json()
    })
    .then(function (data) {
      console.log('GET DIRECTOR - fetch data >>', data)
      if (data) {
          console.log('Go !');
          setSession(true)
        return 
      } else {
          signinError = 'Error'
      }
    })
  }

  if (session) {
      return <Redirect to="/dashboard"/>
  } else {
    return (
        <>
        <form className={classes.container} autoComplete="off">
            <Grid container justify="flex-start" direction="column" alignItems="center" spacing={3}>
            <TextField
                id="userName"
                label="Username"
                className={classes.textField}
                value={values.userName}
                onChange={handleChange('userName')}
                margin="normal"
            />
            <TextField
                id="userPassword"
                label="Password"
                type="password"
                className={classes.textField}
                value={values.userPassword}
                onChange={handleChange('userPassword')}
                margin="normal"
            />
            </Grid>
            </form>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
                <button style={styles.editButton} onClick={handleSubmit}>Submit</button>
            </div>
            <p>{signinError}</p>
        </>
    );
  }
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 600,
  },
  videoField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 434,
  },
  videoSourceField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  }
}));

var styles = {
  editButton : {
    backgroundColor: 'black',
    color: 'white',
    borderStyle: 'none',
    marginTop: 20,
    marginBottom: 60,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 25,
    paddingRight: 25,
    cursor: 'pointer'
  },
  cancelButton : {
    backgroundColor: 'white',
    color: 'black',
    borderWidth: '1px',
    borderColor: 'black',
    // marginTop : 20,
    // marginRight: 20,
    // marginBottom: 60,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 25,
    paddingRight: 25,
    cursor: 'pointer',
    // position: 'relative',
    // marginLeft: 396
  },
  deleteButton: {
    backgroundColor: '#f70000',
    color: 'white',
    borderStyle: 'none',
    marginTop: 20,
    marginBottom: 60,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 25,
    paddingRight: 25,
    cursor: 'pointer',
    position: 'absolute',
    left: 460
  }
}
