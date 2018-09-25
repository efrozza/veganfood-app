import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Login from './screens/login/Login'

export default createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  }
})
