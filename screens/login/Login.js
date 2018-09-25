import React from 'react'
import { TextInput, FormControl, Button } from '../../styles'
import { Title, LoginBox } from './Login.style'

export default function Login (props) {
  return (
    <LoginBox>
      <Title h2>Login teste !</Title>
      <FormControl>
        <TextInput placeholder={'username or email'} />
      </FormControl>
      <FormControl>
        <TextInput placeholder={'password'} type='password' secureTextEntry />
      </FormControl>
      <Button info title={'Login'} />
      <Button info title={'Register'} />
    </LoginBox>
  )
}
