import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getCategory } from "../Actions/categoryActions"
import {createProduct} from "../Actions/productsActions"
import {useAlert} from 'react-alert'
import {CREATE_PRODUCT_RESET} from '../Constants/productsConstant'
const CreateProduct = ({history}) => {
    const [name, setName] = useState('') 
    let [categoryname, setCategoryname] = useState('')

    const dispatch = useDispatch();
    const alert = useAlert();

    let {category} = useSelector(state => state.category)
    const {success} = useSelector(state => state.newProductReducer)

useEffect(() => {
    dispatch(getCategory());

    if(success === true){
        alert.success("Product Created Successfully")
        dispatch({type : CREATE_PRODUCT_RESET})
        history.push('/')
    }

},[success,alert,dispatch,history])
const submitHandler=(e) => {
    e.preventDefault();
    if(!categoryname){
        categoryname = category[0]
    }
    dispatch(createProduct(name,categoryname));
}


    return (
        <div>
            <form  onSubmit={submitHandler}  >
                <h1 className="text-white"> Create Products</h1> 
                
                    <div className="form-group text-white">
                        <label htmlFor="text"> <h5> Product Name </h5></label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Product Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <small id="text" className="form-text text-muted">Create a new Product</small>
                    </div>
                    <div className="form-group text-white">
                        <label htmlFor="exampleFormControlSelect1">Selected Product Category</label>
                        <select className="custom-select mr-sm-2" value={categoryname} onChange={(e) => setCategoryname(e.target.value)}  >
                        {category.map(item => (
                            <option key={item._id}  value={item._id}> {item.CategoryName}</option>  
                        ))}                                         
                         </select>
                        <small id="text" className="form-text text-muted">Select a Category for Product</small>
                    </div>                    
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
        </div>
    )
}

export default CreateProduct
