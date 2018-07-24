// import React from 'react';
import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';


// const {createStore} = Redux;

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));