import React from 'react';
import { ReactiveBase, MultiList, SingleDropdownList, MultiDropdownList, ReactiveList, SelectedFilters } from '@appbaseio/reactivesearch';
import { Link, withRouter } from "react-router-dom";
import Header from './header'
import "../App.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage : this.props.match.path,
      isDashboard: true
    }
  }
  render() {
    return (
      <div className = "main-container">
      <ReactiveBase app = "gpop-data2" credentials = "MRwR0u06C:c0903d48-7bad-4a8f-ae7f-c5c1e0b8bb9a">
        <Header currentPage={this.state.currentPage} isDashboard={this.state.isDashboard}/>
        <div style={styles.header}>
          <div style={styles.h1}>
            <h1>Talents database.</h1>
          </div>
        </div>
        <div style={styles.mainContainer}>
          <div style={styles.filters}>
            <div style={styles.filtersLeft}>
              <h2>Filters</h2>
              <MultiDropdownList
                componentId="profilesSensor"
                dataField="profiles.keyword"
                title="Profile"
              />
              <MultiList
                componentId="categoriesList"
                dataField="category.keyword"
                title="Category"
                className="categories-filter"
                size={5}
                sortBy="asc"
                queryFormat="or"
                selectAllLabel="All categories"
                showCheckbox={true}
                showCount={true}
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
            <MultiDropdownList
              componentId="subcategoriesSensor"
              dataField="subcategories.keyword"
              title="Sub categories"
            />
            <MultiDropdownList
              componentId="localisationSensor"
              dataField="localisation.keyword"
              title="Localisation"
              className="categories-filter"
            />
            <SingleDropdownList
              componentId="contentSensor"
              dataField="content.keyword"
              title="Content"
              className='leftSingleDropdownList'
            />
            <MultiDropdownList
              componentId="situationSensor"
              dataField="situation.keyword"
              title="Situation"
              className="categories-filter"
            />
            <MultiDropdownList
              componentId="pouetSensor"
              dataField="pouet.keyword"
              title="Pouet"
            />
            <SelectedFilters />
          </div>
          <div style={styles.rightCol}>
            <div style={{...styles.directorRow, ...styles.directorTitle}}>
              <div style={{...styles.directorName, ...styles.bold}}>
                Talent.
              </div>
              <div style={{...styles.directorProfile, ...styles.bold}}>
                Profile.
              </div>
              <div style={{...styles.directorCat, ...styles.bold}}>
                Category.
              </div>
              <div style={{...styles.directorSubCat, ...styles.bold}}>
                Subcategories.
              </div>
              <div style={{...styles.directorLoca, ...styles.bold}}>
                Localisation.
              </div>
              <div style={{...styles.directorLinks, ...styles.bold}}>
                Links.
              </div>
            </div>
            <div style={styles.results}>
              <ReactiveList
                componentId="searchResult"
                dataField="name.keyword"
                stream={true}
                pagination={false}
                paginationAt="bottom"
                pages={15}
                sortBy="asc"
                size={50}
                loader="Loading Results.."
                showResultStats={false}
                renderItem={this.RealReactiveList}
                react={{
                    and: ["mainSearch", "profilesSensor", "categoriesList", "localisationSensor", "situationSensor", "contentSensor", "subcategoriesSensor"]
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
    var directorSubCat, directorVimeo, directorSite, directorInsta, directorProfiles
    directorSubCat = data.subcategories.join(' ')
    if (directorSubCat.length > 30) {
      directorSubCat = directorSubCat.slice(0, 30) + '...'
    }
    if (data.profiles) {
      directorProfiles = data.profiles.join(' ')
    }
    if (data.profiles && directorProfiles.length > 25) {
      directorProfiles = directorProfiles.slice(0, 25) + '...'
    }
    directorVimeo = (data.vimeo ? <a href={data.vimeo} target='_blank'>Vimeo</a> : null)
    directorSite = (data.website ? <a href={data.website} target='_blank'>Site</a> : null)
    directorInsta = (data.instagram ? <a href={data.instagram} target='_blank'>Insta</a> : null)

    return(
      <div key={data._id} style={styles.directorRow}>
        <div className='directorName' style={styles.directorName}>
          <Link to={`/director/${data.name}`}>{data.name}</Link>
        </div>
        <div style={styles.directorProfile}>
          {directorProfiles}
        </div>
        <div style={styles.directorCat}>
          {data.category}
        </div>
        <div style={styles.directorSubCat}>
          {directorSubCat}
        </div>
        <div style={styles.directorLoca}>
          {data.localisation}
        </div>
        <div style={styles.directorLinks} className='directorLinks'>
          {directorSite} {directorVimeo} {directorInsta}
        </div>
      </div>
    )
  }
}

export default withRouter(Dashboard)

var styles = {
  header : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 80
  },
  h1 : {
    textAlign: 'center',
    fontFamily : 'Montserrat'
  },
  pictoBack : {
    position: 'absolute',
    left : '10px'
  },
  filters : {
    display : 'flex',
    flexDirection : 'column',
    width : '15vw',
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
    width: '80vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent : 'center',
    fontSize: '14px',
    marginRight : '10px'
  },
  directorName : {
    width: '17vw',
    textAlign: 'center',
    height : '30px',
    paddingTop : '8px',
    marginBottom: '5px',
    fontFamily : 'Montserrat',
    fontWeight: 'bold'
  },
  directorCat : {
    width: '14vw',
    textAlign: 'center',
    height : '30px',
    paddingTop : '8px',
    marginBottom: '5px',
    fontFamily : 'Montserrat'
  },
  directorProfile: {
    width: '16vw',
    textAlign: 'center',
    height : '30px',
    paddingTop : '8px',
    marginBottom: '5px',
    fontFamily : 'Montserrat'
  },
  directorSubCat : {
    width: '18vw',
    textAlign: 'center',
    height : '30px',
    paddingTop : '8px',
    marginBottom: '5px',
    fontFamily : 'Montserrat'
  },
  directorLoca : {
    width: '15vw',
    textAlign: 'center',
    height : '30px',
    paddingTop : '8px',
    marginBottom: '5px',
    fontFamily : 'Montserrat'
  },
  directorLinks : {
    width: '10vw',
    textAlign: 'center',
    height : '30px',
    paddingTop : '8px',
    marginBottom: '5px',
    fontFamily : 'Montserrat'
  },
  directorTitle : {
    borderBottom : '2px solid black',
    marginBottom : 15
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
    width : "75vw"
  },
  leftCol : {

  },
  mainContainer : {
    display : 'flex',
    marginTop : 50
  }
}
