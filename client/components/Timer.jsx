import React, { useState, useEffect } from 'react'

const Timer = ({ setPlayState }) => {
  const [ticker, setTicker] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setTicker((ticker) => ticker - 1)
    }, 1000)
    return () => clearInterval(timer);
  }, [])

  useEffect(() => {
    if (ticker <= 0) {
      setPlayState(true)
    }
  }, [ticker])


  return (
    <p>{ticker}</p>
  )

}

export default Timer