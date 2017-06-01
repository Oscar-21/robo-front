/**
*
* Hello
*
*/

import React from 'react';
import PropTypes from 'prop-types';
class Hello extends React.PureComponent {
  render() {
    Hello.propTypes = {
      name: PropTypes.string
};
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}
export default Hello;
