/*
 *
 * Dashboard
 *
 */
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Responsive from 'react-responsive';
import NavBar from 'components/NavBar';
export default class Dashboard extends React.PureComponent {
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
    return (
      <div>
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>
        <NavBar />
        <main style={backgroundStyle}>
          <div style={backgroundContentBox}>
          </div>
        </main>
      </div>
    );
  }
}
