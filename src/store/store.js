import { createStore, applyMiddleware } from "redux";
import employees from '../reducers/empreducer';
import thunk from 'redux-thunk';
export default () => {
    alert("called");
    return createStore(employees, applyMiddleware(thunk));
};