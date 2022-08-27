import React from 'react'
import "./Style.css"
import icon from "./img/title-shape.png"
import SingleWork from './SingleWork'
const Work = () => {
    return (
        <section className='work' id='work'>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-12">
                        <div className='how-work'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-6'>
                                    <div className='img-text text-center'>
                                        <img src={icon} alt="" />
                                        <h3 className="title">How it work</h3>
                                        <p>The Process of our service</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <SingleWork />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work