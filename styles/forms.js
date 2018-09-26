import React from 'react'
import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { green, orange } from './colors'
import { Text } from './typeText'

export const TextInput = styled.TextInput`padding-vertical: 5px;`
export const FormControl = styled.View`margin-bottom: 24px;`

const ButtonBox = styled.View`
  align-items: center;
  width: 110px;
  padding-vertical: 10px;
  border-radius: 4px;
  margin: 5px;
  ${({ info }) =>
    info &&
    css`
    background-color: ${green};    
`};

  ${({ action }) =>
    action &&
    css`
    background-color: ${orange};    
`};
`

export const Button = ({ title, onPress, ...rest }) =>
  <TouchableOpacity onPress={onPress}>
    <ButtonBox {...rest}>
      <Text h2>
        {title}
      </Text>
    </ButtonBox>
  </TouchableOpacity>
