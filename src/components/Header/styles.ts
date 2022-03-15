import styled from 'styled-components'
import { theme } from '../../styles/theme';

export const Container = styled.div`
background-color: red;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;

  @media(max-width: 1400px) {
    width: 100%;
    height: 80px;
    justify-content:center;
  }

`;

export const LogoView = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  background-color:blue;

  @media(max-width: 900px) {
    width: 100%;
    justify-content: center;
  }
  @media(max-width: 500px) {
    width: 50%;
    align-items: center;
  }
`;

export const LogoImg = styled.img`
  width: 137px;
  height: 26px;
`;

export const BtnsView = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media(max-width: 900px) {
    display: none;
  }
`;

export const BtnProj = styled.button`
  background-color: transparent;
  color: ${theme.colors.primary};
  border: none;
  padding: 10px 20px;
  margin-right: 20px;
  cursor: pointer;
  transition-duration: .4s;
  :hover{ 
    transform: scale(1.05);
  }
`;

export const BtnCV = styled.button`
  background-color: transparent;
  color: ${theme.colors.scondary};
  border: 2px solid ${theme.colors.primary};
  border-radius:5px;
  transition-duration: .4s;
  cursor: pointer;
  :hover{
    background-color: ${theme.colors.primary};
    transform: scale(1.05);

  }
`;

export const BtnText = styled.h5`
  color: ${theme.colors.primary};
  font-size:12px;
  font-weight: 500;
  width: 100%;
  height: 100%;
`;

export const BtnTextCV = styled.h5`
  color: ${theme.colors.primary};
  font-size:12px;
  font-weight: 500;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  :hover{
    color:${theme.colors.backgroundColor}
  }
`;




