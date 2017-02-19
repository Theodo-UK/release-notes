import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import '../style/Mail.styl';

class Mail extends React.PureComponent {
  renderFeatures() {
    const {
      cards,
      commits,
    } = this.props;

    if (cards.length > 0) {
      return <ul>
        { cards.map(card =>
          <li key={card.id}>
            { card.type === 'trello' &&
              <span className="tag">{card.number}</span>
            }
            {card.name}
          </li>
        )}
      </ul>;
    }
    else {
      return <ul>
        { commits.map(commit =>
          <li key={commit.sha}>{commit.message}</li>
        )}
      </ul>;
    }
  }

  render() {
    const {
      repo,
      user,
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
          <dd>Deployment { now.format('DD/MM/YYYY') } - Release notes</dd>
        </dl>
      </header>

      <p>Hello team { repo.name },</p>

      <p>We are about to deploy the following features to production:</p>

      { this.renderFeatures() }

      <p>Let me know if this looks right to you, otherwise we'll deploy in a few minutes!</p>

      <p>Thanks,</p>

      <p>{ user }</p>
    </article>;
  }
}

Mail.propTypes = {
  cards: React.PropTypes.array.isRequired,
  commits: React.PropTypes.array.isRequired,
  repo: React.PropTypes.object.isRequired,
  user: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cards.cards,
  commits: state.commits.commits,
  repo: state.repos.selected,
  user: state.user.name,
});
const mapDispatchToProps = {};

const MailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mail);

export default MailContainer;
