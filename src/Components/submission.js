import React from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
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
      directorProfile: [],
      directorSituation : '',
      directorContent : '',
      directorContactEmail : '',
      directorContactPhone: '',
      // directorLabel: '',
      directorContacted : '',
      directorWebsite : '',
      directorVimeo : '',
      directorInsta : '',
      directorVideo1 : '',
      directorVideoSource1 : '',
      directorVideo2 : '',
      directorVideoSource2 : '',
      directorVideo3 : '',
      directorVideoSource3 : '',
      directorVideo4 : '',
      directorVideoSource4 : '',
    }
  }

  componentWillMount() {
    var ctx = this
    console.log('SUBMISSION states', this.state);
    // console.log('SUBMISSION props', this.props);

    if (this.props.location.state) {
      this.setState({editMode : true})
      fetch(`${backEndAddress}/getdirector?directorName=${this.props.location.state.directorName}`)
      .then(function(response) {
        return response.json()
      })
      .then(function (data) {
        console.log('GET DIRECTOR - fetch data >>', data)
        var subCatData = data.directorSubCat.map(item => {
          return item.subCatLabel
        })
        var subCatString = subCatData.join(', ')

        var profileData = data.directorProfile.map(item => item.profileLabel)

        // var profileData = data.directorProfile.map(item => {
        //   return item.profileLabel
        // })
        // var profileString = profileData.join(', ')

        ctx.setState({
          directorName: data.directorName,
          directorLoca: data.directorLoca,
          directorCat: data.directorCat,
          directorSubCat: subCatString,
          directorProfile: profileData,
          directorSituation: data.directorSituation,
          directorContent: data.directorContent,
          directorContactEmail: data.directorContactEmail,
          directorContactPhone: data.directorContactPhone,
          // directorLabel: data.directorLabel,
          directorContacted: data.directorContacted,
          directorWebsite: data.directorWebsite,
          directorVimeo: data.directorVimeo,
          directorInsta: data.directorInsta,
          directorVideo1: data.directorVideos[0].videoUrl,
          directorVideoSource1: data.directorVideos[0].videoSource,
          directorVideo2: data.directorVideos[1].videoUrl,
          directorVideoSource2: data.directorVideos[1].videoSource,
          directorVideo3: data.directorVideos[2].videoUrl,
          directorVideoSource3: data.directorVideos[2].videoSource,
          directorVideo4: data.directorVideos[3].videoUrl,
          directorVideoSource4: data.directorVideos[3].videoSource
        })
      })
    }
  }

  render() {
    let formTitle
    this.state.editMode ? formTitle = 'Edit ' + this.state.directorName + "'s profile" : formTitle = 'Submit a new talent.'

    return (
      <div className = "main-container">
      <ReactiveBase app = "gpop-data2" credentials = "MRwR0u06C:c0903d48-7bad-4a8f-ae7f-c5c1e0b8bb9a">
        <Header currentPage={this.state.currentPage}/>
        <h1 style={styles.h1}>{formTitle}</h1>
        <Form
          editMode={this.state.editMode}
          oldName={this.state.directorName}
          name={this.state.directorName}
          category={this.state.directorCat}
          localisation={this.state.directorLoca}
          subcategories={this.state.directorSubCat}
          profiles={this.state.directorProfile}
          // print={this.state.directorTypePrint}
          // film={this.state.directorTypeFilm}
          // dop={this.state.directorTypeDop}
          situation={this.state.directorSituation}
          content={this.state.directorContent}
          contactEmail={this.state.directorContactEmail}
          contactPhone={this.state.directorContactPhone}
          // label={this.state.directorLabel}
          // reckitt={this.state.directorReckitt}
          contacted={this.state.directorContacted}
          website={this.state.directorWebsite}
          vimeo={this.state.directorVimeo}
          insta={this.state.directorInsta}
          video1={this.state.directorVideo1}
          videoSource1={this.state.directorVideoSource1}
          video2={this.state.directorVideo2}
          videoSource2={this.state.directorVideoSource2}
          video3={this.state.directorVideo3}
          videoSource3={this.state.directorVideoSource3}
          video4={this.state.directorVideo4}
          videoSource4={this.state.directorVideoSource4}
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
    marginTop : 140
  },
}
