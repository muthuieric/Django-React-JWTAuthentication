import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                   
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;