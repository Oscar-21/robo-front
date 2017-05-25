/**
*
* NavBar
*
*/
import React from 'react';
import botPic from '../../containers/images/SRL_head.png';
import botLogo from '../../containers/images/sum1.png';

class NavBar extends React.PureComponent {
  render() {
    const gridStyle = {
      width: '100%',
      height: '13%',
      display: 'flex',
      flexDirection: 'row',
      background: '#BDBEC0',
    };
    const borderStyle = {
      width: '100%',
      height: '.2vh',
      background: 'black',
    };
    const logoColumn = {
      width: '45%',
      display: 'flex',
      flexDirection: 'row',
      background: '#BDBEC0',
    };
    const linksColumn = {
      width: '55%',
      display: 'flex',
      flexDirection: 'row',
      background: '#BDBEC0',
    };
    const navText = {
      display: 'inline-block',
      background: '#BDBEC0',
      margin: '9px',
      paddingTop: '35px',
      fontFamily: 'Monteserrat',
      fontWeight: 'Bold',
      textTransform: 'uppercase',
      letterSpacing: '2.5px',
      fontSize: '.95em',
      color: 'white',
      opacity: '0.5%',
     /* textShadow: '2px 0px 2px #000, 1px -.7px -.3px #000, 1px .5px .5px #000',*/
      textShadow: '1.5px .8px 2px #000',
    };
    return (
      <div>
        <div style={borderStyle}></div>
        <div style={gridStyle}>
          <div style={logoColumn}>
            <img
              style={{
                width: '22.2%',
                height: '100px',
                alignItem: 'left',
              }} src={botPic} alt=""
            />
            <img
              style={{
                paddingLeft: '5%',
                paddingTop: '2%',
                width: '71%',
                height: '71px',
                alignItem: 'left',
              }} src={botLogo} alt=""
            />
          </div>
          <div style={linksColumn}>
            <div style={navText}>tournament</div>
            <div style={navText}>home</div>
            <div style={navText}>about</div>
            <div style={navText}>kits</div>
            <div style={navText}>the arena</div>
            <div style={navText}>the cloud</div>
            <div style={navText}>News</div>
            <div style={navText}>Contact</div>
          </div>
        </div>
        <div style={borderStyle}></div>
      </div>
    );
  }
}
export default NavBar;
