import React from 'react';
import { IconArrowLeft } from '@tabler/icons-react-native';
import { router } from 'expo-router';
import Button from '@/components/button';
import * as S from './style';

type coverProps = {
  uri: string;
};

const Cover = ({ uri }: coverProps) => {
  return (
    <S.Container source={{ uri }}>
      <S.Header>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </S.Header>
    </S.Container>
  );
};

export default Cover;
