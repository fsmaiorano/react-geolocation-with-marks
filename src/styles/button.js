import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  height: 50px;
  width: 50%;
`;

export const ButtonSecondary = Button.extend`
  margin: 10px;
  background: #b4b3b2;
`;

export const ButtonPrimary = Button.extend`
  margin: 10px;
  background: #79d83a;
`;
