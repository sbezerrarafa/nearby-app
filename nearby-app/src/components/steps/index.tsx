import React from 'react';
import * as S from './style';
import Step from '../step';
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native';

const Steps = () => {
  return (
    <S.Container>
      <S.Title>Veja como funciona:</S.Title>
      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
      />
      <Step
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />
      <Step
        icon={IconTicket}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento "
      />
    </S.Container>
  );
};
export default Steps;
