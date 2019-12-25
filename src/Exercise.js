import React from 'react'

const Exercise = ({ ...props }) => {
  const {amount, movement} = props
  return <div {...props}>{amount} <br /> {movement}</div>
}
export default Exercise
