import React from 'react';
import { ReactiveBase, MultiList, SingleDropdownList, ReactiveList, SelectedFilters } from '@appbaseio/reactivesearch';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Header from './header'
import Form from './submitform'
import "../App.css";
import backEndAddress from '../config';

export default class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage : this.props.match.path,
      directorName :'',
      directorLoca : '',
      directorCat : '',
      directorSubCat : [],
      directorTypePrint : false,
      directorTypeFilm : false,
      directorTypeDop : false,
      directorSituation : '',
      directorContent : '',
      directorContactEmail : '',
      directorContactPhone: '',
      directorLabel: '',
      directorReckitt : '',
      directorContacted : '',
      directorWebsite : '',
      directorVimeo : '',
      directorInsta : '',
      directorVideos : [],
    }
  }

  componentWillMount() {
    var ctx = this
    console.log('will mount');
    console.log('states', this.state);
    console.log('this.props', this.props);

    fetch(`${backEndAddress}/getdirector?directorName=${this.props.location.state.directorName}`)
    .then(function(response) {
      return response.json()
    })
    .then(function (data) {
      console.log('GET DIRECTOR - fetch data >>', data)
      var subCatData = data.directorSubCat.map((element, i) => {
        return element.subCatLabel
      })
      var subCatString = subCatData.join(' ')
      console.log(subCatString);

      ctx.setState({
        directorName : data.directorName,
        directorAppbaseId : data.directorAppbaseId,
        directorLoca : data.directorLoca,
        directorCat : data.directorCat,
        directorSubCat : subCatString,
        directorTypePrint : data.directorTypePrint,
        directorTypeFilm : data.directorTypeFilm,
        directorTypeDop : data.directorTypeDop,
        directorSituation : data.directorSituation,
        directorContent : data.directorContent,
        directorContactEmail : data.directorContactEmail,
        directorContactPhone: data.directorContactPhone,
        directorLabel: data.directorLabel,
        directorReckitt : data.directorReckitt,
        directorContacted : data.directorContacted,
        directorWebsite : data.directorWebsite,
        directorVimeo : data.directorVimeo,
        directorInsta : data.directorInsta,
        // directorVideos : data.directorVideos,
      })
    })
  }

  render() {
    return (
      <div className = "main-container">
      <ReactiveBase app = "gpop-data2" credentials = "MRwR0u06C:c0903d48-7bad-4a8f-ae7f-c5c1e0b8bb9a">
        <Header currentPage={this.state.currentPage}/>
        <h1 style={styles.h1}>Submit a new director.</h1>
        <Form directorName={this.state.directorName}/>
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
