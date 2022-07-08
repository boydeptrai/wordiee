import React from 'react'
import './Heading.css'

interface IProps{
    type: string,
    test: string
}
const Heading: React.FC<IProps> = (props) => { 
    const {type,test} = props
  return (
    <p className={`heading-${type}`}>
        {test}
    </p>
  )
}

export default Heading