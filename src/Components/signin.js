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
      <div className = "main-container">
        <img style={{width : 300, textAlign: 'center'}} alt='G-Pop Watch' src='/images/gpopwatch-logo.jpg' />
        <SigninForm />
      </div>
    );
  }
}

export default withRouter(Director)

var styles = {
  pictoBack : {
    position: 'fixed',
    left : '30px',
    marginTop : '20px',
    top: '80px'
  },
  pictosLinks : {
    fontFamily : 'Montserrat'
  },
  h1 : {
    marginBottom : '8px',
    fontFamily : 'Montserrat',
    textTransform : 'uppercase'
  },
  h2 : {
    fontFamily : 'Montserrat',
    fontSize: '16px',
    marginTop: 0,
  },
  directorData : {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    marginTop : '30px'
  },
  directorInfos : {
    width : '33%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    top : '140px',
    fontFamily : 'Montserrat',
    fontSize : 15,
    position: 'fixed'
  },
  directorMain : {
    display : 'flex',
  },
  directorVideos : {
    position: 'absolute',
    left: '33%',
    top: 72,
    minHeight: '100%',
    width: '67%',
    backgroundColor : 'black',
  },
  directorDataList : {
    listStyleType : 'none',
    fontFamily : 'Montserrat',
    fontSize : 15
  },
  directorDataFeat : {
    width: '20vw',
    marginBottom: 8
  },
  directorDataTitle : {
    marginRight: 40
  },
  directorDataContent : {
    position: 'fixed',
    display: 'inline-flex',
    left: 250,
    width: 150
  },
  directorDataSubCat : {
    display: 'inline-flex',
    left: 250,
    width: 150
  },
  videoTitle : {
    color: 'white',
    backgroundColor : 'black',
    textAlign : 'center',
    fontWeight : '400',
    fontSize : '20px',
    fontFamily : 'Montserrat'
  },
  videoContent : {
    textAlign : 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  editButton : {
    backgroundColor : 'black',
    color : 'white',
    borderStyle : 'none',
    paddingTop : 4,
    paddingBottom : 4,
    paddingLeft : 25,
    paddingRight : 25,
    position : 'relative',
    left : -117,
    marginTop: 12,
    cursor: 'pointer'
  }
}
