import HttpClient from './client';

export default {
  getRepositories(token) {
    return HttpClient.get('https://api.github.com/user/repos?per_page=100', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`
      }
    });
  },
  getPullRequests(token, owner, repo) {
    return HttpClient.get(`https://api.github.com/repos/${owner}/${repo}/pulls?per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`
      }
    });
  },
  getCommits(token, owner, repo, number) {
    return HttpClient.get(`https://api.github.com/repos/${owner}/${repo}/pulls/${number}/commits?per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`
      }
    });
  }
};
