import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
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

const profilesList = ['Director', 'DOP', 'Make up', 'Stylist', 'Hair', 'Line prod', 'Art Dir', 'Steadicam', 'Ass Cam', 'DIT', 'Gaffer', 'Grip', 'Set designer', 'SFX', 'Choreographer', 'Food Stylist', 'Motion designer']

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

export default function SubmitForm(props) {
  const classes = useStyles();
  var initData = {
    name: props.name,
    localisation : props.localisation,
    category : props.category,
    subcategories : props.subcategories,
    situation : props.situation,
    content : props.content,
    contactEmail : props.contactEmail,
    contactPhone : props.contactPhone,
    label : props.label,
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
    handleOpenModal: props.handleOpenModal
  }

  const [values, setValues] = useState({...initData});

  useEffect(() => {
    setValues({
      ...values,
      name: props.name,
      localisation : props.localisation,
      category : props.category,
      subcategories : props.subcategories,
      situation : props.situation,
      content : props.content,
      contactEmail : props.contactEmail,
      contactPhone : props.contactPhone,
      label : props.label,
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
      handleOpenModal: props.handleOpenModal
    });

    setProfiles(props.profiles)

  }, [initData.name])

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [profiles, setProfiles] = React.useState([]);

  const handleChangeSimple = event => {
    setProfiles(event.target.value);
  };

  if (props.editMode) {
    var handleSubmit = function() {
      console.log('Submit update director');
      fetch(`${backEndAddress}/updatedirector`, {
       method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body: `oldName=${props.oldName}&directorName=${values.name}&directorLoca=${values.localisation}&directorCat=${values.category}&directorSubCat=${values.subcategories}&directorProfile=${profiles}&directorSituation=${values.situation}&directorContent=${values.content}&directorContactEmail=${values.contactEmail}&directorContactPhone=${values.contactPhone}&directorLabel=${values.label}&directorContacted=${values.contacted}&directorWebsite=${values.website}&directorVimeo=${values.vimeo}&directorInsta=${values.insta}&directorVideo1=${values.video1}&directorVideoSource1=${values.videoSource1}&directorVideo2=${values.video2}&directorVideoSource2=${values.videoSource2}&directorVideo3=${values.video3}&directorVideoSource3=${values.videoSource3}&directorVideo4=${values.video4}&directorVideoSource4=${values.videoSource4}`
      })
      .then(function(response) {
        return response.json()
      })
      .then(function (data) {
        console.log('UPDATE DIRECTOR - fetch data >>', data)
      })
    }
  } else {
    handleSubmit = function() {
      console.log('Submit create director');
      fetch(`${backEndAddress}/createdirector`, {
       method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body: `directorName=${values.name}&directorLoca=${values.localisation}&directorCat=${values.category}&directorSubCat=${values.subcategories}&directorProfile=${profiles}&directorSituation=${values.situation}&directorContent=${values.content}&directorContactEmail=${values.contactEmail}&directorContactPhone=${values.contactPhone}&directorLabel=${values.label}&directorContacted=${values.contacted}&directorWebsite=${values.website}&directorVimeo=${values.vimeo}&directorInsta=${values.insta}&directorVideo1=${values.video1}&directorVideoSource1=${values.videoSource1}&directorVideo2=${values.video2}&directorVideoSource2=${values.videoSource2}&directorVideo3=${values.video3}&directorVideoSource3=${values.videoSource3}&directorVideo4=${values.video4}&directorVideoSource4=${values.videoSource4}`
      })
      .then(function(response) {
        return response.json()
      })
      .then(function (data) {
        console.log('CREATE DIRECTOR - fetch data >>', data)
      })
    }
  }



  // handleModal = (bool, origin, form) => {
	// 	if (bool) {
	// 		this.setState({
	// 			popin: bool,
	// 			popinClosing: false,
	// 			popinTarget: origin,
	// 			deletedForm : form
	// 		})
	// 	} else if (bool) {
	// 		// on popin opening
	// 		this.setState({
	// 			popin: bool,
	// 			popinClosing: false,
	// 			popinTarget: origin
	// 		})
	// 	} else {
	// 		// on popin closing
	// 		this.setState({
	// 			popinClosing: true
	// 		}, _=> {
	// 			setTimeout(() => {
	// 				this.setState({
	// 					popin: bool,
	// 					popinTarget: origin,
	// 					deletedForm: {}
	// 				})
	// 			}, 400);
	// 		})
	// 	}
	// }

	// handleDeleteTalent = () => {
	// 	let filteredData = this.state.answers.filter(item => (
	// 		item.form.id !== this.state.deletedForm.id
	// 	))
	// 	this.setState({answers : filteredData}
	// 		,_=> {
	// 		this.setState({
	// 			popinClosing: true
	// 		}, _=> {
	// 			setTimeout(() => {
	// 				this.setState({
	// 					popin: false,
	// 					popinTarget: null,
	// 				})
	// 			}, 400);
	// 		})
	// 	})
  // }

  return (
    <>
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
          <FormControl className={classes.textField}>
            <InputLabel id="profile">Profile</InputLabel>
            <Select
              labelid="profile"
              id="profile-multiple"
              multiple
              value={profiles}
              onChange={handleChangeSimple}
              input={<Input />}
              renderValue={selected => selected.join(', ')}
            >
              {profilesList.map(item => (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={profiles.indexOf(item) > -1} />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <TextField
            id="subcategories"
            label="Sub categories"
            className={classes.textField}
            value={values.subcategories}
            onChange={handleChange('subcategories')}
            margin="normal"
          />
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
          {/* <TextField
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
              <MenuItem key='yes' value={'Vimeo'}>
                {'Vimeo'}
              </MenuItem>
              <MenuItem key='no' value={'Youtube'}>
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
              <MenuItem key='yes' value={'Vimeo'}>
                {'Vimeo'}
              </MenuItem>
              <MenuItem key='no' value={'Youtube'}>
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
              <MenuItem key='yes' value={'Vimeo'}>
                {'Vimeo'}
              </MenuItem>
              <MenuItem key='no' value={'Youtube'}>
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
              id="videoSource4"
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
              <MenuItem key='yes' value={'Vimeo'}>
                {'Vimeo'}
              </MenuItem>
              <MenuItem key='no' value={'Youtube'}>
                {'Youtube'}
              </MenuItem>
            </TextField>
          </div>
        </Grid>
      </form>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
        <button style={styles.deleteButton} onClick={values.handleOpenModal}>Delete this talent</button>
        <Link style={{ marginTop : 20, marginRight: 20, marginBottom: 60, marginLeft: 396 }}to='/'><button style={styles.cancelButton}>Cancel</button></Link>
        <button style={styles.editButton} onClick={handleSubmit}>Submit</button>
      </div>
    </>
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
  }
}));

var styles = {
  editButton : {
    backgroundColor: 'black',
    color: 'white',
    borderStyle: 'none',
    marginTop: 20,
    marginBottom: 60,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 25,
    paddingRight: 25,
    cursor: 'pointer'
  },
  cancelButton : {
    backgroundColor: 'white',
    color: 'black',
    borderWidth: '1px',
    borderColor: 'black',
    // marginTop : 20,
    // marginRight: 20,
    // marginBottom: 60,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 25,
    paddingRight: 25,
    cursor: 'pointer',
    // position: 'relative',
    // marginLeft: 396
  },
  deleteButton: {
    backgroundColor: '#f70000',
    color: 'white',
    borderStyle: 'none',
    marginTop: 20,
    marginBottom: 60,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 25,
    paddingRight: 25,
    cursor: 'pointer',
    position: 'absolute',
    left: 460
  }
}
