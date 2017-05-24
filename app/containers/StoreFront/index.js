/*
 *
 * StoreFront
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Responsive from 'react-responsive';
/* import heroImage from '../images/sumomasklogotmjpg.jpg'; */
import botPic from '../images/SRL_head.png';

export default class StoreFront extends React.PureComponent {
  render() {
    const grid = {
      margin: '0 auto',
      /*maxWidth: '1400px',
*/      width: '100%',
    };

  /* const gridMobile = {
      margin: '0 auto',
      maxWidth: '1023px',
      width: '100%',
    }; */
    const row = {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      /*overflow: "auto"*/
    };
    const rowMobile = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      overflow: 'auto',
    };
  /* const col1 = {
      width: '8.33%',
      padding: '10px',
      flexWrap: 'wrap',
      overflow: 'auto',
      background: 'blue',
    }; */
    const col2 = {
      width: '16.66%',
      padding: '10px',
      flexWrap: 'wrap',
      overflow: 'auto',
    };

  /* const col3 = {
      width: '25%',
      padding: '10px',
      flexWrap: 'wrap',
      overflow: 'auto',
    }; */

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

  /* const col5 = {
      width: '41.66%',
      padding: '10px',
      flexWrap: 'wrap',
      overflow: 'auto',
    };
    const col6 = {
      width: '50%',
      flexWrap: 'wrap',
      overflow: 'auto',
    };
    const col62 = {
      background: 'rgb(245,250,245)',
      width: '50%',
      padding: '2px',
      textAlign: 'right',
      fontFamily: 'consolas',
      overflow: 'auto',
    };
    const col7 = {
      width: '58.33%',
      padding: '10px',
      overflow: 'auto',
    };
    const col8 = {
      width: '66.66%',
      padding: '10px',
      overflow: 'auto'
    };
    const col9 = {
      width: '75%',
      padding: '10px',
      overflow: 'auto',
    };
    const col10 = {
      width: '83.33%",
      padding: '10px',
      overflow: 'auto',
    };
    const col11 = {
      width: '91.66%",
      padding: '10px',
      overflow: 'auto',
    }; */
    const col12 = {
      width: '100%',
      padding: '3px',
      overflow: 'auto',
    };
    const col122 = {
      width: '100%',
      height: '.2vh',
      background: 'black',
    };
 /* const style = {
      margin: 12,
    };
    const tabChildNewText = {
      width: '11.1%',
      display: 'inline-block',
      border: '1px solid #999999',
      paddingTop: '1vh',
      fontFamily: 'Monteserrat',
      fontWeight: 'Bold',
      verticalAlign: 'middle',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '2.5px',
      fontSize: '13px',
      color: 'white',
    }; */
    const tabChildNewTextz = {
      width: '11.1%',
      display: 'inline-block',
      background: '#BDBEC0',
   /* border: '1px solid #999999', */
      paddingTop: '1vh',
      fontFamily: 'Monteserrat',
      fontWeight: 'Bold',
      verticalAlign: 'middle',
      /*textAlign: 'center',*/
      textTransform: 'uppercase',
      letterSpacing: '2.5px',
      fontSize: '1.1em',
      color: 'white',
      /*borderTop: '.5px solid black',
      borderLeft: '.5px solid black',
      borderBottom: '.5px solid black',
      borderRight: '.5px solid black',*/
    };
    const navStyle = {
      width: '100%',
    };
    const navStyleText = {
      margin: '0 auto',
      opacity: '0.5%',
      paddingTop: '20%',
      textShadow: '1px 0px .5px #000, 1px -.5px -.5px #000, 1px .5px .5px #000',

    };
    return (

      <div>
        <Helmet
          title="StoreFront" meta={[{
            name: 'description',
            content: 'Description of StoreFront',
          },
          ]}
        />
        <header></header>

        <main>

          <div style={grid}>
            <div style={col122}></div>

            <Responsive minDeviceWidth={1024}>

              <div style={row}>
                {/* TODO */}
                  <img
                    style={{
                      width: '11.1%',
                      background: '#BDBEC0',
                      height: '5%',
                      /*borderRadius: '10px',*/
                      alignItem: 'left',
                    }} src={botPic} alt=""
                  />
                <div style={tabChildNewTextz}><div style={navStyleText}>tournament</div></div>
                <div style={tabChildNewTextz}><div style={navStyleText}>home</div></div>
                <div style={tabChildNewTextz}><div style={navStyleText}>about</div></div>
                <div style={tabChildNewTextz}><div style={navStyleText}>kits</div></div>
                <div style={tabChildNewTextz}><div style={navStyleText}>the arena</div></div>
                <div style={tabChildNewTextz}><div style={navStyleText}>the cloud</div></div>
                <div style={tabChildNewTextz}><div style={navStyleText}>News</div></div>
                <div style={tabChildNewTextz}><div style={navStyleText}>Contact</div></div>
              </div>

              <div style={col122}></div>
              <div style={row}>
                <div style={col12}>
                  {/*<img
                    style={{
                      borderRadius: '10px',
                      width: 'auto',
                      height: 'auto',
                    }} src={botPic} alt=""
                  /> */}
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
                    }} src="https://0opa1vxjlj-flywheel.netdna-ssl.com/wp-content/uploads/2015/10/sacramento-wordpress-web-development.jpg" alt=""/>
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
              <div style={col122}></div>

            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={rowMobile}>
                <div style={{
                  col2,
                  fontSize: "1.3em",
                  fontFamily: "tahoma"
                }}>
                  test
                </div>
              </div>
            </Responsive>

            <Responsive minDeviceWidth={1024}>
              <div style={row}>
                <div style={col4}>
                  <img style={{
                    borderRadius: "10px",
                    height: "22.33vh",
                    width: "22.33vw",
                    /*alignContent: "center"*/
                  }} src="https://68.media.tumblr.com/4d4bf3ed103d7b72765239086211a6a9/tumblr_okly0dAWKE1vtrs37o1_1280.jpg" alt=""/>

                </div>

                <div style={col4}>
                  <img style={{
                    borderRadius: "10px",
                    height: "22.33vh",
                    width: "22.33vw",
                    /* alignContent: "center"*/
                  }} src="https://68.media.tumblr.com/d4723a51b573ae841b6584fa70e4fba1/tumblr_oljlp0u6eQ1vkgjmeo1_400.png" alt=""/>
                </div>

                <div style={col4}>

                  <img style={{
                    borderRadius: "10px",
                    height: "22.33vh",
                    width: "22.33vw",
                    /* alignContent: "center" */
                  }} src="https://68.media.tumblr.com/5bded6548c3a2fe8eec491739d0e4dbd/tumblr_okilf9jzeF1vkgjmeo1_500.png" alt=""/>
                </div>
              </div>

            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={rowMobile}>
                <div style={col4Mobile}>
                  <img style={{
                    height: "22.33vh",
                    width: "100%"
                  }} src="https://68.media.tumblr.com/4d4bf3ed103d7b72765239086211a6a9/tumblr_okly0dAWKE1vtrs37o1_1280.jpg" alt=""/>
                </div>

                <div style={col4Mobile}>
                  <img style={{
                    height: "22.33vh",
                    width: "100%"
                  }} src="https://68.media.tumblr.com/d4723a51b573ae841b6584fa70e4fba1/tumblr_oljlp0u6eQ1vkgjmeo1_400.png" alt=""/>
                </div>

                <div style={col4Mobile}>
                  <img style={{
                    height: "22.33vh",
                    width: "100%"
                  }} src="https://68.media.tumblr.com/5bded6548c3a2fe8eec491739d0e4dbd/tumblr_okilf9jzeF1vkgjmeo1_500.png" alt=""/>
                </div>
              </div>
            </Responsive>

          </div>
        </main>

      </div>
    );
  }
}
