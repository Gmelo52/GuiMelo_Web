import React from 'react'
import logoImg from '../../assets/logo.png'
import { BtnCV, BtnProj, BtnsView, BtnText, Container, LogoImg, LogoView } from './styles'

export default function Header() {
  return (
    <Container>
      <LogoView>
      <LogoImg src={logoImg} />
      </LogoView>
      <BtnsView>
        <BtnProj>
          <BtnText>Projetos</BtnText>
        </BtnProj>
        <BtnCV>
          <BtnText>Download CV</BtnText>
        </BtnCV>
      </BtnsView>
    </Container>
  )
}
