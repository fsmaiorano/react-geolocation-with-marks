import styled from 'styled-components';

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
`;

export const Container = styled.div`
  width: 50.5%;
  height: 25%;
  background-color: #f3f3f3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 77px 9px rgba(0, 0, 0, 0.53);
  align-items: center;
  flex-direction: column;
    z-index: 75;

  div {
    display: flex;    
  }

  input {
    border: none;
    width: 300px;
    height: 30px;
    padding: 10px;
    font-size: 20px;
}
  }
`;
