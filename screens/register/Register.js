import React from 'react'
import { TextInput, FormControl, Button } from '../../styles'
import { RegisterBox, Title } from './Register.style'

export default function Register ({ navigation }) {
  return (
    <RegisterBox>
      <Title h2>Register!</Title>
      <FormControl>
        <TextInput placeholder={'name'} />
      </FormControl>
      <FormControl>
        <TextInput placeholder={'last name'} />
      </FormControl>
      <FormControl>
        <TextInput placeholder={'username or email'} />
      </FormControl>
      <FormControl>
        <TextInput placeholder={'password'} type='password' secureTextEntry />
      </FormControl>
      <Button action title={'Register'} />
    </RegisterBox>
  )
}
