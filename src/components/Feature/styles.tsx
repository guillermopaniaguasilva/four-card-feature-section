import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

type ContainerProps = {
  accentColor: string;
};

export const Container = styled.div<ContainerProps>`
  border-top: 3px ${({ accentColor }) => accentColor} solid;
  margin-bottom: 25px;
  width: 311px;
  height: 222px;
  border-radius: 3px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 0px 15px 30px -11px rgba(131, 166, 210, 0.5);
  padding: 28px;
  display: flex;
  flex-direction: column;

  &:first-of-type {
    margin-top: 76px;
  }

  @media only screen and (min-width: 600px) {
    &:nth-of-type(2) {
      margin-top: 64px;
      margin-left: 30px;
      margin-right: 30px;
    }

    &:nth-of-type(3) {
      position: absolute;
      left: 341px;
      top: 287px;
      margin-top: 30px;
    }
    &:nth-of-type(1),
    &:nth-of-type(4) {
      margin-top: 175px;
    }
  }
`;

export const Heading = styled.p`
  color: ${COLORS.VERY_DARK_BLUE};
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
`;

export const Description = styled.p`
  color: ${COLORS.GRAYISH_BLUE};
  font-size: 13px;
  font-weight: 400;
  line-height: 23px;
`;

export const Icon = styled.img`
  width: 57px;
  height: 57px;
  margin-top: 33px;
  align-self: flex-end;
`;
