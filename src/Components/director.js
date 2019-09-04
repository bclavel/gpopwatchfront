import React from 'react';
import { ReactiveBase, MultiList, SingleDropdownList, ReactiveList, SelectedFilters } from '@appbaseio/reactivesearch';
import { Link } from "react-router-dom";
import Header from './header'
import "../App.css";

export default class Director extends React.Component {
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
            <h1 style={styles.h1}>ADA SOKOL.</h1>
            <div style={styles.pictosLinks} className='pictosLinks'>
              <a href="https://www.adasokol.com" target="_blank">Site</a> <a href="https://www.instagram.com/ada_sokol/" target="_blank">Insta</a>
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
                  <li>Paris</li>
                  <li>CGI</li>
                  <li>Luxe, Visuel</li>
                  <li>Free</li>
                  <li>Yes</li>
                  <li>Print, Film</li>
                  <li>mail@adasokol.com</li>
                  <li>+33 6 45 20 37 74</li>
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
    fontFamily : 'Montserrat'
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
