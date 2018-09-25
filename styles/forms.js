import React from 'react'
import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { green } from './colors'
import { Text } from './typeText'

export const TextInput = styled.TextInput`padding-vertical: 5px;`
export const FormControl = styled.View`margin-bottom: 24px;`

const ButtonBox = styled.View`
  padding-vertical: 20px;
  flex-direction: column;
  align-items: center;

  ${({ info }) =>
    info &&
    css`
    background-color: ${green};    
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
