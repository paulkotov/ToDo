import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import AppCont from './containers/AppCont';
//import ChatContainer from "./containers/ChatContainer";
//import CommunityBoxContainer from "./containers/CommunityBoxContainer";
import ToDoCont from "./containers/ToDoCont";
import ToDosListCont from './containers/ToDosListCont';
import configureStore from "./store/configureStore";

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppCont}></Route>
            <Route path="todos/" component={ToDosListCont}></Route>
            <Route path="todo/:todo" component={ToDoCont}></Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
