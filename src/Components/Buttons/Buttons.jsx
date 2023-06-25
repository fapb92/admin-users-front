import React from 'react'
import { CustomButton } from './CustomButton'

export const Buttons = ({color='blue', text='Button', ...props}) => {
    return (
      <CustomButton type={"button"} color={color} text={text} {...props}/>
    )
}
