import { styled } from 'styled-components/native';
import { colors, fontFamily } from '@/styles/theme';

export const ContainerButton = styled.TouchableOpacity`
  height: 56;
  max-height: 56;
  background-color: ${colors.green.base};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 14;
`;

export const TitleButton = styled.Text`
  color: ${colors.gray[100]};
  font-family: ${fontFamily.semiBold};
  font-size: 16;
`;
