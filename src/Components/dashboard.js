import React from 'react';
import { ReactiveBase, MultiList, SingleDropdownList, ReactiveList, SelectedFilters } from '@appbaseio/reactivesearch';
import { Link } from "react-router-dom";
import Header from './header'
import "../App.css";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className = "main-container">
      <ReactiveBase app = "gpop-data" credentials = "CTTHu8VEB:9a2d51ff-0506-4d50-aa66-9e914b4de128">
        <Header />
        <div style={styles.header}>
          <div style={styles.pictoBack}>
            <img style={{width : '30px'}} src="/images/back.jpg"/>
          </div>
          <div style={styles.h1}>
            <h1>Directors database.</h1>
          </div>
        </div>
        <div style={styles.filters}>
          <div style={styles.filtersLeft}>
            <h2>Filters</h2>
            <MultiList
              componentId="categoriesList"
              dataField="categories.keyword"
              title="Catégories"
              className="categories-filter"
              size={5}
              sortBy="asc"
              queryFormat="and"
              selectAllLabel="All categories"
              showCheckbox={true}
              showCount={false}
              showSearch={false}
              placeholder="Search for a category"
              react={{
                  and: [
                      "mainSearch",
                      "searchResult",
                      "countrySensor"
                  ]
              }}
              showFilter={true}
              filterLabel="Categories"
              URLParams={false}
              innerClass={{
                  label: "list-item",
                  input: "list-input"
              }}
            />
            </div>
            <div style={styles.filtersRight}>
            <SingleDropdownList
              componentId="countrySensor"
              dataField="country.keyword"
              title="Country"
            />
            <SingleDropdownList
              componentId="contentSensor"
              dataField="content.keyword"
              title="Content"
            />
            <SingleDropdownList
              componentId="situationSensor"
              dataField="situation.keyword"
              title="Situation"
            />
            <SelectedFilters />
          </div>
        </div>
        <div style={{...styles.directorRow, ...styles.directorTitle}}>
          <div style={{...styles.directorName, ...styles.bold}}>
            Directors.
          </div>
          <div style={{...styles.directorCat, ...styles.bold}}>
            Catégories.
          </div>
          <div style={{...styles.directorLoca, ...styles.bold}}>
            Localisation.
          </div>
          <div style={{...styles.directorLinks, ...styles.bold}}>
            Links.
          </div>
          <div style={{...styles.directorType, ...styles.bold}}>
            Print/Film/DOP.
          </div>
        </div>
        <div style={styles.results}>
          <ReactiveList
            componentId="searchResult"
            dataField="lastName.keyword"
            stream={true}
            pagination={false}
            paginationAt="bottom"
            pages={5}
            sortBy="desc"
            size={10}
            loader="Loading Results.."
            showResultStats={false}
            renderItem={this.RealReactiveList}
            react={{
                and: ["mainSearch", "countrySensor", "categoriesList"]
            }}
          />
          <div style={styles.preview}>
            <h2>Preview.</h2>
            <iframe src="https://player.vimeo.com/video/339559799?color=ffffff&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </div>
      </ReactiveBase>
      </div>
    );
  }

  RealReactiveList(data) {
    return(
      <div key={data._id} style={styles.directorRow}>
        <div style={styles.directorName}>
          <Link to={`/director/${data.fistName}-${data.lastName}`}>{data.fistName} {data.lastName}</Link>
        </div>
        <div style={styles.directorCat}>
          {data.categories}
        </div>
        <div style={styles.directorLoca}>
          {data.country}
        </div>
        <div style={styles.directorLinks}>
          <a href={data.vimeo} target='blank'>V</a> <a href={data.instagram} target='blank'>I</a>
        </div>
        <div style={styles.directorType}>
          {data.print}
        </div>
      </div>
    )
  }
}

var styles = {
  header : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  },
  h1 : {
    textAlign: 'center',
  },
  pictoBack : {
    position: 'absolute',
    left : '10px'
  },
  filters : {
    display : 'flex',
    marginBottom : '30px'
  },
  results : {
    display : 'flex',
  },
  filtersLeft : {
    width : '45vw',
    marginRight : '20px',
    marginLeft : '30px'
  },
  filtersRight : {
    width : '45vw',
    marginTop : '80px'
  },
  directorRow : {
    width: '60vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent : 'center',
    fontSize: '18px'
  },
  directorName : {
    width: '16vw',
    textAlign: 'center',
    height : '30px',
    paddingTop : '8px'
  },
  directorCat : {
    width: '12vw',
    textAlign: 'center',
    height : '30px',
    paddingTop : '8px'
  },
  directorLoca : {
    width: '12vw',
    textAlign: 'center',
    height : '30px',
    paddingTop : '8px'
  },
  directorLinks : {
    width: '8vw',
    textAlign: 'center',
    height : '30px',
    paddingTop : '8px'
  },
  directorType : {
    width: '12vw',
    textAlign: 'center',
    height : '30px',
    paddingTop : '8px'
  },
  directorTitle : {
    borderBottom : '2px solid black'
  },
  preview : {
    position : 'absolute',
    right : '80px',
    top : '441px'
  },
  bold : {
    fontWeight : 'bold',
    height : '40px'
  }
}
