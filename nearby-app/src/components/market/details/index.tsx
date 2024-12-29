import React from 'react';
import { IconPhone, IconMapPin, IconTicket } from '@tabler/icons-react-native';
import * as S from './style';
import Info from '../info';

export type PropsDetails = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: string;
  rules: {
    id: string;
    description: string;
  }[];
};
type Props = {
  data: PropsDetails;
};
const Details = ({ data }: Props) => {
  return (
    <S.Container>
      <S.Name>{data.name}</S.Name>
      <S.Description>{data.description}</S.Description>
      <S.Group>
        <S.Title>Informações</S.Title>
        <Info
          icon={IconTicket}
          description={`${data.coupons} cupons disponíveis`}
        />
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </S.Group>
      <S.Group>
        <S.Title>Regulamento</S.Title>
        {data.rules.map((item) => (
          <S.Rule key={item.id}>{`\u2022 ${item.description}`}</S.Rule>
        ))}
      </S.Group>
    </S.Container>
  );
};

export default Details;
