import React from 'react'

const TimerDisplay = ({ className, value }) => {
    return (
        <button className={className}>{value}</button>
    )
}

export default TimerDisplay