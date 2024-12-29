import React from 'react';
import * as S from './style';
import { colors } from '@/styles/theme';
import { IconTicket } from '@tabler/icons-react-native';

type CuponProps = {
  code: string;
};

const Cupon = ({ code }: CuponProps) => {
  return (
    <S.Container>
      <S.Title>Utilize este cupom</S.Title>
      <S.Content>
        <IconTicket size={24} color={colors.green.light} />
        <S.Code>{code}</S.Code>
      </S.Content>
    </S.Container>
  );
};

export default Cupon;
