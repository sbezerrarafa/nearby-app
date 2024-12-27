import React from 'react';
import * as S from './style';
import { IconProps } from '@tabler/icons-react-native';
import { colors } from '@/styles/theme';

interface IStepProps {
  title: string;
  description: string;
  icon?: React.ComponentType<IconProps>;
}

const Step: React.FC<IStepProps> = ({ title, description, icon: Icon }) => {
  return (
    <S.Container>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <S.Details>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Details>
    </S.Container>
  );
};

export default Step;
