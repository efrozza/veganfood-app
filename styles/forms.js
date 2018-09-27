import React from 'react'
import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { green, orange, blue, white } from './colors'
import { Text } from './typeText'

export const TextInput = styled.TextInput`
  padding-vertical: 5px;
  color: ${white};
`
export const FormControl = styled.View`margin-bottom: 24px;`

const ButtonBox = styled.View`
  align-items: center;
  width: 105px;
  padding-vertical: 10px;
  border-radius: 4px;
  margin: 5px;

  ${({ std }) =>
    std &&
    css`
  background-color: ${green};    
`};

  ${({ info }) =>
    info &&
    css`
    background-color: ${blue};    
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
