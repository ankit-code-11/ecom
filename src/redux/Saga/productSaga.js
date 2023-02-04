import {put, takeEvery} from 'redux-saga/effects'

function* getProducts() {
    let data = yield fetch('http://localhost:3000/product')
    data = yield data.json();
    yield put({
        type: 'Set_product',
        data
    
    })
}
export default function* productSaga() {
yield takeEvery('Product_List', getProducts)
}