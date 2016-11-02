import React from 'react'
import ReactDom from 'react-dom'
import routes from '$config/routes'
import { Provider } from 'react-redux'
import * as reducers from '$redux'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

const store = createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (func) => func
))

ReactDom.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('root')
)
