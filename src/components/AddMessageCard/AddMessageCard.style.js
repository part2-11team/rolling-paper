import styled from 'styled-components';

export const AddButtonIcon = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${({ $image }) => $image});
  background-size: cover;
`;
