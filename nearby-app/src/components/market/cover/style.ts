import { styled } from 'styled-components/native';
import { colors, fontFamily } from '@/styles/theme';

export const Container = styled.ImageBackground`
  width: '100%';
  height: 232;
  margin-bottom: -32;
  background-color: ${colors.gray[200]};
`;
export const Header = styled.View`
  padding: 24px;
  padding-top: 56px;
`;
