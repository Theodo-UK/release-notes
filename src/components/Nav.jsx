import React from 'react';
import { connect } from 'react-redux';

import Select from './Select';

import { selectPR } from '../redux/reducers/pulls.actions';
import { selectRepo } from '../redux/reducers/repos.actions';
import { login } from '../redux/reducers/user.actions';

import '../style/Nav.styl';

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
      selectedPR,
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
          <Select
            onChange={this.onRepoChange}
            placeholder="Select a repo"
            value={selectedRepo ? selectedRepo.id : ''}
          >
            { repositories.map(repo =>
              <option value={repo.id} key={repo.id}>{repo.owner} / {repo.name}</option>
            )}
          </Select>
        </li>
        <li>
          <Select
            onChange={this.onPRChange}
            placeholder="Select a PR"
            value={selectedPR ? selectedPR.id : ''}
          >
            { pullRequests.map(pr =>
              <option value={pr.number} key={pr.number}>[{pr.number}] {pr.title.substring(0, 50)}</option>
            )}
          </Select>
        </li>
      </ol>
    </nav>;
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
  pullRequests: React.PropTypes.array.isRequired,
  selectPR: React.PropTypes.func.isRequired,
  selectRepo: React.PropTypes.func.isRequired,
  selectedPR: React.PropTypes.object,
  selectedRepo: React.PropTypes.object,
  repositories: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  pullRequests: state.pulls.pullRequests,
  repositories: state.repos.repositories,
  selectedPR: state.pulls.selected,
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
