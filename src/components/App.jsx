import React from 'react';
import { connect } from 'react-redux';

import Mail from './Mail';
import Sidebar from './Sidebar';

import '../style/App.styl';

class App extends React.PureComponent {
  render() {
    return <div className="app">
      <Sidebar />
      <main className={this.props.showMail ? '' : 'empty'}>
        { this.props.showMail && <Mail/> }
      </main>
    </div>;
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
