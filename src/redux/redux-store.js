import postReducer from './postReducer';
// const { createStore, combineReducers } = require("redux");
import { createStore } from 'redux';

//// Функция для подключения нескольких редюсеров. Нужен импорт!!!
// let redusers = combineReducers({
//   postsReducer
// });

let store = createStore(postReducer);

export default store;