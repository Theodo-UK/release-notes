import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import ReduxSagaFirebase from 'redux-saga-firebase';

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBz4km3naYj-AH8z1zlmjf038j2ZQrse-k",
  authDomain: "release-notes-c4c74.firebaseapp.com",
  databaseURL: "https://release-notes-c4c74.firebaseio.com",
});

export const authProvider = new firebase.auth.GithubAuthProvider();
authProvider.addScope('repo');

const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp)

export default reduxSagaFirebase;
