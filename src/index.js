import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import Posts_new from './components/Posts_new';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
        <Route path = "/posts/new" component={Posts_new}/>
        <Route path = "/" component={PostsIndex}/>
          </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));