import firebase from './firebase';

const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('repo');

export default {
  login() {
    return firebase.auth()
      .signInWithPopup(provider)
      .then(data => ({
        ...data.user,
        token: data.credential.accessToken,
      }));
  },
  logout() {
    return firebase.auth()
      .signOut();
  }
}
