import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from '../redux-core/store';

import Header from '../components/Header';
import Playground from '../components/Playground';

import {Main} from './style';


const App = () => (
    <Provider store={store}>
      <Main>
        <Header/>
        <Playground/>
      </Main>
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('hexbot-root'));