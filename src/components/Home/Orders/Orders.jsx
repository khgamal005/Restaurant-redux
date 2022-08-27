import React from 'react'
import { OrdersData } from './OrdersData'
import "./Style.css"

const Orders = () => {


    return (
        <section className='orders' id="about">
            <div className='container'>
                <div className='row justify-content-center'>
                    {OrdersData.map((item) => (
                        <div className='col-lg-3 col-md-6 col-sm-7'>
                            <div className='order-item'>
                                <h3>{item.order}</h3>
                                <span>{item.title}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Orders