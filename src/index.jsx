import '../assets/scss/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Link } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';

import App from './components/app/app'
import reducers from './reducers'
import root from './sagas/root'
import Login from './components/login/login'
import Header from './components/header/header'

const sagaMiddleware = createSagaMiddleware()
const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
    combineReducers(Object.assign(reducers, { router: routerReducer, form: formReducer })),
    applyMiddleware(middleware, sagaMiddleware)
)

sagaMiddleware.run(root)
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Header />
                <Route path="/login" render={props => <Login {...props} />} />
                <Route path="/" component={App} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)
