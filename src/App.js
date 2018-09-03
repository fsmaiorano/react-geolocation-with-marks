import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import './styles/global';

import Main from './pages/main';
import store from './store';

const App = () => <Provider store={store}>{<Main />}</Provider>;

export default App;
