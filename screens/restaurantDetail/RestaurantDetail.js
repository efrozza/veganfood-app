import React from 'react'
import { Container, Text } from '../../styles'
import { Image } from 'react-native'

export default function RestaurantDetail ({ navigation }) {
  const restaurant = navigation.getParam('restaurant')

  return (
    <Container>
      <Text h1>
        {restaurant.key}
      </Text>
      <Image source={restaurant.image} />
    </Container>
  )
}
