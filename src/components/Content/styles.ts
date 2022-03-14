import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  
  @media(max-width: 1400px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const TextView = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;

  @media(max-width: 1400px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  color: ${theme.colors.primary};

  @media(max-width: 1400px) {
    font-size: 40px;
  }
  @media(max-width: 900px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h2`
  display: inline-block;
  font-size: 35px;
  font-weight: 500;
  color: ${theme.colors.scondary};

  @media(max-width: 1400px) {
    font-size: 18px;
  }
  @media(max-width: 900px) {
    font-size: 14px;
  }
`;

export const IconsView = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

export const Comment = styled.h5`
  max-width: 677px;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.scondary};
  display: flex;
  text-align: justify;
  padding-right: 10px;

  @media(max-width: 1400px) {
    font-size: 14px;
  }
  @media(max-width: 900px) {
    font-size: 12px;
  }
`;

export const MediaView = styled.div`
  max-width: 677px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MediaBtn = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 20px;
  transition-duration: .4s;
  cursor: pointer;
  :hover{
    transform: scale(1.05);
  }
`;

export const MediaIcon = styled.img`
  width: 36px;
  height: 36px;
`;

export const ImgView = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:flex-end;

  @media(max-width: 1400px) {
    align-items: center;
  }

`;

export const MeImg = styled.img`
  width: 90%;
  height: auto;

  @media(max-width: 1400px) {
    width: 65%;
    height: auto;
  }

  @media(max-width: 900px) {
    width: 85%;
  }
  @media(max-width: 800px) {
    width: 95%;
  }
  @media(max-width: 650px) {
    width: 100%;
  }
`;
