import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { deleteProductReducer, productsReducer , newProductReducer} from './Reducers/productReducer'
import {CategoryReducer , deleteCategoryReducer , createCategoryReducer } from './Reducers/categoryReducer'
import App from './App.css'
const reducer = combineReducers({
    products: productsReducer,
    productDeleted: deleteProductReducer,
    newProductReducer : newProductReducer,
    category: CategoryReducer,
    categoryDeleted : deleteCategoryReducer,
    createCategory: createCategoryReducer
})








const middlware = [thunk];
const store = createStore(reducer,  composeWithDevTools(applyMiddleware(...middlware)))
export default store;
