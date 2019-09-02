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
          <img style={{width : '30px'}} src="/images/back.jpg"/>
        </div>
        <div style={styles.directorInfos}>
          <h1>Ada Sokol.</h1>
          <div style={styles.pictosLinks}>
            Web - Insta - Vimeo
          </div>
          <div style={styles.directorData}>
            <div>
              <ul>
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
              <ul>
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
        </div>
        <div style={styles.directorVideos}>
          <h2>Videos</h2>
          <iframe src="https://player.vimeo.com/video/339559799?color=ffffff&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </ReactiveBase>
      </div>
    );
  }
}

var styles = {
  pictoBack : {
    position: 'absolute',
    left : '10px'
  },
  pictosLinks : {

  },
  directorData : {
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center'
  },
  directorInfos : {

  },
  directorVideos : {
    backgroundColor : 'black'
  }
}
