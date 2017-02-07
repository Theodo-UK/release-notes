import React from 'react';
import { connect } from 'react-redux';

import pkg from '../../package.json';
import Mail from './Mail';
import Nav from './Nav';

import './App.styl';

class App extends React.PureComponent {
  render() {
    return <main className="release-notes">
      <Nav/>
      { this.props.showMail && <Mail/> }
      <footer>
        <a href={ pkg.homepage } title={`${pkg.name} on GitHub`}>{ pkg.name } v{ pkg.version }</a>
      </footer>
    </main>;
  }
}

App.propTypes = {
  showMail: React.PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  showMail: !!state.pulls.selected,
});
const mapDispatchToProps = {};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
