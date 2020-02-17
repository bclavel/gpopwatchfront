import React from 'react';
import { withRouter } from "react-router-dom";
import Header from './header'
import SigninForm from './signinform'
import "../App.css";

class Director extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDashboard: false,
    }
  }


  render() {
    // console.log('SIGNIN states', this.state);
    return (
      <div style={styles.mainContainer}>
        <div style={styles.header}>
          <img style={styles.logo} alt='G-Pop Watch' src='/images/gpopwatch-logo.jpg' />
        </div>
        <div style={styles.formContainer}>
          <h1 style={styles.h1}>Sign in.</h1>
          <SigninForm />
          <p className='signin__txt' style={styles.txt}>If you need access to the platform, please contact the <a href='mailto:jpkraft@betc.com'>administrator</a></p>
        </div>
      </div>
    );
  }
}

export default withRouter(Director)

var styles = {
  h1 : {
    marginBottom : '8px',
    fontFamily : 'Montserrat',
    textTransform : 'uppercase',
    textAlign: 'center',
    marginTop: 60
  },
  header : {
    display: 'block',
    backgroundColor : 'black',
    height: 50
  },
  logo : {
    width: 200,
    position: 'relative',
    top: 15,
    left: 15
  },
  mainContainer : {
    position: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer : {
    backgroundColor : 'white',
  },
  txt : {
    fontFamily : 'Montserrat',
    textAlign: 'center',
    fontSize: '0.9em',
    marginBottom: 60
  },
}
