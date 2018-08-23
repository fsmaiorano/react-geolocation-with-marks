import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  height: 50px;
  width: 150px;
  margin: 10px;
`;

export const ButtonSecondary = Button.extend`
  background: #b4b3b2;
`;

export const ButtonPrimary = Button.extend`
  background: #79d83a;
`;
