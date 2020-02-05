import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import backEndAddress from '../config';

const categories = [
  {
    value: 'CGI',
  },
  {
    value: 'Comedy',
  },
  {
    value: 'Fashion',
  },
  {
    value: 'Lifestyle',
  },
  {
    value: 'Storytelling',
  },
  {
    value: 'Car',
  },
  {
    value: 'Not specialized',
  },
];

const profiles = [
  {
    value: 'Director',
  },
  {
    value: 'Photographer',
  },
  {
    value: 'DOP',
  },
  {
    value: 'Stylist',
  },
  {
    value: 'Hair',
  },
  {
    value: 'Makeup',
  },
  {
    value: 'Set designer',
  },
];

export default function SubmitForm(props) {
  const classes = useStyles();
  var initData = {
    name: props.name,
    localisation : props.localisation,
    category : props.category,
    subcategories : props.subcategories,
    // profiles : props.profiles,
    situation : props.situation,
    content : props.content,
    contactEmail : props.contactEmail,
    contactPhone : props.contactPhone,
    label : props.label,
    // reckitt : props.reckitt,
    contacted : props.contacted,
    website : props.website,
    vimeo : props.vimeo,
    insta : props.insta,
    video1 : props.video1,
    videoSource1: props.videoSource1,
    video2 : props.video2,
    videoSource2: props.videoSource2,
    video3 : props.video3,
    videoSource3: props.videoSource3,
    video4 : props.video4,
    videoSource4: props.videoSource4,
  }

  const [values, setValues] = useState({...initData});

  useEffect(() => {
    setValues({
      ...values,
      name: props.name,
      localisation : props.localisation,
      category : props.category,
      subcategories : props.subcategories,
      // profiles : props.profiles,
      situation : props.situation,
      content : props.content,
      contactEmail : props.contactEmail,
      contactPhone : props.contactPhone,
      label : props.label,
      // reckitt : props.reckitt,
      contacted : props.contacted,
      website : props.website,
      vimeo : props.vimeo,
      insta : props.insta,
      video1 : props.video1,
      videoSource1: props.videoSource1,
      video2 : props.video2,
      videoSource2: props.videoSource2,
      video3 : props.video3,
      videoSource3: props.videoSource3,
      video4 : props.video4,
      videoSource4: props.videoSource4
    });

    let profilesTmp = {}
    props.profiles.map(item => {
      profilesTmp[item] = true
      return {
        profilesTmp,
      }
    })
    setState({profilesTmp})
  }, [initData.name])

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [state, setState] = React.useState({
    director: false,
    photographer: false,
    dop: false,
    stylist: false,
    hair: false,
    makeup: false,
    set: false
  });

  const [profiles, setProfiles] = React.useState({
    profiles: []
  });

  const handleChangeSelect = name => event => {
    setState({ ...state, [name]: event.target.checked });

    let profilesTmp = [...profiles]
    profilesTmp.push(name)
    setProfiles({profiles: profilesTmp})
  };

  // var videoList = {
  //   videoUrl1 : values.video1,
  //   videoUrl2 : values.video2,
  //   videoUrl3 : values.video3,
  //   videoUrl4 : values.video4
  // }

  if (props.editMode) {
    var handleSubmit = function() {
      console.log('Submit update director');
      fetch(`${backEndAddress}/updatedirector`, {
       method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body: `oldName=${props.oldName}&directorName=${values.name}&directorLoca=${values.localisation}&directorCat=${values.category}&directorSubCat=${values.subcategories}&directorProfile=${values.profiles}&directorSituation=${values.situation}&directorContent=${values.content}&directorContactEmail=${values.contactEmail}&directorContactPhone=${values.contactPhone}&directorLabel=${values.label}&directorContacted=${values.contacted}&directorWebsite=${values.website}&directorVimeo=${values.vimeo}&directorInsta=${values.insta}&directorVideo1=${values.video1}&directorVideoSource1=${values.videoSource1}&directorVideo2=${values.video2}&directorVideoSource2=${values.videoSource2}&directorVideo3=${values.video3}&directorVideoSource3=${values.videoSource3}&directorVideo4=${values.video4}&directorVideoSource4=${values.videoSource4}`
      })
      .then(function(response) {
        return response.json()
      })
      .then(function (data) {
        console.log('UPDATE DIRECTOR - fetch data >>', data)
      })
    }
  } else {
    var handleSubmit = function() {
      console.log('Submit create director');
      fetch(`${backEndAddress}/createdirector`, {
       method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body: `directorName=${values.name}&directorLoca=${values.localisation}&directorCat=${values.category}&directorSubCat=${values.subcategories}&directorProfile=${values.profiles}&directorSituation=${values.situation}&directorContent=${values.content}&directorContactEmail=${values.contactEmail}&directorContactPhone=${values.contactPhone}&directorLabel=${values.label}&directorContacted=${values.contacted}&directorWebsite=${values.website}&directorVimeo=${values.vimeo}&directorInsta=${values.insta}&directorVideo1=${values.video1}&directorVideoSource1=${values.videoSource1}&directorVideo2=${values.video2}&directorVideoSource2=${values.videoSource2}&directorVideo3=${values.video3}&directorVideoSource3=${values.videoSource3}&directorVideo4=${values.video4}&directorVideoSource4=${values.videoSource4}`
      })
      .then(function(response) {
        return response.json()
      })
      .then(function (data) {
        console.log('CREATE DIRECTOR - fetch data >>', data)
      })
    }
  }

  return (
    <form className={classes.container} autoComplete="off">
    <Grid container justify="flex-start" direction="column" alignItems="center" spacing={3}>
      <TextField
        id="name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="category"
        label="Category"
        select
        className={classes.textField}
        value={values.category}
        onChange={handleChange('category')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
      {categories.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
      </TextField>
      {/* <TextField
        id="profiles"
        label="Profiles"
        select
        className={classes.textField}
        value={values.profiles}
        onChange={handleChange('profiles')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
      {profiles.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
      </TextField> */}
      <TextField
        id="subcategories"
        label="Sub categories"
        className={classes.textField}
        value={values.subcategories}
        onChange={handleChange('subcategories')}
        margin="normal"
      />
      <div style={{width : 600, marginTop : 16}}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Talent profile</FormLabel>
        <FormGroup row>
         <FormControlLabel className={classes.printFilmDop}
           control={
             <Checkbox checked={state.director} onChange={handleChangeSelect('director')} value="director" />
           }
           label="Director"
         />
         <FormControlLabel className={classes.printFilmDop}
           control={
             <Checkbox checked={state.photographer} onChange={handleChangeSelect('photographer')} value="photographer" />
           }
           label="Photographer"
         />
         <FormControlLabel className={classes.printFilmDop}
           control={
             <Checkbox checked={state.dop} onChange={handleChangeSelect('dop')} value="dop" />
           }
           label="DOP"
         />
         <FormControlLabel className={classes.printFilmDop}
           control={
             <Checkbox checked={state.stylist} onChange={handleChangeSelect('stylist')} value="stylist" />
           }
           label="Stylist"
         />
         <FormControlLabel className={classes.printFilmDop}
           control={
             <Checkbox checked={state.hair} onChange={handleChangeSelect('hair')} value="hair" />
           }
           label="Hair"
         />
         <FormControlLabel className={classes.printFilmDop}
           control={
             <Checkbox checked={state.makeup} onChange={handleChangeSelect('makeup')} value="makeup" />
           }
           label="Makeup"
         />
         <FormControlLabel className={classes.printFilmDop}
           control={
             <Checkbox checked={state.set} onChange={handleChangeSelect('set')} value="set" />
           }
           label="Set designer"
         />
        </FormGroup>
      </FormControl>
      </div>
      <TextField
        id="localisation"
        label="Localisation"
        className={classes.textField}
        value={values.localisation}
        onChange={handleChange('localisation')}
        margin="normal"
      />
      <TextField
        id="website"
        label="Website"
        className={classes.textField}
        value={values.website}
        onChange={handleChange('website')}
        margin="normal"
      />
      <TextField
        id="vimeo"
        label="Vimeo"
        className={classes.textField}
        value={values.vimeo}
        onChange={handleChange('vimeo')}
        margin="normal"
      />
      <TextField
        id="insta"
        label="Instagram"
        className={classes.textField}
        value={values.insta}
        onChange={handleChange('insta')}
        margin="normal"
      />
      <TextField
        id="contactEmail"
        label="Email"
        className={classes.textField}
        value={values.contactEmail}
        onChange={handleChange('contactEmail')}
        margin="normal"
      />
      <TextField
        id="contactPhone"
        label="Phone"
        className={classes.textField}
        value={values.contactPhone}
        onChange={handleChange('contactPhone')}
        margin="normal"
      />
      <TextField
        id="contacted"
        label="Contacted"
        select
        className={classes.textField}
        value={values.contacted}
        onChange={handleChange('contacted')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
        >
        <MenuItem key='yes' value={true}>
          {'Yes'}
        </MenuItem>
        <MenuItem key='no' value={false}>
          {'No'}
        </MenuItem>
      </TextField>
      <TextField
        id="situation"
        label="Situation"
        className={classes.textField}
        value={values.situation}
        onChange={handleChange('situation')}
        margin="normal"
      />
      <TextField
        id="content"
        label="Content"
        select
        className={classes.textField}
        value={values.content}
        onChange={handleChange('content')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
        >
        <MenuItem key='yes' value={true}>
          {'Yes'}
        </MenuItem>
        <MenuItem key='no' value={false}>
          {'No'}
        </MenuItem>
      </TextField>
      <TextField
        id="label"
        label="Label"
        select
        className={classes.textField}
        value={values.label}
        onChange={handleChange('label')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
        >
        <MenuItem key='yes' value={true}>
          {'Yes'}
        </MenuItem>
        <MenuItem key='no' value={false}>
          {'No'}
        </MenuItem>
      </TextField>
      {/* <TextField
        id="reckitt"
        label="Reckitt"
        select
        className={classes.textField}
        value={values.reckitt}
        onChange={handleChange('reckitt')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
        >
        <MenuItem key='yes' value={true}>
          {'Yes'}
        </MenuItem>
        <MenuItem key='no' value={false}>
          {'No'}
        </MenuItem>
      </TextField> */}
      <h2 style={{textAlign : 'center', marginTop : 40}}>Videos</h2>
      <div>
        <TextField
          id="video1"
          label="Video #1"
          className={classes.videoField}
          value={values.video1}
          onChange={handleChange('video1')}
          margin="normal"
        />
        <TextField
          id="videoSource1"
          label="Source"
          select
          className={classes.videoSourceField}
          value={values.videoSource1}
          onChange={handleChange('videoSource1')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          >
          <MenuItem key='yes' value={true}>
            {'Vimeo'}
          </MenuItem>
          <MenuItem key='no' value={false}>
            {'Youtube'}
          </MenuItem>
        </TextField>
      </div>
      <div>
        <TextField
          id="video2"
          label="Video #2"
          className={classes.videoField}
          value={values.video2}
          onChange={handleChange('video2')}
          margin="normal"
        />
        <TextField
          id="videoSource2"
          label="Source"
          select
          className={classes.videoSourceField}
          value={values.videoSource2}
          onChange={handleChange('videoSource2')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          >
          <MenuItem key='yes' value={true}>
            {'Vimeo'}
          </MenuItem>
          <MenuItem key='no' value={false}>
            {'Youtube'}
          </MenuItem>
        </TextField>
      </div>
      <div>
        <TextField
          id="video3"
          label="Video #3"
          className={classes.videoField}
          value={values.video3}
          onChange={handleChange('video3')}
          margin="normal"
        />
        <TextField
          id="videoSource3"
          label="Source"
          select
          className={classes.videoSourceField}
          value={values.videoSource3}
          onChange={handleChange('videoSource3')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          >
          <MenuItem key='yes' value={true}>
            {'Vimeo'}
          </MenuItem>
          <MenuItem key='no' value={false}>
            {'Youtube'}
          </MenuItem>
        </TextField>
      </div>
      <div>
        <TextField
          id="video4"
          label="Video #4"
          className={classes.videoField}
          value={values.video4}
          onChange={handleChange('video4')}
          margin="normal"
        />
        <TextField
          id="videoSource1"
          label="Source"
          select
          className={classes.videoSourceField}
          value={values.videoSource4}
          onChange={handleChange('videoSource4')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          >
          <MenuItem key='yes' value={true}>
            {'Vimeo'}
          </MenuItem>
          <MenuItem key='no' value={false}>
            {'Youtube'}
          </MenuItem>
        </TextField>
      </div>
      <div style={{width : '600px', textAlign : 'right' }}>
        <button style={styles.editButton} onClick={handleSubmit}>Submit</button>
      </div>
      </Grid>
    </form>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 600,
  },
  videoField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 434,
  },
  videoSourceField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  printFilmDop : {
    marginTop : theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  }
}));

var styles = {
  editButton : {
    backgroundColor : 'black',
    color : 'white',
    borderStyle : 'none',
    marginTop : 20,
    marginBottom : 60,
    paddingTop : 4,
    paddingBottom : 4,
    paddingLeft : 25,
    paddingRight : 25,
  }
}
