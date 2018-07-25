import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HostsTableContainer from './components/Hosts/HostsTableContainer';

const App = () => (
    <div className="app">
        <Router>
            <div>
                <Route
                    exact
                    path="/"
                    component={props => <HostsTableContainer {...props} />}
                />
            </div>
        </Router>
    </div>
);

export default App;
