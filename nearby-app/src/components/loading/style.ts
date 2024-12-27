import { styled } from 'styled-components/native';
import { colors } from '@/styles/theme';

export const Loading = styled.ActivityIndicator`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray[100]};
`;
