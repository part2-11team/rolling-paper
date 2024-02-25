import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 39px;
  width: 600px;
  height: 476px;
  background-color: #ffffff;
  box-shadow: 0px 2px 12px 0px rgb(0, 0, 0, 0.08);
  border-radius: 16px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  gap: 14px;
  padding: 0 0 15px;
`;

export const ProfileModalWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const CreatedDate = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #999999;
`;

export const TextWrapper = styled.div`
  width: 520px;
  height: 256px;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #5a5a5a;
  padding-top: 16px;
  overflow: scroll;
`;

export const ModalButton = styled.button`
  box-sizing: border-box;
  position: absolute;
  top: 396px;
  left: 240px;
  width: 120px;
  height: 40px;
  border-radius: 6px;
  padding: 7px 16px;
  background-color: #9935ff;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;

  &:hover {
    background-color: #861dee;
  }

  &:pressed {
    background-color: #6e0ad1;
  }

  &:focus {
    border: 2px solid #5603a7;
    background-color: #6e0ad1;
  }
`;
