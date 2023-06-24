import React from 'react'
import { CustomButton } from './CustomButton'

export const SubmitBtn = ({color='blue', text='Button'}) => {
  return (
    <CustomButton type={"submit"} color={color} text={text}/>
  )
}
