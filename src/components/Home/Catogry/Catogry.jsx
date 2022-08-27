/* eslint-disable no-lone-blocks */
import React from 'react'
import { useSelector } from 'react-redux'
import "./Catogry.css"
import icon from "./imgs/title-shape-2.png"
import cat1 from "./imgs/category-1.jpg"
import over from "./imgs/category-shapp.png"
import cat2 from "./imgs/category-2.jpg"
import CatItem from './CatItem'

const Catogry = ({ getdata }) => {
    const state = useSelector(state => state.products.products)

    //_________function_filter Catogry________________
    const filter = (f) => {
        const Filter = state.filter((x) => x.cat === f)
        getdata(Filter)
    }
    const Some = () => {
        getdata(state.slice(0, 4))
    }
    return (
        <section className='catogry' id='category'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <div className='img-text text-center'>
                            <img className='head' src={icon} alt="" />
                            <h3 className='title'>Search by food category</h3>
                            <p>The Process of our service</p>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-2 col-md-4 col-sm-4' onClick={() => getdata(state)}>
                        <div className="cat-item" >
                            <div className='cat-img'>
                                <img className='first' src={cat1} alt="" />
                                <div className='item'>
                                    <img src={over} alt="" />
                                </div>
                            </div>
                            <div className='cat-text text-center'>
                                <h2>ALL</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-4' onClick={() => Some()}>
                        <div className="cat-item" >
                            <div className='cat-img'>
                                <img className='first' src={cat2} alt="" />
                                <div className='item'>
                                    <img src={over} alt="" />
                                </div>
                            </div>
                            <div className='cat-text text-center'>
                                <h2>Some</h2>
                            </div>
                        </div>
                    </div>
                    <CatItem filter={filter} />
                </div>
            </div>
        </section>
    )
}

export default Catogry
