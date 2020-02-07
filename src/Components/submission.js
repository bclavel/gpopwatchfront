import React from 'react';
// import { ReactiveBase } from '@appbaseio/reactivesearch';
import { withRouter, Redirect } from "react-router-dom";
import Header from './header'
import Form from './submitform'
import "../App.css";
import backEndAddress from '../config';
import Modal from './modal'

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.match.path,
      editMode: false,
      directorName:'',
      directorLoca: '',
      directorCat: '',
      directorSubCat: [],
      directorProfile: [],
      directorSituation: '',
      directorContent: '',
      directorContactEmail: '',
      directorContactPhone: '',
      // directorLabel: '',
      directorContacted: '',
      directorWebsite: '',
      directorVimeo: '',
      directorInsta: '',
      directorVideo1: '',
      directorVideoSource1: '',
      directorVideo2: '',
      directorVideoSource2: '',
      directorVideo3: '',
      directorVideoSource3: '',
      directorVideo4: '',
      directorVideoSource4: '',
      modalOpen: false,
      isDashboard: false,
      redirect: false
    }
  }

  componentWillMount() {
    var ctx = this
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

        ctx.setState({
          directorName: data.directorName,
          directorAppbaseId: data.directorAppbaseId,
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
  
  handleDeleteTalent = () => {
    var ctx = this

    fetch(`${backEndAddress}/deleteDirector?directorAppbaseId=${this.state.directorAppbaseId}`)
    .then(function(response) {
      return response.json()
    })
    .then(function (data) {
      console.log('DELETE DIRECTOR - fetch data >>', data)
      ctx.setState({modalOpen: false, redirect: true});
    })
  }


  handleOpenModal = () => {
    this.setState({modalOpen: true});
  };

  handleCloseModal = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({modalOpen: false});
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/"/>
    }
    console.log('SUBMISSION states', this.state);
    let formTitle
    this.state.editMode ? formTitle = 'Edit ' + this.state.directorName + "'s profile" : formTitle = 'Submit a new talent.'

    return (
      <div className="main-container">
        {/* <ReactiveBase app = "gpop-data2" credentials = "MRwR0u06C:c0903d48-7bad-4a8f-ae7f-c5c1e0b8bb9a"> */}
          <Header currentPage={this.state.currentPage} isDashboard={this.state.isDashboard}/>
          <h1 style={styles.h1}>{formTitle}</h1>
          <Form
            editMode={this.state.editMode}
            oldName={this.state.directorName}
            name={this.state.directorName}
            category={this.state.directorCat}
            localisation={this.state.directorLoca}
            subcategories={this.state.directorSubCat}
            profiles={this.state.directorProfile}
            situation={this.state.directorSituation}
            content={this.state.directorContent}
            contactEmail={this.state.directorContactEmail}
            contactPhone={this.state.directorContactPhone}
            // label={this.state.directorLabel}
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
            handleOpenModal={this.handleOpenModal}
          />
          <Modal isOpen={this.state.modalOpen} closeModal={this.handleCloseModal} deleteTalent={this.handleDeleteTalent}/>
        {/* </ReactiveBase> */}
      </div>
    );
  }
}

export default withRouter(Submission)

var styles = {
  h1 : {
    marginBottom : '8px',
    fontFamily : 'Montserrat',
    textAlign : 'center',
    marginTop : 140
  },
}
