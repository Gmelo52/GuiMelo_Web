import React from "react";
import logoImg from "../../assets/logo.png";
import {
  BtnCV,
  BtnProj,
  BtnsView,
  BtnText,
  BtnTextCV,
  Container,
  LogoImg,
  LogoView,
} from "./styles";

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
        <BtnCV
          onClick={() => {
            javascript: window.open(
              "https://drive.google.com/file/d/1SzwnWQQeJhoXyuCiCIrKb7QeswVz7eqY/view?usp=sharing",
              "_blank"
            );
          }}
        >
          <BtnTextCV>Download CV</BtnTextCV>
        </BtnCV>
      </BtnsView>
    </Container>
  );
}
