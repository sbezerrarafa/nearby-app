import { styled } from 'styled-components/native';
import { colors, fontFamily } from '@/styles/theme';

export const Container = styled.View`
  padding-left: 32px;
  padding-right: 32px;
`;
export const Title = styled.Text`
  color: ${colors.gray[500]};
  font-family: ${fontFamily.medium};
  font-size: 14;
  margin-bottom: 12;
`;
export const Content = styled.View`
  flex-direction: row;
  background-color: ${colors.green.soft};
  padding: 8px 10px;
  border-radius: 8px;
  align-items: center;
  gap: 10;
`;
export const Code = styled.Text`
  color: ${colors.gray[600]};
  font-size: 14;
  font-family: ${fontFamily.semiBold};
  text-transform: uppercase;
`;
