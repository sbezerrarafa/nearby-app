import { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { api } from '@/services/api';
import { Categories } from '@/components/categories';
import { CategoriesProps } from '@/components/categories';
import { PlaceProps } from '@/components/place';
import Places from '@/components/places';
import MapView, { Callout, Marker } from 'react-native-maps';
import { colors, fontFamily } from '@/styles/theme';
import { router } from 'expo-router';

type MarketProps = PlaceProps & {
  latitude: number;
  longitude: number;
};

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
};

//caso queira pegar pela localização do usuario
import * as Location from 'expo-location';

const Home = () => {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState('');
  const [markets, setMarkets] = useState<MarketProps[]>([]);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: -23.561187293883442,
    longitude: -46.656451388116494,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [key, setKey] = useState(0);

  async function fetchCategories() {
    try {
      const { data } = await api.get('/categories');
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert('Categorias', 'Não, foi possível carregar as categorias');
    }
  }

  async function fetchMarkets() {
    try {
      if (!category) {
        return;
      }
      const { data } = await api.get('/markets/category/' + category);
      setMarkets(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Locais', 'Não, foi possível carregar os locais');
    }
  }

  //caso queira pegar pela localização do usuario
  async function getCurrentLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (granted) {
        const location = await Location.getCurrentPositionAsync({});
        console.log(location);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]); //aqui entendi um bom conceito de quando usar dependencia, ele vai ser somente executado quando tiver a categoria

  useEffect(() => {
    setTimeout(() => {
      setCurrentLocation({
        latitude: -23.564187293883442,
        longitude: -46.653451388116494,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setKey((prevKey) => prevKey + 1);
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#cecece' }}>
      <Categories
        onSelect={setCategory}
        data={categories}
        selected={category}
      />
      <MapView key={key} style={{ flex: 1 }} initialRegion={currentLocation}>
        <Marker
          identifier="current"
          coordinate={currentLocation}
          image={require('@/assets/location.png')}
        />
        {markets.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            image={require('@/assets/pin.png')}
          >
            <Callout
              style={{ zIndex: 3 }}
              onPress={() => router.navigate(`/market/${item.id}`)}
            >
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'white', // Certifique-se de que o fundo seja visível
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.gray[600],
                    fontFamily: fontFamily.medium,
                  }}
                >
                  {item.name || 'Nome não disponível'}
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    color: colors.gray[600],
                    fontFamily: fontFamily.regular,
                  }}
                >
                  {item.address || 'Endereço não disponível'}
                </Text>
                <Text>dasdasdasdasdasdasdasdasdasdasdasd</Text>
                <View
                  style={{ backgroundColor: 'red', width: 321, height: 3321 }}
                ></View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Places data={markets} />
    </View>
  );
};

export default Home;
