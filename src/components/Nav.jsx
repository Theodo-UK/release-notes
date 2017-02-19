import React from 'react';
import { connect } from 'react-redux';

import Select from './Select';

import { selectBoard } from '../redux/reducers/boards.actions';
import { selectPR } from '../redux/reducers/pulls.actions';
import { selectRepo } from '../redux/reducers/repos.actions';
import { authorizeTrello } from '../redux/reducers/trello.actions';
import { login } from '../redux/reducers/user.actions';

import '../style/Nav.styl';

class Nav extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onRepoChange = this.onRepoChange.bind(this);
    this.onPRChange = this.onPRChange.bind(this);
    this.onBoardChange = this.onBoardChange.bind(this);
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

  onBoardChange(event) {
    const boardId = event.target.value;
    const board = this.props.boards.find(board => board.id == boardId);

    this.props.selectBoard(board);
  }

  render() {
    const {
      authorizeTrello,
      authorizedTrello,
      boards,
      loadingBoards,
      loadingPullRequests,
      loadingRepos,
      login,
      loggedIn,
      pullRequests,
      selectedBoard,
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
            disabled={repositories.length == 0}
            loading={loadingRepos}
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
            disabled={pullRequests.length == 0}
            loading={loadingPullRequests}
            onChange={this.onPRChange}
            placeholder="Select a PR"
            value={selectedPR ? selectedPR.id : ''}
          >
            { pullRequests.map(pr =>
              <option value={pr.number} key={pr.number}>[{pr.number}] {pr.title}</option>
            )}
          </Select>
        </li>
        <li>
          <button onClick={authorizeTrello} disabled={authorizedTrello}>
            Login to Trello
          </button>
        </li>
        <li>
          <Select
            disabled={boards.length == 0}
            loading={loadingBoards}
            onChange={this.onBoardChange}
            placeholder="Select a board"
            value={selectedBoard ? selectedBoard.id : ''}
          >
            { boards.map(board =>
              <option value={board.id} key={board.id}>{board.name}</option>
            )}
          </Select>
        </li>
      </ol>
    </nav>;
  }
}

Nav.propTypes = {
  authorizeTrello: React.PropTypes.func.isRequired,
  authorizedTrello: React.PropTypes.bool.isRequired,
  boards: React.PropTypes.array.isRequired,
  loadingBoards: React.PropTypes.bool.isRequired,
  loadingPullRequests: React.PropTypes.bool.isRequired,
  loadingRepos: React.PropTypes.bool.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
  pullRequests: React.PropTypes.array.isRequired,
  selectBoard: React.PropTypes.func.isRequired,
  selectPR: React.PropTypes.func.isRequired,
  selectRepo: React.PropTypes.func.isRequired,
  selectedBoard: React.PropTypes.object,
  selectedPR: React.PropTypes.object,
  selectedRepo: React.PropTypes.object,
  repositories: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  authorizedTrello: state.trello.authorized,
  boards: state.boards.boards,
  loadingBoards: state.boards.loading,
  loadingPullRequests: state.pulls.loading,
  loadingRepos: state.repos.loading,
  loggedIn: state.user.loggedIn,
  pullRequests: state.pulls.pullRequests,
  repositories: state.repos.repositories,
  selectedBoard: state.boards.selected,
  selectedPR: state.pulls.selected,
  selectedRepo: state.repos.selected,
});
const mapDispatchToProps = {
  authorizeTrello,
  login,
  selectBoard,
  selectPR,
  selectRepo,
};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default NavContainer;
