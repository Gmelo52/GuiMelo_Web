import styled from 'styled-components';
import {theme} from '../../styles/theme'

export const Container = styled.div`
  width:100vw;
  height: 100vh;
  background-image: url(${require('../../assets/background.png')});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${theme.colors.backgroundColor};
  padding: 0 300px;

  @media(max-width: 1200px) {
    padding: 0;
  }

`;

