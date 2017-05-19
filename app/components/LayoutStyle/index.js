/**
*
* LayoutStyle
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Responsive from 'react-responsive';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class LayoutStyle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      siteName: 'Bootcamp'
    };
  }
  // function whose purpose is to, when called,
  // change the state of menuOpen to false
  handleMenu = () => {
    if (this.state.menuOpen === false) {
      this.setState({menuOpen: true});
    } else if (this.state.menuOpen === true) {
      this.setState({menuOpen: false});
    }
  }

  // function that will run continuously
  // and wait for menuOpen to evaluate to
  // true, at which point it will return
  // its values/properties?
  showMenu = () => {
    const nav = {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      background: '#F5F5F5',
      width: '75%',
      position: 'absolute'
    };
    const navLink = {
      textAlign: 'center',
      padding: '3px'
    };

    if (this.state.menuOpen === true) {
      return (
        <nav style={nav}>
          <RaisedButton containerElement={< Link to = "/" > </Link>} primary={true} label="Home" style={navLink}/>

          <RaisedButton containerElement={< Link to = "/About" > </Link>} primary={true} label="About us" style={navLink}/>

          <RaisedButton containerElement={< Link to = "/Browse" > </Link>} label="Browse" primary={true} style={navLink}/>

          <RaisedButton label="Contribute" primary={true} containerElement={< Link to = "/Dashboard" > </Link>} style={navLink}/>

          <RaisedButton label="Our Friends" primary={true} containerElement={< Link to = "/" > </Link>} style={navLink}/>
        </nav>
      );
    }
  }
  render() {
    // Mobile stylings
    const navStyleMobile = {
      fontFamily: 'Trebuchet MS',
      fontStyle: 'light',
      fontWeight: '400',
      fontSize: '1.1em',
      textTransform: 'uppercase',
      background: '#607D8B'
    };
    const colorStyle = {
      background: '#607D8B'
    };
    // Navbar and Title begins hear
    const mainStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'fixed',
      top: '0',
      /*border: '1px solid ',*/
      background: '#607D8B',
      backgroundSize: 'cover'
    };
    const titleStyleLap = {
      fontFamily: 'Trebuchet MS',
      fontStyle: 'light',
      fontWeight: '400',
      fontSize: '1.1em',
      color: 'white',
      paddingLeft: '5%',
      marginTop: '1%'
    };
    const navStyle = {
      display: 'flex',
      flexDirection: 'row',
      textTransform: 'uppercase',
      textAlign: 'center',
      verticalAlign: 'middle',
      letterSpacing: '1.75px',
      fontSize: '11px',
      fonFamily: 'Montserrat',
      textDecoration: 'None',
      color: 'black'
    };
    const socialStyle = {
      marginLeft: '20%'
    };
    const linkStyle = {
      marginLeft: '30%'
    };
    const loginButton = {
      fontSize: '.88em'
    };
    return (
      <div>
        <Responsive minDeviceWidth={1024}>
          <div style={mainStyle}>
            <div style={titleStyleLap}>
              Sumo Robot League
            </div>

            <nav style={navStyle}>
              <div style={linkStyle}>
                <Link to="/" style={{
                  textDecoration: 'none',
                  color: 'white'
                }}>
                  /&nbsp; Home &nbsp;
                </Link>

                <Link to="/About" style={{
                  textDecoration: 'none',
                  color: 'white'
                }}>
                  /&nbsp; about us &nbsp;
                </Link>

                <Link to="/Browse" style={{
                  textDecoration: 'none',
                  color: 'white'
                }}>
                  /&nbsp; browse by topic &nbsp;/
                </Link>

                <Link to="/Dashboard" style={{
                  textDecoration: 'none',
                  color: 'white'
                }}>
                  &nbsp; contribute &nbsp;
                </Link>

                <Link to="/" style={{
                  textDecoration: 'none',
                  color: 'white'
                }}>
                  /&nbsp; our friends &nbsp; /
                </Link>
              </div>

              <div style={socialStyle}>
                <Link to="/SignIn" style={{
                  textDecoration: 'none',
                  color: 'white'
                }}>
                  |&nbsp; Sign In &nbsp;
                </Link>

                <Link to="SignUp" style={{
                  textDecoration: 'none',
                  color: 'white'
                }}>
                  |&nbsp; Sign Up &nbsp;|
                </Link>
              </div>
            </nav>
          </div>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
          <div>
            <AppBar iconElementRight={< FlatButton labelStyle = {
              loginButton
            }
            containerElement = { < Link to = "/SignIn" > </Link>
            }
            label = "Login" />} onLeftIconButtonTouchTap={this.handleMenu} title="Word on Reel Weekly" titleStyle={navStyleMobile} style={colorStyle}/>
          </div>
          {this.showMenu()}
        </Responsive>
      </div>
    );
  }
}

export default LayoutStyle;
