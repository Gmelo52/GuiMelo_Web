import React from 'react'
import { Container } from './styled'

type Props = {
  src:string
}

export default function IconTech(props:Props) {
  return (
    <Container src={props.src}/>
  )
}
