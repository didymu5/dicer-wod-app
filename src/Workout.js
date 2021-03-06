import React, { useState, useEffect } from 'react'
import UIfx from 'uifx'
import Exercise from './Exercise'
import { useTimer } from 'react-timer-hook'
import randomExercise from './randomExercise'

import alertAudio from './glassy_ding.mp3'

const alert = new UIfx(alertAudio, { volumn: 0.8, throttleMs: 10 })

const Workout = ({ ...props }) => {
  const { exercises, interval = 61 } = props
  const [exercise, setExercise] = useState(randomExercise(exercises.movements))
  const expiryTimestamp = () => {
    var t = new Date()
    t.setSeconds(t.getSeconds() + interval)
    return t
  }
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp: expiryTimestamp(),
    onExpire: () => resetExercsise()
  })
  useEffect(() => {
    if(seconds < 4 && seconds !== 0) {
      alert.play()
    }
  }, [seconds])
  const resetExercsise = () => {
    setExercise(randomExercise(exercises.movements))
    restart(expiryTimestamp())
  }
  return (
    <div className='Workout' onClick={resetExercsise}>
      <Exercise
        className='Exercise-display'
        amount={exercise.amount}
        movement={exercise.movement}
      />
      <div className='WorkoutTimmer'>
        {minutes}:{seconds < 10 && 0}
        {seconds}
      </div>
    </div>
  )
}
export default Workout
