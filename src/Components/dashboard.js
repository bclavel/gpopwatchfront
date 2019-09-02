import React from 'react';
import { ReactiveBase, MultiList, SingleDropdownList, ReactiveList, SelectedFilters } from '@appbaseio/reactivesearch';
import { Link } from "react-router-dom";
import Header from './header'
import "../App.css";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className = "main-container">
      <ReactiveBase app = "gpop-data2" credentials = "MRwR0u06C:c0903d48-7bad-4a8f-ae7f-c5c1e0b8bb9a">
        <Header />
        <div style={styles.header}>
          <div style={styles.pictoBack}>
            <img style={{width : '30px'}} src="/images/back.jpg"/>
          </div>
          <div style={styles.h1}>
            <h1>Directors database.</h1>
          </div>
        </div>
        <div style={styles.mainContainer}>
          <div style={styles.filters}>
            <div style={styles.filtersLeft}>
              <h2>Filters</h2>
              <MultiList
                componentId="categoriesList"
                dataField="category.keyword"
                title="Category"
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
                filterLabel="Category"
                URLParams={false}
                innerClass={{
                    label: "list-item",
                    input: "list-input"
                }}
              />
            </div>
            <SingleDropdownList
              componentId="subcategoriesSensor"
              dataField="subcategories.keyword"
              title="Sub categories"
            />
            <SingleDropdownList
              componentId="localisationSensor"
              dataField="localisation.keyword"
              title="Localisation"
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
          <div style={styles.rightCol}>
            <div style={{...styles.directorRow, ...styles.directorTitle}}>
              <div style={{...styles.directorName, ...styles.bold}}>
                Directors.
              </div>
              <div style={{...styles.directorCat, ...styles.bold}}>
                Catégory.
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
            </div>
          </div>
        </div>
      </ReactiveBase>
      </div>
    );
  }

  RealReactiveList(data) {
    console.log("RealReactiveList data >>>", data);
    var directorDOP, directorFilm, directorPrint
    directorPrint = (data.print ? "Print" : '' )
    directorFilm = (data.film ? "Film" : '' )
    directorDOP = (data.DOP ? "DOP" : '' )
    return(
      <div key={data._id} style={styles.directorRow}>
        <div className='directorName' style={styles.directorName}>
          <Link to={`/director/${data.firstName}-${data.lastName}`}>{data.firstName} {data.lastName}</Link>
        </div>
        <div style={styles.directorCat}>
          {data.category}
        </div>
        <div style={styles.directorLoca}>
          {data.localisation}
        </div>
        <div style={styles.directorLinks}>
          <a href={data.vimeo} target='blank'>V</a> <a href={data.instagram} target='blank'>I</a>
        </div>
        <div style={styles.directorType}>
          {directorPrint} {directorFilm} {directorDOP}
        </div>
      </div>
    )
  }
}

var styles = {
  header : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 20
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
    flexDirection : 'column',
    width : '25vw',
    marginRight : '20px',
    marginLeft : '30px'
  },
  results : {
    display : 'flex',
  },
  filtersLeft : {
    width : 'auto'
  },
  filtersRight : {
    width : 'auto',
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
  },
  rightCol : {

  },
  leftCol : {

  },
  mainContainer : {
    display : 'flex',
    marginTop : 50
  }
}
