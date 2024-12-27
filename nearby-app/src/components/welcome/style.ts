import { styled } from 'styled-components/native';
import { colors, fontFamily } from '@/styles/theme';

export const Logo = styled.Image`
  width: 48;
  height: 48;
  margin-top: 24;
  margin-bottom: 28;
`;

export const Title = styled.Text`
  font-size: 24;
  font-family: ${fontFamily.bold};
  color: ${colors.gray[600]};
`;

export const SubTitle = styled.Text`
  font-size: 16;
  font-family: ${fontFamily.regular};
  color: ${colors.gray[500]};
  margin-top: 12;
`;
