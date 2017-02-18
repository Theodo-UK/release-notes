import React from 'react';
import { connect } from 'react-redux';

import Footer from './Footer';
import Help from './Help';
import Mail from './Mail';
import Nav from './Nav';

import '../style/App.styl';

class App extends React.PureComponent {
  render() {
    return <main className="release-notes">
      <Nav/>
      { this.props.showMail && <Mail/> }
      <Help/>
      <Footer/>
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
