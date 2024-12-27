import { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { api } from '@/services/api';
import { Categories } from '@/components/categories';
import { CategoriesProps } from '@/components/categories';
import { PlaceProps } from '@/components/place';
import Places from '@/components/places';

type MarketProps = PlaceProps & {};

const Home = () => {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState('');
  const [markets, setMarkets] = useState<MarketProps[]>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get('/categories');
      setCategories(data);
      console.log(categories, 'dsas');
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
    } catch (error) {
      console.log(error);
      Alert.alert('Locais', 'Não, foi possível carregar os locais');
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]); //aqui entendi um bom conceito de quando usar dependencia, ele vai ser somente executado quando tiver a categoria

  return (
    <View style={{ flex: 1, backgroundColor: '#cecece' }}>
      <Categories
        onSelect={setCategory}
        data={categories}
        selected={category}
      />
      <Places data={markets} />
    </View>
  );
};

export default Home;
