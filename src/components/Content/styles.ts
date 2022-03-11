import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
`;

export const TextView = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 60px;
  color: ${theme.colors.primary};
`;

export const SubTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  color: ${theme.colors.scondary};
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
`;

export const MediaView = styled.div`
  max-width: 677px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MediaIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 10px 25px;
`;

export const ImgView = styled.div`
  background-color: ${theme.colors.scondary};
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;
