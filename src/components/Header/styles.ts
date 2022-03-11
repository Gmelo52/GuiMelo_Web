import styled from 'styled-components'
import { theme } from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
`;

export const LogoView =styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
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
`;

export const BtnProj = styled.button`
  background-color: transparent;
  color: ${theme.colors.primary};
  border: none;
  padding: 10px 20px;
  margin-right: 20px;
`;

export const BtnCV = styled.button`
  background-color: transparent;
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  border-radius:5px;
  padding: 10px 20px;
`;

export const BtnText = styled.h5`
  color: ${theme.colors.primary};
  font-size:12px;
  font-weight: 500;
`;


