import React from 'react'
import { WorkData } from './WorkData'

const SingleWork = () => {
    return (
        <>
            {WorkData.map((item) => (
                <div className='col-lg-4 col-md8' key={item.id}>
                    <div className='work-item mt-30'>
                        <h4>
                            <img src={item.Image} alt="" />
                            {item.title}
                        </h4>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SingleWork