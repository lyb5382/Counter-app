import React from 'react'

const TimerDisplay = ({ time, status }) => {
    return (
        <div className="display">
            <h2>{time}</h2>
            <p className={`timer-status ${status === '실행' ? 'running' : status === '정지' ? 'pause' : 'reset'}`}>{status}</p>
        </div>
    )
}

export default TimerDisplay