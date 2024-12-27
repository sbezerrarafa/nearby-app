import { styled } from 'styled-components/native';
import { colors, fontFamily } from '@/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray[300],
  },
  container: {
    backgroundColor: colors.gray[100],
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },
});

export const title = styled.Text`
  color: ${colors.gray[600]};
  font-size: 16;
  font-family: ${fontFamily.regular};
  margin-bottom: 16;
`;
