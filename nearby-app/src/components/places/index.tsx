import React, { useRef } from 'react';
import { useWindowDimensions } from 'react-native';
import * as S from './style';
import { PlaceProps, Place } from '../place';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

type Props = {
  data: PlaceProps[];
};

const Places = ({ data }: Props) => {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      enableOverDrag={false}
      handleIndicatorStyle={S.styles.indicator}
      backgroundStyle={S.styles.container}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => <Place data={item} />}
        ListHeaderComponent={() => (
          <S.title>Explore locais perto de você</S.title>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={S.styles.content}
      />
    </BottomSheet>
  );
};

export default Places;
