import { styled } from 'styled-components/native';
import { colors, fontFamily } from '@/styles/theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8;
`;
export const Texts = styled.Text`
  color: ${colors.gray[500]};
  font-size: 14;
  font-family: ${fontFamily.regular};
  line-height: 22.4;
  flex: 1;
`;
