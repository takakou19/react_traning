import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css';
import reducer from './reducers'

import EventsIndex from './compornents/events-index';
import EventsNew from './compornents/events-new';
import EventsShow from './compornents/events-show';
import * as serviceWorker from './serviceWorker';


const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) :applyMiddleware(thunk)

const store = createStore(reducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={ store }>
          <BrowserRouter>
              <Switch>
                  <Route path="/events/new" component={EventsNew}></Route>
                  <Route path="/events/:id" component={EventsShow}></Route>
                  <Route path="/" component={EventsIndex}></Route>
                  <Route path="/events" component={EventsIndex}></Route>
              </Switch>
          </BrowserRouter>
          {/*<EventsIndex />*/}
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
