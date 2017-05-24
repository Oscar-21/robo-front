/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'; 
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu'; 
import Responsive from 'react-responsive';

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.state allows us to access all
    // state variables of an object class
    this.state = {
      title: '',
      subheader: '',
      body: '',
      image: '',
      preview: '',
      image2: '',
      preview2: '',
      firstCharacter: '',
      token: sessionStorage.getItem('token'),
      menuOpen: false,
    };
  }
  handleMenu = () => {
    if (this.state.menuOpen === false) {
      console.log('token dash:'.concat(this.state.token));
      this.setState({ menuOpen: true });
    } else if (this.state.menuOpen === true) {
      this.setState({ menuOpen: false });
      console.log('token dash:'.concat(this.state.token));
    }
  }
  showMenu = () => {
    const styleMobile = {
      display: 'inline-block',
      margin: '16px 32px 16px 0',
    };
    const paperStyle = {
      display: 'inline-block',
      position: 'absolute',
      margin: '16px 32px 16px 0',
    };
    if (this.state.menuOpen === true) {
      return (
        <div>
          <Responsive minDeviceWidth={1024}>
         <Paper style={paperStyle}>
              <Menu> 
                <MenuItem primaryText="Home" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="About us" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="Browse" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="Contribute" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="Our Friends" containerElement={<Link to="/"></Link>} />
           </Menu>
            </Paper>
          </Responsive>
          <Responsive maxDeviceWidth={1023}>
        <Paper style={styleMobile}>
              <Menu>
                <MenuItem primaryText="Home" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="About us" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="Browse" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="Contribute" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="Our Friends" containerElement={<Link to="/"></Link>} />
                <MenuItem primaryText="Log in" containerElement={<Link to="/"></Link>} />
         </Menu>
            </Paper>
          </Responsive>
        </div>
      );
    }
  }
  // function definition of handleTitle
  //  to pass it a parameter:
  //      parameter={this.handleTitle}
  //  to have it run conintuously:
  //      {handleTitle()}
  // the {} are to tell the compiler to read
  // text as javascript
  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  }
  handleSubheader = (event) => {
    this.setState({ subheader: event.target.value });
  }
  handleBody = (event) => {
    this.setState({ body: event.target.value });
  }
  handleImage = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({ image: file, preview: reader.result });
    };
    reader.readAsDataURL(file);
  }
  handleImage2 = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({ image2: file, preview2: reader.result });
    };
    reader.readAsDataURL(file);
  }

  storeArticle = () => {
      var data = new FormData();
      data.append('title', this.state.title);
      data.append('subheader', this.state.subheader);
      data.append('body', this.state.body);
      data.append('image', this.state.image);
      data.append('image2', this.state.image2);
      fetch('http://localhost:8000/api/storeArticle?token='+this.state.token, {
        method: 'post',
        body: data,
        headers: { 'Authorization':'Bearer '+this.state.token }
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (json.success) {
          alert(json.success);
        } else if (json.error) {
          alert(json.error);
        }
      });
    }

  render() {
    const navStyleMobile = {
      fontFamily: 'Trebuchet MS',
      fontStyle: 'light',
      fontWeight: '400',
      fontSize: '1.1em',
      textTransform: 'uppercase',
      background: 'url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)',
    };
    const mainStyle = {
      fontFamily: 'Lato',
      fontSize: '1.5em',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    };
    const middleStyle = {
      marginLeft: '40%',
    };
    const middleStyle3 = {
      marginLeft: '35%',
    };
    const middleStyle2 = {
      width: '50%',
      marginBottom: '5%',
      paddingTop: '10%',
      marginLeft: '20%',
      border: '1px solid blue',
    };
    const middleStyleMobile = {
      marginLeft: '1px',
    };
    const middleStyle3Mobile = {
      marginLeft: '1px',
    };
    const middleStyle2Mobile = {
      width: '50%',
      marginBottom: '5%',
      paddingTop: '10%',
      border: '1px solid blue',
    };
    const colorStyle = {
      background: 'url(https://68.media.tumblr.com/8ba6be52a6cb41fe964cd7fbb94a3e02/tumblr_on2pafGDUw1vieawno1_1280.jpg)',
    };
    return (
      <div>
        <Helmet title="Dashboard" meta={[{ name: 'description', content: 'Description of Dashboard' }]} />

        <div style={mainStyle}>
          <div>
            <div>
              <AppBar onLeftIconButtonTouchTap={this.handleMenu} title="Word on Reel Weekly" titleStyle={navStyleMobile} style={colorStyle}  />
            </div>
            {this.showMenu()}
          </div>

          <Responsive minDeviceWidth={1024}>
            <div style={middleStyle}>
              Article Title
            </div>

            <div style={middleStyle3}>
              <input style={{ marginBottom: '5%', border: '1px solid blue' }} onChange={this.handleTitle} type="text" placeholder="Title" />
            </div>

            <div style={middleStyle}>
              Article Subheader
            </div>

            <div style={middleStyle3}>
              <input style={{ marginBottom: '5%', border: '1px solid blue' }} onChange={this.handleSubheader} type="text" placeholder="Title" />
            </div>

            <div style={middleStyle}>
              Article Body
            </div>

            <textarea style={middleStyle2} onChange={this.handleBody} placeholder="Body"></textarea>

            <div style={middleStyle}>
              <div style={{ marginBottom: '1%' }}>
                Article image
              </div>

              <input style={{ marginBottom: '10%' }} onChange={this.handleImage} type="file" />
              <img src={this.state.preview} alt="" />
            </div>

            <div style={middleStyle}>
              <div style={{ marginBottom: '1%' }}>
                Homepage image
              </div>

              <input style={{ marginBottom: '10%' }} onChange={this.handleImage2} type="file" />
              <img src={this.state.preview2} alt="" />
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
            <div style={middleStyleMobile}>
              Article Title
            </div>

            <div style={middleStyle3Mobile}>
              <input style={{ marginBottom: '5%', border: '1px solid blue' }} onChange={this.handleTitle} type="text" placeholder="Title" />
            </div>

            <div style={middleStyleMobile}>
              Article Subheader
            </div>

            <div style={middleStyle3Mobile}>
              <input style={{ marginBottom: '5%', border: '1px solid blue' }} onChange={this.handleSubheader} type="text" placeholder="Title" />
            </div>

            <div style={middleStyleMobile}>
              Article Body
            </div>

            <textarea style={middleStyle2Mobile} onChange={this.handleBody} placeholder="Body"></textarea>

            <div style={middleStyleMobile}>
              <div style={{ marginBottom: '1%' }}>
                Article image
              </div>

              <input style={{ marginBottom: '10%' }} onChange={this.handleImage} type="file" />
              <img src={this.state.preview} alt="" />
            </div>

            <div style={middleStyleMobile}>
              <div style={{ marginBottom: '1%' }}>
                Homepage image
              </div>

              <input style={{ marginBottom: '10%' }} onChange={this.handleImage2} type="file" />
              <img src={this.state.preview2} alt="" />
            </div>
          </Responsive>
        </div>

        <div>
          <RaisedButton label="Submit" primary={true} style={middleStyle} onTouchTap={this.storeArticle} />
        </div>
      </div>
    );
  }
}
