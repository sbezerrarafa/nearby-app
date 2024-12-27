import { styled } from 'styled-components/native';
import { fontFamily, colors } from '@/styles/theme';

export const Container = styled.TouchableOpacity`
  height: 120;
  width: '100%';
  padding: 8px;
  border-width: 1;
  border-color: ${colors.gray[200]};
  flex-direction: row;
  gap: 16;
  border-radius: 12px;
  align-items: center;
`;
export const Image = styled.Image`
  width: 116;
  height: 104;
  background-color: ${colors.gray[200]};
  border-radius: 8px;
`;
export const Content = styled.View`
  flex: 1;
  gap: 4;
`;
export const Name = styled.Text`
  font-size: 14;
  font-family: ${fontFamily.medium};
  color: ${colors.gray[600]};
`;
export const Description = styled.Text`
  font-size: 12;
  font-family: ${fontFamily.medium};
  color: ${colors.gray[500]};
`;
export const Footer = styled.View`
  flex-direction: row;
  gap: 7;
  margin-top: 10;
`;
export const Tickets = styled.Text`
  font-size: 12;
  font-family: ${fontFamily.medium};
  color: ${colors.gray[400]};
`;
