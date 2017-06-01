/*
 *
 * Home
 *
 */
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Responsive from 'react-responsive';
import NavBar from 'components/NavBar';
import Hello from 'components/Hello';
export default class Home extends React.PureComponent {
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
    const grid = {
      margin: '0 auto',
      width: '100%',
    };
    const row = {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    };
    const rowMobile = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      overflow: 'auto',
    };
    const col2 = {
      width: '16.66%',
      padding: '10px',
      flexWrap: 'wrap',
      overflow: 'auto',
    };
    const col4 = {
      width: '30.33%',
      padding: '1px',
      overflow: 'auto',
    };
    const col4Mobile = {
      width: '100%',
      padding: '5px',
      overflow: 'auto',
    };
    const col12 = {
      width: '100%',
      padding: '3px',
      overflow: 'auto',
    };
    const borderStyle = {
      width: '100%',
      height: '.2vh',
      background: 'black',
    };
    return (
      <div>
        <Helmet
          title="Home" meta={[{
            name: 'description',
            content: 'Description of Home',
          },
          ]}
        />
        <header></header>
        <main style={backgroundStyle}>
          <div style={backgroundContentBox}>
            <div style={grid}>
              <div style={borderStyle}></div>
              <Responsive minDeviceWidth={1024}>
                <NavBar />
                <Hello />
                <div style={row}>
                  <div style={col12}>
                  </div>
                </div>
              </Responsive>
              <Responsive maxDeviceWidth={1023}>
                <div style={rowMobile}>
                  <div style={col12}>
                    <img
                      style={{
                        borderRadius: '10px',
                        width: '99vw',
                        height: '300px',
                      }} src="https://0opa1vxjlj-flywheel.netdna-ssl.com/wp-content/uploads/2015/10/sacramento-wordpress-web-development.jpg" alt=""
                    />
                  </div>
                </div>
              </Responsive>
              <Responsive minDeviceWidth={1024}>
                <div style={row}>
                  <div
                    style={{
                      col2,
                      fontSize: '1.3em',
                      fontFamily: 'tahoma',
                    }}
                  >
                    test
                  </div>
                </div>
                <div style={borderStyle}></div>
              </Responsive>
              <Responsive maxDeviceWidth={1023}>
                <div style={rowMobile}>
                  <div
                    style={{
                      col2,
                      fontSize: '1.3em',
                      fontFamily: 'tahoma',
                    }}
                  >
                    test
                  </div>
                </div>
              </Responsive>
              <Responsive minDeviceWidth={1024}>
                <div style={row}>
                  <div style={col4}>
                    <img
                      style={{
                        borderRadius: '10px',
                        height: '22.33vh',
                        width: '22.33vw',
                      }} src="https://68.media.tumblr.com/4d4bf3ed103d7b72765239086211a6a9/tumblr_okly0dAWKE1vtrs37o1_1280.jpg" alt=""
                    />
                  </div>
                  <div style={col4}>
                    <img
                      style={{
                        borderRadius: '10px',
                        height: '22.33vh',
                        width: '22.33vw',
                      }} src="https://68.media.tumblr.com/d4723a51b573ae841b6584fa70e4fba1/tumblr_oljlp0u6eQ1vkgjmeo1_400.png" alt=""
                    />
                  </div>
                  <div style={col4}>
                    <img
                      style={{
                        borderRadius: '10px',
                        height: '22.33vh',
                        width: '22.33vw',
                      }} src="https://68.media.tumblr.com/5bded6548c3a2fe8eec491739d0e4dbd/tumblr_okilf9jzeF1vkgjmeo1_500.png" alt=""
                    />
                  </div>
                </div>
              </Responsive>
              <Responsive maxDeviceWidth={1023}>
                <div style={rowMobile}>
                  <div style={col4Mobile}>
                    <img
                      style={{
                        height: '22.33vh',
                        width: '100%',
                      }} src="https://68.media.tumblr.com/4d4bf3ed103d7b72765239086211a6a9/tumblr_okly0dAWKE1vtrs37o1_1280.jpg" alt=""
                    />
                  </div>
                  <div style={col4Mobile}>
                    <img
                      style={{
                        height: '22.33vh',
                        width: '100%',
                      }} src="https://68.media.tumblr.com/d4723a51b573ae841b6584fa70e4fba1/tumblr_oljlp0u6eQ1vkgjmeo1_400.png" alt=""
                    />
                  </div>
                  <div style={col4Mobile}>
                    <img
                      style={{
                        height: '22.33vh',
                        width: '100%',
                      }} src="https://68.media.tumblr.com/5bded6548c3a2fe8eec491739d0e4dbd/tumblr_okilf9jzeF1vkgjmeo1_500.png" alt=""
                    />
                  </div>
                </div>
              </Responsive>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
