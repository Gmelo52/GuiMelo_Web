import React from 'react'
import logoImg from '../../assets/logo.png'
import { BtnCV, BtnProj, BtnsView, BtnText, BtnTextCV, Container, LogoImg, LogoView } from './styles'

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
          <BtnTextCV>Download CV</BtnTextCV>
        </BtnCV>
      </BtnsView>
    </Container>
  )
}
