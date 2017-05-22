/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import LayoutStyle from 'components/LayoutStyle';
import RaisedButton from 'material-ui/RaisedButton';
export default class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: ''
    };
  }

  handleEmail = (event) => {
    this.setState({email: event.target.value});
  }
  handlePassword = (event) => {
    this.setState({password: event.target.value});
  }

  signIn = () => {
    var data = new FormData();
    data.append('email', this.state.email);
    data.append('password', this.state.password);
    fetch('http://localhost:8000/api/signIn', {
      method: 'post',
      body: data
    }).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.error) {
        alert(json.error);
      } else if (json.token === false) {
        alert('invalid credentials');
      } else if (json.token !== false) {
        alert('Welcome back!');
        sessionStorage.setItem('token', JSON.stringify(json.token));
        /* this.setState({token:JSON.stringify(json.token)}); */
        /* this.setState({token:json.token}); */
        this.setState({token: sessionStorage.getItem('token')});
      }
    });
  }
  render() {
    const backgroundStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      background: '#408193'
    };
    const backgroundContentBox = {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      margin: '0 auto',
      /* marginLeft: '10%', */
      marginTop: '3%',
      background: '#F5F5F5',
      width: '90%'
    };
    const titleBox = {
      marginTop: '4%',
      marginRight: '20%',
      marginLeft: '20%',
      marginBottom: '3%',
      paddingTop: '1.5%',
      paddingBottom: '1.5%',
      borderTop: '2px solid gray',
      borderBottom: '2px solid gray'
    };
    const titleStyle = {
      fontFamily: 'Source Sans Pro',
      textAlign: 'center',
      fontColor: '#0C090A',
      fontSize: '2.1em',
      fontStyle: 'light',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '6px'
    };
    const titleStyleMobile = {
      fontFamily: 'Source Sans Pro',
      textAlign: 'center',
      fontColor: '#0C090A',
      fontSize: '2em',
      fontStyle: 'light',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '4px'
    };
    const inputStyleEmail = {
      margin: '0 auto',
      marginBottom: '.4%',
      width: '20%',
      border: '1px solid black'
    };
    const inputStylePassword = {
      margin: '0 auto',
      width: '20%',
      border: '1px solid black'
    };
    const buttonStyle = {
      margin: '0 auto',
      marginTop: '2%',
      width: '13%'
    };
    const inputStyleMobile = {
      marginLeft: '25%',
      width: '45%',
      border: '1px solid black'
    };
    const buttonStyleMobile = {
      marginLeft: '38%'
    };
    return (
      <div>
        <Helmet title="SignIn" meta={[{
            name: 'description',
            content: 'Description of SignIn'
          }
        ]}/>
        <header>
          <LayoutStyle/>
        </header>

        <Responsive minDeviceWidth={1024}>
          <main style={backgroundStyle}>
            <div style={backgroundContentBox}>
              <div style={titleBox}>
                <div style={titleStyle}>
                  Login
                </div>
              </div>
              <input style={inputStyleEmail} onChange={this.handleEmail} type="text" placeholder="email"/>
              <input type="text" style={inputStylePassword} placeholder="password" onChange={this.handlePassword}/>
              <RaisedButton style={buttonStyle} label="Submit" primary={true} onTouchTap={this.signIn}/>
            </div>
          </main>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <main style={backgroundStyle}>
            <div style={backgroundContentBox}>
              <div style={titleBox}>
                <div style={titleStyleMobile}>
                  Login
                </div>
              </div>
              <input style={inputStyleMobile} type="text" placeholder="email" onChange={this.handleEmail}/>
              <input type="text" style={inputStyleMobile} placeholder="password" onChange={this.handlePassword}/>
              <div>
                <RaisedButton style={buttonStyleMobile} label="Submit" primary={true} onTouchTap={this.signIn}/>
              </div>
            </div>
          </main>
        </Responsive>
      </div>
    );
  }
}
