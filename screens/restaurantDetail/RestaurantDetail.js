import React from 'react'
import { Container, Text } from '../../styles'
import { ViewImages, Image } from './RestaurantDetail.style'
import { FlatList } from 'react-native'

export default function RestaurantDetail ({ navigation }) {
  const restaurant = navigation.getParam('restaurant')
  return (
    <Container>
      <Text h1>
        {restaurant.key}
      </Text>
      <Image source={restaurant.image} />
      <Text h2>Items:</Text>
      <FlatList
        horizontal={false}
        numColumns={3}
        data={[
          {
            key: 'Item A',
            image: require('../../imgs/food-1.png')
          },
          { key: 'Item B', image: require('../../imgs/food-2.png') },
          { key: 'Item C', image: require('../../imgs/food-3.png') },
          { key: 'Item D', image: require('../../imgs/food-4.png') },
          { key: 'Item E', image: require('../../imgs/food-4.png') },
          { key: 'Item F', image: require('../../imgs/food-4.png') },
          { key: 'Item G', image: require('../../imgs/food-4.png') },
          { key: 'Item G', image: require('../../imgs/food-4.png') },
          { key: 'Item H', image: require('../../imgs/food-4.png') },
          { key: 'Item I', image: require('../../imgs/food-4.png') },
          { key: 'Item J', image: require('../../imgs/food-4.png') },
          { key: 'Item L', image: require('../../imgs/food-4.png') },
          { key: 'Item M', image: require('../../imgs/food-4.png') },
          { key: 'Item N', image: require('../../imgs/food-4.png') }
        ]}
        renderItem={({ item }) =>
          <ViewImages>
            <Text h2>
              {item.key}
            </Text>
            <Image source={item.image} />
          </ViewImages>}
      />
    </Container>
  )
}
