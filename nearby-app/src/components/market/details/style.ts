import { styled } from 'styled-components/native';
import { fontFamily, colors } from '@/styles/theme';

export const Container = styled.View`
  padding: 32px;
  padding-bottom: 0;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: ${colors.gray[100]};
`;
export const Name = styled.Text`
  font-size: 20px;
  font-family: ${fontFamily.bold};
  color: ${colors.gray[600]};
`;
export const Description = styled.Text`
  font-size: 16px;
  font-family: ${fontFamily.regular};
  color: ${colors.gray[500]};
  margin-top: 12px;
  margin-bottom: 32px;
  line-height: 22;
`;
export const Group = styled.View`
  width: '100%';
  border-bottom-width: 1;
  border-bottom-color: ${colors.gray[200]};
  padding-bottom: 16px;
  margin-bottom: 16px;
`;
export const Title = styled.Text`
  font-size: 14px;
  font-family: ${fontFamily.medium};
  color: ${colors.gray[500]};
  margin-bottom: 12px;
`;
export const Rule = styled.Text`
  font-size: 14px;
  font-family: ${fontFamily.regular};
  color: ${colors.gray[500]};
  line-height: 22;
`;
