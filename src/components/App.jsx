import React from 'react';

import Mail from './Mail';
import Nav from './Nav';

class App extends React.PureComponent {
  render() {
    return <main>
      <Nav/>
      <Mail/>
    </main>;
  }
}

App.propTypes = {};

export default App;
