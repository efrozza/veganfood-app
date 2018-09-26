import React from 'react'
import { TextInput, FormControl, Button } from '../../styles'
import { Title, LoginBox, ViewButtons } from './Login.style'
import { white } from '../../styles/colors'
export default function Login ({ navigation }) {
  return (
    <LoginBox>
      <Title h2>Login Form</Title>
      <FormControl>
        <TextInput
          placeholder={'username or email'}
          placeholderTextColor={white}
        />
      </FormControl>
      <FormControl>
        <TextInput
          placeholder={'password'}
          type='password'
          secureTextEntry
          placeholderTextColor={white}
        />
      </FormControl>
      <ViewButtons>
        <Button std title={'Login'} />
        <Button
          action
          title={'Register'}
          onPress={() => navigation.navigate('Register')}
        />
      </ViewButtons>
    </LoginBox>
  )
}
