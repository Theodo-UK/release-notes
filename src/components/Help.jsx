import React from 'react';

import './Help.styl';

class Help extends React.PureComponent {
  render() {
    return <aside>
      <h2>How to use release notes</h2>
      <ul>
        <li>Login to GitHub using the button on the top bar</li>
        <li>Select the repository you want to write release notes for</li>
        <li>Select the pull-request you want to write release notes for</li>
        <li>Copy/paste and profit!</li>
      </ul>
    </aside>;
  }
}

Help.propTypes = {};

export default Help;
