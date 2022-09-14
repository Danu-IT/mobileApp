import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDfFSPwLslbDLCal9Sspr1I4JLoyx_NI5o",
  authDomain: "messenger-9337d.firebaseapp.com",
  projectId: "messenger-9337d",
  storageBucket: "messenger-9337d.appspot.com",
  messagingSenderId: "747174348831",
  appId: "1:747174348831:web:349e2f6a3d0c2e47fdad2a"
};

let app;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export {auth};
