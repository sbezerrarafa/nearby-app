import React from 'react';
import * as S from './style';
import { IconProps } from '@tabler/icons-react-native';
import { colors } from '@/styles/theme';

type InfoProps = {
  description: string;
  icon: React.ComponentType<IconProps>;
};

const Info = ({ icon: Icon, description }: InfoProps) => {
  return (
    <S.Container>
      <Icon size={16} color={colors.gray[400]} />
      <S.Texts>{description}</S.Texts>
    </S.Container>
  );
};

export default Info;
