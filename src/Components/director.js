import React from 'react';
import { withRouter, Link } from "react-router-dom";
import Header from './header'
import "../App.css";
import backEndAddress from '../config';

class Director extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      directorName : this.props.match.params.name,
      directorLoca : '',
      directorCat : '',
      directorSubCat : [],
      directorProfile: [],
      directorSituation : '',
      directorContent : '',
      directorContactEmail : '',
      directorContactPhone: '',
      directorContacted : '',
      directorWebsite : '',
      directorVimeo : '',
      directorInsta : '',
      directorVideos : [],
      isDashboard: false
    }
  }

  componentWillMount() {
    var ctx = this
    fetch(`${backEndAddress}/getdirector?directorName=${this.state.directorName}`)
    .then(function(response) {
      return response.json()
    })
    .then(function (data) {
      console.log('GET DIRECTOR - fetch data >>', data)
      var subCatData = data.directorSubCat.map((element, i) => {
        return element.subCatLabel
      })
      var subCatString = subCatData.join(', ')

      var profileData = data.directorProfile.map(item => item.profileLabel)

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
        directorContacted: data.directorContacted,
        directorWebsite: data.directorWebsite,
        directorVimeo: data.directorVimeo,
        directorInsta: data.directorInsta,
        directorVideos: data.directorVideos,
      })
    })
  }

  extractVideoID = (url) => {
    var regExp = /^.*((youtu.be\/|vimeo.com\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp)
    if (match&&match[7]) {
      return match[7];
    } else {
        console.error("Could not extract video ID.")
    }
  }

  render() {
    // console.log('DIRECTOR states', this.state);
    var directorNameProp = this.state.directorName
    const directorProfileString = this.state.directorProfile.join(' ')
    var directorContacted, directorContent
    this.state.directorContacted ? directorContacted = 'Yes' : directorContacted = 'No'
    this.state.directorContent ? directorContent = 'Yes' : directorContent = 'No'
    return (
      <div className = "main-container">
        <Header isDashboard={this.state.isDashboard} />
        <div style={styles.pictoBack}>
          <Link to='/dashboard'><img style={{width : '30px'}} src="/images/back.jpg" alt="Back"/></Link>
        </div>
        <div style={styles.directorMain}>
          <div style={styles.directorInfos}>
            <h1 style={styles.h1}>{this.state.directorName}.</h1>
            <h2 style={styles.h2}>{directorProfileString}</h2>
            <div style={styles.pictosLinks} className='pictosLinks'>
              <a href={this.state.directorWebsite} target="_blank">Site</a> <a href={this.state.directorInsta} target="_blank">Insta</a> <a href={this.state.directorVimeo} target="_blank">Vimeo</a>
            </div>
            <div style={styles.directorData}>
              <div style={styles.directorDataFeat}>
                <span className="title" style={styles.directorDataTitle}>Localisation.</span>
                <span className="data" style={styles.directorDataContent}>{this.state.directorLoca}</span>
              </div>
              <div style={styles.directorDataFeat}>
                <span className="title" style={styles.directorDataTitle}>Category.</span>
                <span className="data" style={styles.directorDataContent}>{this.state.directorCat}</span>
              </div>
              <div style={styles.directorDataFeat}>
                <span className="title" style={styles.directorDataTitle}>Subcategories.</span>
                <span className="data" style={styles.directorDataSubCat}>{this.state.directorSubCat}</span>
              </div>
              <div style={styles.directorDataFeat}>
                <span className="title" style={styles.directorDataTitle}>Situation.</span>
                <span className="data" style={styles.directorDataContent}>{this.state.directorSituation}</span>
              </div>
              <div style={styles.directorDataFeat}>
                <span className="title" style={styles.directorDataTitle}>Content.</span>
                <span className="data" style={styles.directorDataContent}>{directorContent}</span>
              </div>
              <div style={styles.directorDataFeat}>
                <span className="title" style={styles.directorDataTitle}>Contacted.</span>
                <span className="data" style={styles.directorDataContent}>{directorContacted}</span>
              </div>
              <div style={styles.directorDataFeat}>
                <span className="title" style={styles.directorDataTitle}>Mail.</span>
                <span className="data" style={styles.directorDataContent}>{this.state.directorContactEmail}</span>
              </div>
              <div style={styles.directorDataFeat}>
                <span className="title" style={styles.directorDataTitle}>Mob.</span>
                <span className="data" style={styles.directorDataContent}>{this.state.directorContactPhone}</span>
              </div>
            </div>
            <Link to={{pathname : '/submission', state : {directorName : directorNameProp}}}><button style={styles.editButton}>Edit</button></Link>
          </div>
          <div style={styles.directorVideos}>
            <h2 style={styles.videoTitle}>Videos.</h2>
            <div style={styles.videoContent} className="videoContent">
              {this.state.directorVideos.map((item, i) => {
                if (item.videoSource === 'Youtube' && item.videoUrl !== '') {
                  var videoUrl = this.extractVideoID(item.videoUrl)
                  return <iframe width="700" height="393" src={`https://www.youtube.com/embed/${videoUrl}`} key={i} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                } else if (item.videoSource === 'Vimeo' && item.videoUrl !== '') {
                  var videoUrl = this.extractVideoID(item.videoUrl)
                  return <iframe src={`https://player.vimeo.com/video/${videoUrl}?embedparameter=value`} width="700" height="393" frameBorder="0" allowFullScreen></iframe>
                }
              }
              )}
            </div>
          </div>
        </div>
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
