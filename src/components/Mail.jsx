import React from 'react';
import { connect } from 'react-redux';

class Mail extends React.PureComponent {
  render() {
    const { commits } = this.props;

    return <article>
      <ul>
        { commits.map(commit =>
          <li key={commit.sha}>{commit.message}</li>
        )}
      </ul>
    </article>;
  }
}

Mail.propTypes = {
  commits: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  commits: state.commits.commits,
});
const mapDispatchToProps = {};

const MailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mail);

export default MailContainer;
