import React from 'react';
import { DataSearch } from '@appbaseio/reactivesearch';
import { Link } from "react-router-dom";
import "../App.css";

export default class Header extends React.Component {
  render() {
    var navLinkGpop, navLinkSub
    if (this.props.currentPage === '/dashboard') {
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
            <Link to='/dashboard'><img style={{width : '250px'}} alt='G-Pop Watch' src='/images/talentswatch-logo.jpg' /></Link>
          </div>
          {this.props.isDashboard ? 
            <DataSearch
              componentId = "mainSearch"
              dataField = {["name"]}
              className = "search-bar"
              queryFormat = "and"
              placeholder = "Search for a talent"
            /> 
          :
          null }
          <div style={styles.navSection}>
            <div style={styles.navLinksTal} className={navLinkGpop}>
              <Link to='/dashboard'>Talents</Link>
            </div>
            <div style={styles.navLinksSub} className={navLinkSub}>
              <Link to='/submission'>Submissions</Link>
            </div>
          </div>
        </div>

    );
  }
}

var styles = {
  navBar : {
    backgroundColor : 'black',
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    width: '100%'
  },
  navLogo : {
    width : '200px',
    marginTop : '25px',
    marginBottom : '20px',
    marginLeft: '20px',
    marginRight : '30px'
  },
  navLinksTal : {
    color : 'white',
    fontWeight : 'bold',
    textTransform: 'uppercase',
    fontSize: 18
  },
  navLinksSub : {
    color : 'white',
    fontWeight : 'bold',
    textTransform: 'uppercase',
    marginLeft : '50px',
    fontSize: 18
  },
  navSection : {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    marginRight: 120
  }
}
