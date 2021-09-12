import { color } from '@/styles/colors';
import styled, { css } from 'styled-components';

interface IProps {
  mode: 'primary' | 'secondary',
  size: 'small' | 'medium' | 'large',
  backgroundColor?: string,
}

interface IBackground {
  backgroundColor?: string;
}

export const DefaultButton = styled.button<IProps>`
  font-family: 'Roboto', 'Arial', sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  transition: opacity .05s ease-in-out;
  
  ${({ backgroundColor }) => backgroundColor && css`
    background-color: ${backgroundColor}!important;
  `};

  ${({ mode }) => mode === 'primary' && Primary};
  ${({ mode }) => mode === 'secondary' && Secondary};

  :hover {
    opacity: .8;
  }
`;

const Primary = css`
  color: #F6F6F9;
  background-color: ${color.primary};
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
`;

const Secondary = css`
  color: ${color.primary};
  border: 2px solid ${color.primary};
  background-color: transparent;
`;