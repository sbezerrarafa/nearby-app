import React from 'react';
import * as S from './style';
import { IconTicket } from '@tabler/icons-react-native';
import { colors } from '@/styles/theme';
import { TouchableOpacityProps } from 'react-native';

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  cupons: number;
  cover: string;
  address: string;
};
type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export const Place = ({ data, ...rest }: Props) => {
  return (
    <S.Container {...rest}>
      <S.Image source={{ uri: data.cover }} />
      <S.Content>
        <S.Name>{data.name}</S.Name>
        <S.Description numberOfLines={2}>{data.description}</S.Description>
        <S.Footer>
          <IconTicket size={16} color={colors.red.base} />
          <S.Tickets>{data.cupons} cupons disponíveis</S.Tickets>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};
