import React from 'react';
import { connect } from 'react-redux';

import { selectPR } from '../redux/reducers/pulls.actions';
import { selectRepo } from '../redux/reducers/repos.actions';
import { login } from '../redux/reducers/user.actions';

class Nav extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onRepoChange = this.onRepoChange.bind(this);
    this.onPRChange = this.onPRChange.bind(this);
  }

  onRepoChange(event) {
    const id = event.target.value;
    const repo = this.props.repositories.find(repo => repo.id == id);

    this.props.selectRepo(repo);
  }

  onPRChange(event) {
    const number = event.target.value;
    const pr = this.props.pullRequests.find(pr => pr.number == number);

    this.props.selectPR(pr);
  }

  render() {
    const {
      login,
      loggedIn,
      pullRequests,
      selectedRepo,
      repositories,
    } = this.props;

    return <nav>
      <ol>
        <li>
          <button onClick={login} disabled={loggedIn}>
            Login to GitHub
          </button>
        </li>
        <li>
          <select onChange={this.onRepoChange} value={selectedRepo ? selectedRepo.id : ''}>
            <option disabled>Select a repo</option>
            { repositories.map(repo =>
              <option value={repo.id} key={repo.id}>{repo.owner} / {repo.name}</option>
            )}
          </select>
        </li>
        <li>
          <select onChange={this.onPRChange}>
            <option disabled>Select a PR</option>
            { pullRequests.map(pr =>
              <option value={pr.number} key={pr.number}>[{pr.number}] {pr.title.substring(0, 50)}</option>
            )}
          </select>
        </li>
      </ol>
      <h1>release notes</h1>
    </nav>;
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
  pullRequests: React.PropTypes.array.isRequired,
  selectPR: React.PropTypes.func.isRequired,
  selectRepo: React.PropTypes.func.isRequired,
  selectedRepo: React.PropTypes.object,
  repositories: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  pullRequests: state.pulls.pullRequests,
  repositories: state.repos.repositories,
  selectedRepo: state.repos.selected,
});
const mapDispatchToProps = {
  login,
  selectPR,
  selectRepo,
};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default NavContainer;
