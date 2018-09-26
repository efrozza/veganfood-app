import React from 'react'
import { Text } from '../../styles'
import { ListBox, ViewButtons } from './ListRestaurant.style'
import { Button } from '../../styles'

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
    </ListBox>
  )
}
