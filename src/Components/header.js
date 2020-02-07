import React from 'react';
import { DataSearch } from '@appbaseio/reactivesearch';
import { Link } from "react-router-dom";
import "../App.css";

export default class Header extends React.Component {
  render() {
    var navLinkGpop, navLinkSub
    if (this.props.currentPage === '/') {
      navLinkGpop = 'navLinksOn'
      navLinkSub = 'navLinks'
    } else if (this.props.currentPage === '/submission/') {
      navLinkGpop = 'navLinks'
      navLinkSub = 'navLinksOn'
    } else {
      navLinkGpop = 'navLinks'
      navLinkSub = 'navLinks'
    }
    return (
        <div style={styles.navBar}>
          <div style={styles.navLogo}>
            <Link to='/'><img style={{width : '100%'}} alt='G-Pop Watch' src='/images/gpopwatch-logo.jpg' /></Link>
          </div>
          {this.props.isDashboard ? 
            <DataSearch
              componentId = "mainSearch"
              dataField = {["name"]}
              className = "search-bar"
              queryFormat = "and"
              placeholder = "Search for a director"
            /> 
          :
          null }
          <div style={styles.navLinks} className={navLinkGpop}>
            <a href='/'>Talents G-Pop</a>
          </div>
          <div style={styles.navLinks} className={navLinkSub}>
            <Link to='/submission'>Submissions</Link>
          </div>
          <img style={{width : '90px', marginLeft: 30, marginTop: 6, marginBottom: 6 }} src="/images/generalpop-logo.png" alt="Général Pop" />
        </div>
    );
  }
}

var styles = {
  navBar : {
    backgroundColor : 'black',
    display : 'flex',
    justifyContent : 'flex-start',
    alignItems : 'center',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    width: '100%'
  },
  navLogo : {
    width : '200px',
    marginTop : '14px',
    marginBottom : '10px',
    marginLeft: '10px',
    marginRight : '30px'
  },
  navLinks : {
    color : 'white',
    fontWeight : 'bold',
    textTransform: 'uppercase',
    marginLeft : '50px'
  },
}
