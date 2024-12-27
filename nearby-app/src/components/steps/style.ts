import styled, { StyledObject } from 'styled-components/native';
import { colors, fontFamily } from '@/styles/theme';

export const Container = styled.View`
  gap: 24;
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 16;
  font-family: ${fontFamily.regular};
  color: ${colors.gray[500]};
`;
