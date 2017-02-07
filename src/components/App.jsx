import React from 'react';

import pkg from '../../package.json';
import Mail from './Mail';
import Nav from './Nav';

import './App.styl';

class App extends React.PureComponent {
  render() {
    return <main>
      <Nav/>
      <Mail/>
      <footer>
        <a href={ pkg.homepage } title={`${pkg.name} on GitHub`}>{ pkg.name } v{ pkg.version }</a>
      </footer>
    </main>;
  }
}

App.propTypes = {};

export default App;
