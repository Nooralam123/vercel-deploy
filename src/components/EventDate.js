import React from 'react'

const EventDate = () => {
    return (
        <div className='main'>
            <h1>Shortlist</h1>
            <div className='details'>
                <h2>Details : </h2>
                <div className='event-date'>
                    <h2>Event Date</h2>
                    <p>2023-04-04</p>
                </div>
                <div className='location'>
                    <h2>location</h2>
                    <p>Delhi,India</p>
                </div>
                <div className='location'>
                    <h2>Budgets</h2>
                    <h2 style={{ backgroundColor: "rgb(37, 36, 36)", color: "white", paddingLeft:"5px", paddingRight:"5px" }}>Rs 500,000</h2>
                </div>
            </div>
        </div>
    )
}

export default EventDate