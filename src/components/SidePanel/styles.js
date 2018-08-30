import styled from 'styled-components';

export const Panel = styled.div`
  width: 300px;
  height: 95%;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 50;
  background-color: #fff;
`;

export const User = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 15px;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;
