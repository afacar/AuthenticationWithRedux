import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

export default class App extends React.Component {
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyAglE9W7cvlesX7qWjh9bbXOE4GrnF_SXo",
      authDomain: "employer-729b9.firebaseapp.com",
      databaseURL: "https://employer-729b9.firebaseio.com",
      projectId: "employer-729b9",
      storageBucket: "employer-729b9.appspot.com",
      messagingSenderId: "131600478375"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) } >
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
