import styled, { css } from 'styled-components';
import { FONT_STYLE } from '../../style/fontStyle';
import { COLORS } from '../../style/colorPalette';

export const PostPage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0 2rem;
`;

export const PostPageForm = styled.form`
  margin: 12.2rem 0 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 72rem;
  @media (max-width: 768px) {
    width: 100%;
`;

export const ToInputWrapper = styled.div`
    width: 72rem;
    @media (max-width: 768px) {
      width: 100%;
`;

export const PostPageH1 = styled.h1`
  color: ${COLORS.GRAY_900};
  ${FONT_STYLE.BOLD_24};
`;

export const ToInput = styled.input`
  margin-top: 1.2rem;
  border: 0.1rem solid ${props => props.$hasError ? COLORS.ERROR : COLORS.GRAY_300};
  border-radius: 0.8rem;  
  padding: 1.2rem 1.6rem;  
  width: 72rem;
  color: ${COLORS.GRAY_500};
  ${FONT_STYLE.REGULAR_16};
  @media (max-width: 768px) {
    width: 100%;
`;

export const ErrorMessage = styled.div`
  color: ${COLORS.ERROR};
  ${FONT_STYLE.REGULAR_14};
  display: ${props => props.$hasError ? 'block' : 'none'};
`;

export const BackgroundSelectWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 7rem;
  width: 72rem;
    @media (max-width: 768px) {
    width: 100%;
`;
export const PostPageH2 = styled.h2`
  color: ${COLORS.GRAY_500};
  ${FONT_STYLE.REGULAR_16};
  margin-top: 0.4rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 2.4rem;
  display: flex;
`;

export const ColorSelectorDiv = styled.div`
  margin-top: 4.5rem;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  background-color: ${({ $chosen, $selectNth }) => {
    if ($chosen) {
      switch ($selectNth) {
        case 'orange':
          return COLORS.ORANGE_200;
        case 'purple':
          return COLORS.PURPLE_200;
        case 'blue':
          return COLORS.BLUE_200;
        case 'green':
          return COLORS.GREEN_200;
        default:
          return COLORS.ORANGE_200;
      }
    } else {
      switch ($selectNth) {
        case 'orange':
          return COLORS.ORANGE_500;
        case 'purple':
          return COLORS.PURPLE_900;
        case 'blue':
          return COLORS.BLUE_500;
        case 'green':
          return COLORS.GREEN_500;
        default:
          return COLORS.ORANGE_500;
      }
    }
  }}
`;

export const ColorImageButton = styled.div`
  border-radius: 0.6rem;
  padding: 0.7rem 1.6rem;
  width: 12.6rem;
  height: 4.4rem;
  text-align: center;
  ${FONT_STYLE.REGULAR_16};
  background-color: ${COLORS.GRAY_100};
  color: ${COLORS.GRAY_900};
  
  ${({ $chosen }) =>
    $chosen &&
    css`
      background-color: ${COLORS.WHITE};
      border: 0.2rem solid ${COLORS.PURPLE_600};
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      color: ${COLORS.PURPLE_700};
      ${FONT_STYLE.BOLD_16}
    `}
`;
export const SelectedImg = styled.img`
  width: 4.4rem;
  height: 4.4rem;
`;
