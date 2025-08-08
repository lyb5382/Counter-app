import React, { useRef, useState } from 'react'
import Button from './Button'
import TimerDisplay from './TimerDisplay'
import './Timer.css'

const Timer = () => {
    const [time, setTime] = useState(0)
    const interval = useRef(null)
    const [status, setStatus] = useState('초기화')

    const format = (time) => {
        const min = Math.floor(time / 60)
        const sec = time % 60
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
    }

    const startTimer = () => {
        if (status !== '실행') {
            setStatus('실행')
            interval.current = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1000)
        }
    }

    const pauseTimer = () => {
        if (status == '실행') {
            clearInterval(interval.current)
            setStatus('정지')
        }
    }

    const resetTimer = () => {
        clearInterval(interval.current)
        setStatus('초기화')
        setTime(0)
    }

    const buttons = [{
        className: 'start', value: '시작', onClick: startTimer
    }, {
        className: 'pause', value: '정지', onClick: pauseTimer
    }, {
        className: 'reset', value: '초기화', onClick: resetTimer
    }]

    return (
        <div className='timer'>
            <TimerDisplay time={format(time)} status={status} />
            <section>
                {buttons.map((btn, i) => (
                    <Button key={i} className={btn.className} onClick={btn.onClick} value={btn.value} />
                ))}
            </section>
        </div>
    )
}

export default Timer