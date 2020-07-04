import postReducer from './postReducer';
import usersReducer from "./usersReducer";
import {combineReducers, createStore} from "redux";

// Функция для подключения нескольких редюсеров. Нужен импорт!!!
let redusers = combineReducers({
    postReducer: postReducer,
    usersReducer: usersReducer
});

let store = createStore(redusers);

window.store = store;

export default store;