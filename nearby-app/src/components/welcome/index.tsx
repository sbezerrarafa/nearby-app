import React from 'react';
import { View } from 'react-native';
import * as S from './style';

const Welcome = () => {
  return (
    <View>
      <S.Logo source={require('@/assets/logo.png')} />
      <S.Title>Boas vindas ao Nerby!</S.Title>
      <S.SubTitle>
        Tenha cupons de vantagens para usar em {'\n'}seus estabelecimentos
        favoritos.
      </S.SubTitle>
    </View>
  );
};

export default Welcome;
