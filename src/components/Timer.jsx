import React, { useState } from 'react'
import Button from './Button'
import TimerDisplay from './TimerDisplay'
import './Timer.css'

const Timer = () => {
    const [time, setTime] = useState(0)
    const format = (time) => {
        const min = Math.floor(time / 60)
        const sec = time % 60
        return `${min.toString.padStart(2, '0')}:${sec.toString.padStart(2, '0')}`
    }
    const buttons = [{
        className: 'start', value: '시작'
    }, {
        className: 'pause', value: '정지'
    }, {
        className: 'reset', value: '초기화'
    }]
    return (
        <div className='timer'>
            <TimerDisplay />
            {buttons.map((btn, i) => {
                <Button key={i} className={btn.className} value={btn.value}/>
            })}
        </div>
    )
}

export default Timer