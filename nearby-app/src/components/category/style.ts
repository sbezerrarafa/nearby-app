import { styled } from 'styled-components/native';
import { fontFamily, colors } from '@/styles/theme';

export const Container = styled.Pressable<{ isSelected: boolean }>`
  height: 36;
  background-color: ${({ isSelected }) =>
    isSelected ? colors.green.base : colors.gray[100]};
  border-width: 1;
  border-color: ${colors.gray[300]};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10;
  padding-left: 16px;
  padding-right: 16px;
`;
export const Nome = styled.Text<{ isSelected: boolean }>`
  font-size: 14px;
  color: ${({ isSelected }) =>
    isSelected ? colors.gray[100] : colors.gray[500]};
  font-family: ${fontFamily.regular};
`;
