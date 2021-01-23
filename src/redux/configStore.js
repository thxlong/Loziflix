import {combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk'

const rootReducer = combineReducers({

    //reducer khai báo tại đây

});

const store = createStore(rootReducer);

export default store; 