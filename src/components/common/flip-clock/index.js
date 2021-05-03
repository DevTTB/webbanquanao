import { useState, useEffect } from 'react'
import '../../../assets/css/flip-clock.css'
const AnimatedCard = ({ animation, digit }) => {
    return (
        <div className={`flipCard ${animation}`}>
            <span>{digit}</span>
        </div>
    )
}

const StaticCard = ({ position, digit }) => {
    return (
        <div className={position}>
            <span>{digit}</span>
        </div>
    )
}
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
    // assign digit values
    let currentDigit = digit
    let previousDigit = digit - 1

    // to prevent a negative value
    if (unit !== 'hours') {
        previousDigit = previousDigit === -1 ? 59 : previousDigit
    } else {
        previousDigit = previousDigit === -1 ? 23 : previousDigit
    }

    // add zero
    if (currentDigit < 10) {
        currentDigit = `0${currentDigit}`
    }
    if (previousDigit < 10) {
        previousDigit = `0${previousDigit}`
    }

    // shuffle digits
    const digit1 = shuffle ? previousDigit : currentDigit
    const digit2 = !shuffle ? previousDigit : currentDigit

    const animation1 = shuffle ? 'fold' : 'unfold'
    const animation2 = !shuffle ? 'fold' : 'unfold'

    return (
        <div className={'flipUnitContainer'}>
            <StaticCard
                position={'upperCard'}
                digit={currentDigit} />
            <StaticCard
                position={'lowerCard'}
                digit={previousDigit} />
            <AnimatedCard
                digit={digit1}
                animation={animation1} />
            <AnimatedCard
                digit={digit2}
                animation={animation2} />
        </div>
    )
}

export default function FlipClock() {
    const [hours, setHours] = useState(0)
    const [hoursShuffle, setHoursShuffle] = useState(true)
    const [minutes, setMinutes] = useState(0)
    const [minutesShuffle, setMinutesShuffle] = useState(true)
    const [seconds, setSeconds] = useState(0)
    const [secondsShuffle, setSecondsShuffle] = useState(true)

    function updateTime() {
        const time = new Date()

        const newHours = time.getHours()
        const newMinutes = time.getMinutes()
        const newSeconds = time.getSeconds()

        if (newHours !== hours) {
            const newHoursShuffle = !hoursShuffle
            setHours(newHours)
            setHoursShuffle(newHoursShuffle)
        }

        if (newMinutes !== minutes) {
            const newMinutesShuffle = !minutesShuffle
            setMinutes(newMinutes)
            setMinutesShuffle(newMinutesShuffle)
        }
        if (newSeconds !== seconds) {
            const newSecondsShuffle = !secondsShuffle
            setSeconds(newSeconds)
            setSecondsShuffle(newSecondsShuffle)
        }
    }

    useEffect(() => {
        const timerID = setInterval(() => {
            updateTime()
        }, 1000)

        return () => {
            clearInterval(timerID)
        }
    })

    return (
        <div className={'flipClock'}>
            <FlipUnitContainer
                unit={'hours'}
                digit={hours}
                shuffle={hoursShuffle} />
            <FlipUnitContainer
                unit={'minutes'}
                digit={minutes}
                shuffle={minutesShuffle} />
            <FlipUnitContainer
                unit={'seconds'}
                digit={seconds}
                shuffle={secondsShuffle} />
        </div>
    )
}