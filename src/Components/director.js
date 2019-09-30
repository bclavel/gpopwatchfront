import React from 'react';
import { ReactiveBase, MultiList, SingleDropdownList, ReactiveList, SelectedFilters } from '@appbaseio/reactivesearch';
import { Link } from "react-router-dom";
import Header from './header'
import "../App.css";
import backEndAddress from '../config';

export default class Director extends React.Component {

  constructor(props) {
    super(props);
    console.log('this.props', this.props);
    this.state = {
      directorAppbaseId : this.props.match.params.id,
      directorName : this.props.match.params.name,
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
    console.log('this.state', this.state);
  }


  componentWillMount() {
    var ctx = this
    console.log('will mount');

    fetch(`${backEndAddress}/getdirector?directorName=${this.state.directorName}`)
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
        // directorName : data.directorName,
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
        <Header />
        <div style={styles.pictoBack}>
          <Link to='/'><img style={{width : '30px'}} src="/images/back.jpg"/></Link>
        </div>
        <div style={styles.directorMain}>
          <div style={styles.directorInfos}>
            <h1 style={styles.h1}>{this.state.directorName}.</h1>
            <div style={styles.pictosLinks} className='pictosLinks'>
              <a href={this.state.directorWebsite} target="_blank">Site</a> <a href={this.state.directorInsta} target="_blank">Insta</a> <a href={this.state.directorVimeo} target="_blank">Vimeo</a>
            </div>
            <div style={styles.directorData}>
              <div>
                <ul className='directorDataList' style={styles.directorDataList}>
                  <li>Localisation.</li>
                  <li>Category.</li>
                  <li>Subcategories.</li>
                  <li>Situation.</li>
                  <li>Content.</li>
                  <li>Profil.</li>
                  <li>Mail.</li>
                  <li>Mob.</li>
                </ul>
              </div>
              <div>
                <ul className='directorDataList' style={styles.directorDataList}>
                  <li>{this.state.directorLoca}</li>
                  <li>{this.state.directorCat}</li>
                  <li>{this.state.directorSubCat}</li>
                  <li>{this.state.directorSituation}</li>
                  <li>{this.state.directorContent}</li>
                  <li>Print {this.state.directorTypePrint}, Film {this.state.directorTypeFilm}, DOP {this.state.directorTypeDop}</li>
                  <li>{this.state.directorContactEmail}</li>
                  <li>{this.state.directorContactPhone}</li>
                </ul>
              </div>
            </div>
            <button style={styles.editButton}>Edit</button>
          </div>
          <div style={styles.directorVideos}>
            <h2 style={styles.videoTitle}>Videos.</h2>
            <div style={styles.videoContent}>
            <iframe src="https://player.vimeo.com/video/339559799?color=ffffff&title=0&byline=0&portrait=0" width="800" height="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </ReactiveBase>
      </div>
    );
  }
}

var styles = {
  pictoBack : {
    position: 'absolute',
    left : '10px',
    marginTop : '20px'
  },
  pictosLinks : {
    fontFamily : 'Montserrat'
  },
  h1 : {
    marginBottom : '8px',
    fontFamily : 'Montserrat',
    textTransform : 'uppercase'
  },
  directorData : {
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
    marginTop : '30px'
  },
  directorInfos : {
    width : '33vw',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    paddingTop : '60px'
  },
  directorMain : {
    display : 'flex',
  },
  directorVideos : {
    backgroundColor : 'black',
    width : '66vw',
    height : '100vh'
  },
  directorDataList : {
    listStyleType : 'none',
    fontFamily : 'Montserrat',
    fontSize : 15
  },
  videoTitle : {
    color: 'white',
    textAlign : 'center',
    fontWeight : '400',
    fontSize : '20px',
    fontFamily : 'Montserrat'
  },
  videoContent : {
    textAlign : 'center'
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
    left : -96
  }
}
