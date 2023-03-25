import React, { useState } from 'react'

const SingerList = ({ singer }) => {
    const [toggle, setToggle] = useState(false)

    const toggleHandle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className='singers'>
                <h1>Singers</h1>
                <p style={{fontSize:"26px"}}>Select an artist that matches your vibe.</p>
            </div>

            <div className='card'>
                {singer.map((data,index) => {
                    return (
                        <div className='card-list' key={index}>
                            <img src={data.image} alt="pic" />
                            <h2>{data.name}</h2>
                            <h3>{data.occupation}</h3>
                            <h4>{data.location}</h4>
                            <p>{data.info}</p>
                            {toggle ? <button className='card-btn' onClick={toggleHandle}>SELECTED</button> :
                                <button className='card-btn' onClick={toggleHandle}>SELECT</button>}

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SingerList