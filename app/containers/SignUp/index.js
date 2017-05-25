/*
 *
 * SignUp
 *
 */
import React from 'react';
import Helmet from 'react-helmet';
import NavBar from 'components/NavBar';
import Responsive from 'react-responsive';
import RaisedButton from 'material-ui/RaisedButton';
export default class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  storeUser = () => {
    const data = new FormData();
    data.append('username', this.state.username);
    data.append('password', this.state.password);
    data.append('email', this.state.email);
    fetch('http://localhost:8000/api/signUp', {
      method: 'post',
      body: data,

    }).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.success) {
        alert(json.success);
      } else if (json.error) {
        alert(json.error);
      }
    });
  }

  render() {
    const backgroundStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      background: '#000000',
    };
    const backgroundContentBox = {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '.5%',
      marginLeft: '.5%',
      background: '#FFFFFF',
      width: '98%',
      height: '100%',
    };
    const titleBox = {
      marginTop: '4%',
      marginRight: '20%',
      marginLeft: '20%',
      marginBottom: '3%',
      paddingTop: '1.5%',
      paddingBottom: '1.5%',
      borderTop: '2px solid black',
      borderBottom: '2px solid black',
    };
    const titleStyle = {
      fontFamily: 'Source Sans Pro',
      textAlign: 'center',
      fontSize: '2.1em',
      color: 'black',
      fontStyle: 'light',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '6px',
    };
    const titleStyleMobile = {
      fontFamily: 'Source Sans Pro',
      textAlign: 'center',
      fontColor: '#ECEFF1',
      fontSize: '2em',
      fontStyle: 'light',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '4px',
    };
    const inputStyleEmail = {
      margin: '0 auto',
      marginBottom: '.4%',
      width: '20%',
      border: '1px solid black',
    };
    const inputStylePassword = {
      margin: '0 auto',
      width: '20%',
      border: '1px solid black',
    };

    const inputStyleUsername = {
      margin: '0 auto',
      width: '20%',
      border: '1px solid black',
    };
    const buttonStyle = {
      margin: '0 auto',
      marginTop: '2%',
      width: '13%',
    };
    const inputStyleMobile = {
      marginLeft: '25%',
      width: '45%',
      border: '1px solid black',
    };
    const buttonStyleMobile = {
      marginLeft: '38%',
    };
    return (
      <div>
        <Helmet
          title="SignIn" meta={[{
            name: 'description',
            content: 'Description of SignIn',
          },
          ]}
        />
        <NavBar />
        <Responsive minDeviceWidth={1024}>
          <main style={backgroundStyle}>
            <div style={backgroundContentBox}>
              <div style={titleBox}>
                <div style={titleStyle}>
                  sign up
                </div>
              </div>
              <input style={inputStyleEmail} onChange={this.handleEmail} type="text" placeholder="email" />
              <input style={inputStyleUsername} onChange={this.handleUsername} type="text" placeholder="username" />
              <input type="text" style={inputStylePassword} placeholder="password" onChange={this.handlePassword} />
              <RaisedButton style={buttonStyle} label="Submit" primary onTouchTap={this.storeUser} />
            </div>
          </main>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <main style={backgroundStyle}>
            <div style={backgroundContentBox}>
              <div style={titleBox}>
                <div style={titleStyleMobile}>
                  Sign up
                </div>
              </div>
              <input style={inputStyleMobile} type="text" placeholder="email" onChange={this.handleEmail} />
              <input style={inputStyleMobile} type="text" placeholder="username" onChange={this.handleUsername} />
              <input type="text" style={inputStyleMobile} placeholder="password" onChange={this.handlePassword} />
              <div>
                <RaisedButton style={buttonStyleMobile} label="Submit" primary onTouchTap={this.storeUser} />
              </div>
            </div>
          </main>
        </Responsive>
      </div>
    );
  }
}
