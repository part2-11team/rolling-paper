import styled from 'styled-components';
import { COLORS } from '../../style/colorPalette';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLORS.GRAY_200};
  padding: 0 0 15px;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid ${COLORS.WHITE};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const ProfileTextWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

const ProfileText = styled.p`
  font-size: 20px;
  color: ${COLORS.BLACK};
  line-height: 24px;
`;

export const ProfileTextHead = styled(ProfileText)`
  font-weight: 400;
`;

export const ProfileName = styled(ProfileText)`
  font-weight: 700;
`;
