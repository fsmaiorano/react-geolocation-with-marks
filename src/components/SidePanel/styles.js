import styled from 'styled-components';

export const Panel = styled.div`
  width: 320px;
  height: 95%;
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 50;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
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
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-left: 15px;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;

  span:first-child {
    font-size: 16px;
    color: #333;
  }

  span:last-child {
    font-size: 14px;
    color: #999;
  }
`;
