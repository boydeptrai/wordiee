import React from 'react'
import './Square.css'

interface IProps {
    val: string,
    squareIndex: number,
}
const Square: React.FC<IProps> = (props) => {

    const {val,squareIndex} = props
  return (
    <>
     <div className='square'>{val}</div>
    </>
  )
}

export default Square