import * as firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyBz4km3naYj-AH8z1zlmjf038j2ZQrse-k",
  authDomain: "release-notes-c4c74.firebaseapp.com",
  databaseURL: "https://release-notes-c4c74.firebaseio.com",
});

export default firebase;
