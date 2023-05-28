import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Heading = styled.h1`
  color: ${COLORS.GRAYISH_BLUE};
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  margin: 85px 40px 0 40px;
`;

export const Bold = styled.h2`
  color: ${COLORS.VERY_DARK_BLUE};
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  margin: 0 40px;
`;

export const Description = styled.p`
  color: ${COLORS.GRAYISH_BLUE};
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  margin: 16px 32px 0 32px;
  text-align: center;
`;

export const Container = styled.div`
  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    position: relative;
  }
`;
