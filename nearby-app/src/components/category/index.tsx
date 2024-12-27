import React from 'react';
import * as S from './style';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { categoriesIcons } from '@/utils/categories-icons';
import { colors } from '@/styles/theme';

type categoryProps = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
  style?: StyleProp<ViewStyle>;
};
const Category = ({
  name,
  iconId,
  style,
  isSelected = false,
  ...rest
}: categoryProps) => {
  const Icon = categoriesIcons[iconId];
  return (
    <S.Container {...rest} style={style} isSelected={isSelected}>
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <S.Nome isSelected={isSelected}>{name}</S.Nome>
    </S.Container>
  );
};

export default Category;
