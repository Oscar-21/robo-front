/*
 *
 * Imarray
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import { ReactRpg } from 'react-rpg';
import NavBar from 'components/NavBar';

const images = [
  {
    url: 'http://lesmechantes.com/wp-content/uploads/2017/01/tumblr-girl-fashion-to-give-you-fresh-ideas-in-creating-your-own-Girl-Fashion-so-it-looks-more-catchy-8.jpg',
    clickHandler: (url, obj) => { console.log(url); },
  },
  {
    url: 'https://s-media-cache-ak0.pinimg.com/736x/f3/95/a1/f395a17cc157c7e1c6985d59d741f530.jpg',
    clickHandler: (url, obj) => { console.log(obj); },
  },
];
export default class Imarray extends React.PureComponent {

  render() {
    return (
      <div>
        <Helmet title="Imarray" meta={[ { name: 'description', content: 'Description of Imarray' }]} />
        <NavBar />
        <ReactRpg imagesArray={images} columns={[1, 2, 5]} padding={10} />
      </div>
    );
  }
}
