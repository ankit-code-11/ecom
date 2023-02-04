import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducer/rootReducer'
import productSaga from './Saga/productSaga';
import createSagaMiddleware from 'redux-saga';

const middleware = createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware: () => [middleware]
});

middleware.run(productSaga);
export default store;