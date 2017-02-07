import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class Mail extends React.PureComponent {
  render() {
    const {
      commits,
      repo,
    } = this.props;

    const now = moment();

    return <article>
      <header>
        <dl>
          <dt>To</dt>
          <dd>po@{ repo.name }</dd>
          <dt>From</dt>
          <dd>team@theodo</dd>
          <dt>Subject</dt>
          <dd>Deployment { now.format('L') } - Release notes</dd>
        </dl>
      </header>
      <main>
        <p>Hello team { repo.name },</p>

        <p>We are about to deploy the following features to production:</p>

        <ul>
          { commits.map(commit =>
            <li key={commit.sha}>{commit.message}</li>
          )}
        </ul>

        <p>Let me know if this looks right to you, otherwise we'll deploy in a few minutes!</p>

        <p>Thanks,</p>

        <p>Nathan</p>
      </main>
    </article>;
  }
}

Mail.propTypes = {
  commits: React.PropTypes.array.isRequired,
  repo: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  commits: state.commits.commits,
  repo: state.repos.selected,
});
const mapDispatchToProps = {};

const MailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mail);

export default MailContainer;
