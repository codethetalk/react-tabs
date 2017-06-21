import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './app.jsx';

const renderApp = (app) => () => {
    const AppElement = app;
    render(
        <AppContainer>
            <AppElement/>
        </AppContainer>,
        document.getElementById("app")
    );
};

if (module && module.hot) {
    module.hot.accept('./app.jsx', renderApp(require('./app.jsx')));
}

renderApp(App)();
