import React, { Component } from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {

        var config = {
            apiKey: "AIzaSyARBCZvhtevjEouktmHOWtzRlLK9gAi4s0",
            authDomain: "whatsapp-clone-89b43.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-89b43.firebaseio.com",
            projectId: "whatsapp-clone-89b43",
            storageBucket: "whatsapp-clone-89b43.appspot.com",
            messagingSenderId: "770669471351"
          };
          firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes></Routes>
            </Provider>
            </View>
        );
    }
}

export default App;
