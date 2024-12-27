import { styled } from 'styled-components/native';
import { colors, fontFamily } from '@/styles/theme';

export const Container = styled.View`
  width: '100%';
  flex-direction: row;
  gap: 16;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16;
  font-family: ${fontFamily.semiBold};
  color: ${colors.gray[600]};
`;

export const Description = styled.Text`
  font-size: 14;
  font-family: ${fontFamily.regular};
  color: ${colors.gray[500]};
  margin-top: 14;
`;
