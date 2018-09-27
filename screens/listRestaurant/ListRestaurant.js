import React from 'react'
import { Text } from '../../styles'
import {
  ListBox,
  ViewButtons,
  Image,
  ViewImages
} from './ListRestaurant.style'
import { Button } from '../../styles'
import { FlatList, TouchableOpacity } from 'react-native'

export default function ListRestaurant ({ navigation }) {
  return (
    <ListBox>
      <Text h2>Choose the best restaurants around you!</Text>
      <Text h3>Sort by:</Text>
      <ViewButtons>
        <Button info title={'price'} />
        <Button action title={'distance'} />
        <Button std title={'rate'} />
      </ViewButtons>
      <FlatList
        horizontal={false}
        numColumns={3}
        data={[
          {
            key: 'Restaurant A',
            image: require('../../imgs/food-1.png')
          },
          { key: 'Restaurant B', image: require('../../imgs/food-2.png') },
          { key: 'Restaurant C', image: require('../../imgs/food-3.png') },
          { key: 'Restaurant D', image: require('../../imgs/food-4.png') },
          { key: 'Restaurant E', image: require('../../imgs/food-4.png') },
          { key: 'Restaurant F', image: require('../../imgs/food-4.png') },
          { key: 'Restaurant G', image: require('../../imgs/food-4.png') },
          { key: 'Restaurant G', image: require('../../imgs/food-4.png') },
          { key: 'Restaurant H', image: require('../../imgs/food-4.png') },
          { key: 'Restaurant I', image: require('../../imgs/food-4.png') },
          { key: 'Restaurant J', image: require('../../imgs/food-4.png') },
          { key: 'Restaurant L', image: require('../../imgs/food-4.png') },
          { key: 'Restaurant M', image: require('../../imgs/food-4.png') },
          { key: 'Restaurant N', image: require('../../imgs/food-4.png') }
        ]}
        renderItem={({ item }) =>
          <ViewImages>
            <Text h2>
              {item.key}
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', { restaurant: item })}
            >
              <Image source={item.image} />
            </TouchableOpacity>
          </ViewImages>}
      />
    </ListBox>
  )
}
