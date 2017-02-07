import React from 'react';
import { connect } from 'react-redux';

import { selectPR } from '../redux/reducers/pulls.actions';
import { selectRepo } from '../redux/reducers/repos.actions';
import { login } from '../redux/reducers/user.actions';

class App extends React.PureComponent {
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
      commits,
      login,
      loggedIn,
      pullRequests,
      selectedRepo,
      repositories,
    } = this.props;

    return <div>
      <ol>
        <li>
          <button onClick={login} disabled={loggedIn}>
            login with firebase
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
              <option value={pr.number} key={pr.number}>[{pr.number}] {pr.title}</option>
            )}
          </select>
        </li>
      </ol>
      <ol>
        { commits.map(commit =>
          <li key={commit.sha}>{commit.message}</li>
        )}
      </ol>
    </div>;
  }
}

App.propTypes = {
  commits: React.PropTypes.array.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
  pullRequests: React.PropTypes.array.isRequired,
  selectPR: React.PropTypes.func.isRequired,
  selectRepo: React.PropTypes.func.isRequired,
  selectedRepo: React.PropTypes.object,
  repositories: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  commits: state.commits.commits,
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

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
