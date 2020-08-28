import React from 'react';
import './App.css';
import Home from './views/home/home'
import {Provider} from 'react-redux'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <div className="App container">
                <Home/>
            </div>
        </Provider>
    );
}

export default App;
