import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

import '../style/Sidebar.styl';

class Sidebar extends React.PureComponent {
  render() {
    return <aside>
      <section>
        <h1>release notes</h1>
        <p>Generates release notes automatically using GitHub and Trello.</p>
        <p>
          To use Trello's ticket name, make sure your commit messages are formatted like so: <code>(#1234) Title of my PR</code>, where <code>1234</code> is Trello's ticket number.
        </p>
        <p>One way to achieve this is to title your pull requests using this format and squashing them when merging on master.</p>
        <Nav/>
      </section>

      <Footer />
    </aside>;
  }
}

Sidebar.propTypes = {};

export default Sidebar;
