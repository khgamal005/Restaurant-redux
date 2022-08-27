import React from 'react'
import { CatData } from './CatData'
import over from "./imgs/category-shapp.png"
const CatItem = ({ filter }) => {
    return (
        <>
            {CatData.map((item) => (
                <div className='col-sm-4 col-lg-2' onClick={() => filter(item.title)} key={item.id}>
                    <div className="cat-item" >
                        <div className='cat-img'>
                            <img className='first' src={item.image} alt="" />
                            <div className='item'>
                                <img src={over} alt="" />
                            </div>
                        </div>
                        <div className='cat-text text-center'>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CatItem