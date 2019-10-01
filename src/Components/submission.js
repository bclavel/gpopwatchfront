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
      editMode : false,
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

    if (this.props.location.state) {
      this.setState({editMode : true})
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

        ctx.setState({
          directorName : data.directorName,
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
          directorVideos : data.directorVideos,
        })
      })
    }
  }

  render() {
    return (
      <div className = "main-container">
      <ReactiveBase app = "gpop-data2" credentials = "MRwR0u06C:c0903d48-7bad-4a8f-ae7f-c5c1e0b8bb9a">
        <Header currentPage={this.state.currentPage}/>
        <h1 style={styles.h1}>Submit a new director.</h1>
        <Form
          editMode={this.state.editMode}
          oldName={this.state.directorName}
          name={this.state.directorName}
          category={this.state.directorCat}
          localisation={this.state.directorLoca}
          subcategories={this.state.directorSubCat}
          print={this.state.directorTypePrint}
          film={this.state.directorTypeFilm}
          dop={this.state.directorTypeDop}
          situation={this.state.directorSituation}
          content={this.state.directorContent}
          contactEmail={this.state.directorContactEmail}
          contactPhone={this.state.directorContactPhone}
          label={this.state.directorLabel}
          reckitt={this.state.directorReckitt}
          contacted={this.state.directorContacted}
          website={this.state.directorWebsite}
          vimeo={this.state.directorVimeo}
          insta={this.state.directorInsta}
          video1={this.state.directorVideos[0]}
          video2={this.state.directorVideos[1]}
          video3={this.state.directorVideos[2]}
          video4={this.state.directorVideos[3]}
          />
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
