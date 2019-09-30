import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import backEndAddress from '../config';

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
];

export default function SubmitForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    localisation : '',
    category : '',
    subcategories : '',
    situation : '',
    content : '',
    contactEmail : '',
    contactPhone : '',
    label : '',
    reckitt : '',
    contacted : '',
    website : '',
    vimeo : '',
    insta : '',
    video1 : '',
    video2 : '',
    video3 : '',
    video4 : '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [state, setState] = React.useState({
    print :  false,
    film :  false,
    dop :  false,
  });

  const handleChangeSelect = name => event => {
  setState({ ...state, [name]: event.target.checked });
  };

  console.log("values", values);

  var videoList = {
    videoUrl1 : values.video1,
    videoUrl2 : values.video2,
    videoUrl3 : values.video3,
    videoUrl4 : values.video4
  }

  var appBaseBody = {
    firstName : values.name,
    localisation : values.localisation,
    category : values.category,
    subcategories : values.subcategories,
    print : state.print,
    film : state.film,
    DOP : state.dop,
    situation : values.situation,
    content : values.content,
    email : values.contactEmail,
    phone : values.contactPhone,
    label : values.label,
    reckitt : values.reckitt,
    contact : values.contacted,
    website : values.website,
    vimeo : values.vimeo,
    instagram : values.insta,
    video1 : values.video1,
    video2 : values.video2,
    video3 : values.video3,
    video4 : values.video4
  }

  console.log("appBaseBody", appBaseBody);

  var appBaseData = JSON.stringify(appBaseBody)

  console.log("appBaseData", appBaseData);

  var handleSubmit = function() {
    console.log('Submit !!!');
    fetch(`${backEndAddress}/createdirector`, {
     method: 'POST',
     headers: {'Content-Type':'application/x-www-form-urlencoded'},
     body: `directorName=${values.name}&directorLoca=${values.localisation}&directorCat=${values.category}&directorSubCat=${values.subcategories}&directorTypePrint=${state.print}&directorTypeFilm=${state.film}&directorTypeDop=${state.dop}&directorSituation=${values.situation}&directorContent=${values.content}&directorContactEmail=${values.contactEmail}&directorContactPhone=${values.contactPhone}&directorLabel=${values.label}&directorReckitt=${values.reckitt}&directorContacted=${values.contacted}&directorWebsite=${values.website}&directorVimeo=${values.vimeo}&directorInsta=${values.insta}&directorVideo1=${values.video1}&directorVideo2=${values.video2}&directorVideo3=${values.video3}&directorVideo4=${values.video4}`
    })
    .then(function(response) {
      return response.json()
    })
    .then(function (data) {
      console.log('CREATE DIRECTOR - fetch data >>', data)
    })
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
        <FormLabel component="legend">Director type</FormLabel>
        <FormGroup row>
         <FormControlLabel className={classes.printFilmDop}
           control={
             <Checkbox checked={state.print} onChange={handleChangeSelect('print')} value="print" />
           }
           label="Print"
         />
         <FormControlLabel className={classes.printFilmDop}
           control={
             <Checkbox checked={state.film} onChange={handleChangeSelect('film')} value="film" />
           }
           label="Film"
         />
         <FormControlLabel className={classes.printFilmDop}
           control={
             <Checkbox checked={state.dop} onChange={handleChangeSelect('dop')} value="dop" />
           }
           label="DOP"
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
      <TextField
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
      </TextField>
      <h2 style={{textAlign : 'center', marginTop : 40}}>Videos</h2>
      <TextField
        id="video1"
        label="Video #1"
        className={classes.textField}
        value={values.video1}
        onChange={handleChange('video1')}
        margin="normal"
      />
      <TextField
        id="video2"
        label="Video #2"
        className={classes.textField}
        value={values.video2}
        onChange={handleChange('video2')}
        margin="normal"
      />
      <TextField
        id="video3"
        label="Video #3"
        className={classes.textField}
        value={values.video3}
        onChange={handleChange('video3')}
        margin="normal"
      />
      <TextField
        id="video4"
        label="Video #4"
        className={classes.textField}
        value={values.video4}
        onChange={handleChange('video4')}
        margin="normal"
      />
      <div style={{width : '600px', textAlign : 'right' }}>
        <button style={styles.editButton} onClick={handleSubmit}>Submit</button>
      </div>
      </Grid>
    </form>
  );
}


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
