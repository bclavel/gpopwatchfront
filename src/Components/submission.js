import React from 'react';
import { ReactiveBase, MultiList, SingleDropdownList, ReactiveList, SelectedFilters } from '@appbaseio/reactivesearch';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Header from './header'
import Form from './submitform'
import "../App.css";

export default class Submission extends React.Component {
  constructor(props) {
    super(props);
    console.log('this.props', this.props);
    this.state = {
      currentPage : this.props.match.path,
    }
  }
  render() {
    return (
      <div className = "main-container">
      <ReactiveBase app = "gpop-data2" credentials = "MRwR0u06C:c0903d48-7bad-4a8f-ae7f-c5c1e0b8bb9a">
        <Header currentPage={this.state.currentPage}/>
        <h1 style={styles.h1}>Submit a new director.</h1>
        <Form />
      </ReactiveBase>
      </div>
    );
  }
}

var styles = {
  h1 : {
    marginBottom : '8px',
    fontFamily : 'Montserrat',
    textAlign : 'center',
    marginTop : 60
  },
}
