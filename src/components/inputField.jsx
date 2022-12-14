import React from 'react'
import {useState} from 'react'

export default function InputField({type,placeholder, label }) {
    const [text, setText] = useState()
  return (
      <>
      <label label={label}></label>
      <input type={type} placeholder={placeholder} value={text} onChange={(e)=> setText(e.target.value)}/>
      </>
  )
}
