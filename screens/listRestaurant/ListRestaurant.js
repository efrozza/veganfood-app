import React from 'react'
import { Text } from '../../styles'
import { ListBox, ViewButtons } from './ListRestaurant.style'
import { Button } from '../../styles'
import { FlatList, Image, View, TouchableOpacity } from 'react-native'

export default function ListRestaurant ({ navigation }) {
  return (
    <ListBox>
      <Text h2>Choose the best restaurants around you</Text>
      <Text h3>Sort by:</Text>
      <ViewButtons>
        <Button info title={'price'} />
        <Button action title={'price'} />
        <Button std title={'distance'} />
      </ViewButtons>
      <FlatList
        horizontal={false}
        numColumns={3}
        data={[
          { key: 'Restaurant A' },
          { key: 'Restaurant B' },
          { key: 'Restaurant C' },
          { key: 'Restaurant D' },
          { key: 'Restaurant E' },
          { key: 'Restaurant F' },
          { key: 'Restaurant G' }
        ]}
        renderItem={({ item }) =>
          <View style={{ margin: 3 }}>
            <Text h2>
              {item.key}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RestaurantDetail')}
            >
              <Image source={require('../../imgs/food-1.png')} />
            </TouchableOpacity>
          </View>}
      />
    </ListBox>
  )
}
