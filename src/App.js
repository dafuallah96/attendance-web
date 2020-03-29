import React from 'react';
import './App.css';
import * as firebase from 'firebase';
import List from './components/List';

var firebaseConfig = {
  apiKey: "AIzaSyAGvaNzrfc4rh9v4NOknC_ad_Q6jhugW0Y",
    authDomain: "attendance-system-7f1b8.firebaseapp.com",
    databaseURL: "https://attendance-system-7f1b8.firebaseio.com",
    projectId: "attendance-system-7f1b8",
    storageBucket: "attendance-system-7f1b8.appspot.com",
    messagingSenderId: "55805150189",
    appId: "1:55805150189:web:64dd6a2bb4bd8f46045de4"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <List></List>
    </div>
  );
}

export default App;
