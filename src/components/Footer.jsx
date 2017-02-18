import React from 'react';

import pkg from '../../package.json';

import '../style/Footer.styl';

class Footer extends React.PureComponent {
  render() {
    return <footer>
      <a
        href={ pkg.homepage }
        target="blank"
        title={`${pkg.name} on GitHub`}
      >
        { pkg.name } v{ pkg.version }
      </a>
    </footer>;
  }
}

Footer.propTypes = {};

export default Footer;
