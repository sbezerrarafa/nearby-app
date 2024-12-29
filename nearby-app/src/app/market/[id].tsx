import React, { useEffect, useState, useRef } from 'react';
import { Alert, Modal, Text, View, StatusBar, ScrollView } from 'react-native';
import { router, useLocalSearchParams, Redirect } from 'expo-router';
import { useCameraPermissions, CameraView } from 'expo-camera';
import { api } from '@/services/api';
import Loading from '@/components/loading';
import Cover from '@/components/market/cover';
import { PropsDetails } from '@/components/market/details';
import Details from '@/components/market/details';
import Cupon from '@/components/market/cupon';
import Button from '@/components/button';

type DataProps = PropsDetails & {
  cover: string;
  id: string;
};

const Market = () => {
  const [data, setData] = useState<DataProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [coupon, setCoupon] = useState<string | null>(null);
  const [isCameraModal, setIsCameraModal] = useState(false);
  const [couponIsFetch, setCouponIsFetching] = useState(false);

  const params = useLocalSearchParams<{ id: string }>();

  const qrLock = useRef(false);
  console.log(params.id, 'aqui o  id');

  const [_, requestPermission] = useCameraPermissions();

  async function fetchMarket() {
    try {
      const { data } = await api.get('/markets/' + params.id);
      setData(data);
      setIsLoading(false);
      console.log(data, 'dasdas');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'não foi possivel carregar os dados', [
        {
          text: 'Ok',
          onPress: () => router.back(),
        },
      ]);
    }
  }

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission();
      if (!granted) {
        return Alert.alert('Câmera', 'Você precisa habilitar o uso da câmera');
      }
      setIsCameraModal(true);
    } catch (error) {
      console.log(error);
      Alert.alert('Câmera', 'Não foi possivel usar a câmera');
    }
  }

  async function getCoupon(id: string) {
    try {
      setCouponIsFetching(true);
      const { data } = await api.patch('/coupons/' + id);
      Alert.alert('Cupom', data.coupon);
      setCoupon(data.coupon);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível utilizar o cupom');
    } finally {
      setCouponIsFetching(false);
    }
  }

  function handleUseCoupon(id: string) {
    setIsCameraModal(false);
    Alert.alert(
      'Cupom',
      'Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?',
      [
        { style: 'cancel', text: 'Não' },
        { text: 'Sim', onPress: () => getCoupon(id) },
      ],
    );
    console.log('olha aqui' + getCoupon(id));
  }
  useEffect(() => {
    fetchMarket();
  }, [params.id, coupon]);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <Redirect href={'/home'} />;
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar barStyle={'light-content'} hidden={isCameraModal} />
        <Cover uri={data.cover} />
        <Details data={data} />
        {coupon && <Cupon code={coupon} />}
      </ScrollView>
      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
        <Modal style={{ flex: 1 }} visible={isCameraModal}>
          <CameraView
            facing="back"
            onBarcodeScanned={({ data }) => {
              if (data && !qrLock.current) {
                qrLock.current = true;
                setTimeout(() => handleUseCoupon(data), 500);
              }
            }}
            style={{ flex: 1 }}
          />
          <View
            style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}
          >
            <Button
              onPress={() => setIsCameraModal(false)}
              isLoading={couponIsFetch}
            >
              <Button.Title>Voltar</Button.Title>
            </Button>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Market;
