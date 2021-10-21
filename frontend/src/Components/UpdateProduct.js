import React,{useEffect , useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useAlert} from 'react-alert'
import {getCategory } from "../Actions/categoryActions"
import {updateProduct} from "../Actions/productsActions"
import {UPDATE_PRODUCT_RESET } from '../Constants/productsConstant'

const UpdateProduct = ({history,match,}) => {


    const [name, setName] = useState('') 
    let [categoryname, setCategoryname] = useState('')

    const dispatch = useDispatch();
    const alert = useAlert();

    const {category} = useSelector(state => state.category)
    const {isUpdated} = useSelector(state => state.productDeleted)


const productId = match.params.id;
useEffect(() => {
    dispatch(getCategory());
    if(isUpdated){
        alert.success('Product Updated Successfully')
        dispatch({type : UPDATE_PRODUCT_RESET})
        history.push('/')
    }
},[isUpdated, alert,dispatch,history])


const submitHandler=(e) => {
    e.preventDefault();
    if(!categoryname){
        categoryname = category[0]
    }
    dispatch(updateProduct(productId,name,categoryname));
}
return (
    <div>
        <form  onSubmit={submitHandler}  >
                <div className="form-group text-white">
                    <label htmlFor="text"> <h4> Update Product Name </h4></label>
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
export default UpdateProduct;