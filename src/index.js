import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD53btxzJ6cqdrDNsRzL5mPAPTtnhU0DUs",
  authDomain: "cart-5fb22.firebaseapp.com",
  projectId: "cart-5fb22",
  storageBucket: "cart-5fb22.appspot.com",
  messagingSenderId: "1015782039140",
  appId: "1:1015782039140:web:ca92a482c5ff2d747f0971"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
