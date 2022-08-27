import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Catogry from "../Catogry/Catogry"
import Product from './Product'

const Products = () => {
    const state = useSelector(state => state.products.products)
    const [data, setdata] = useState(state.slice(0, 4))
    const getdata = (i) => {
        setdata(i)
    }

    return (
        <>
            <Catogry getdata={getdata} />
            <section className='product'>
                <div className='container'>
                    <div className='row'>
                        {data.map((item) => (
                            <Product item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products