/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = { children: React.PropTypes.node,};
  static childContextTypes = { muiTheme: React.PropTypes.object };

  getChildContext()
  {
    var theme = getMuiTheme();
    theme.appBar.color='#212121';
    theme.raisedButton.primaryColor="#003B4D";
    return { muiTheme: theme }
  };

  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
