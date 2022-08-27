import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AddToCart } from '../../../redux/CartSlice'

const Product = ({ item }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const AddProduct = (product) => {
        dispatch(AddToCart(product))
        history.push("/cart")
    }
    return (
        <>
            <div className='col-sm-6 col-md-4'>
                <div className='product-item'>
                    <div className='product-img'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='product-text'>
                        <h3>{item.name}</h3>
                    </div>
                    <div className='product-order'>
                        <span>${item.price}</span>
                        <button onClick={() => AddProduct(item)}>
                            <i className='fa fa-shopping-cart'></i>

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product

