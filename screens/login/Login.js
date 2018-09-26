import React from 'react'
import { TextInput, FormControl, Button } from '../../styles'
import { Title, LoginBox, ViewButtons } from './Login.style'

export default function Login ({ navigation }) {
  return (
    <LoginBox>
      <Title h2>Login Form</Title>
      <FormControl>
        <TextInput placeholder={'username or email'} />
      </FormControl>
      <FormControl>
        <TextInput placeholder={'password'} type='password' secureTextEntry />
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
