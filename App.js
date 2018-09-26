import { createStackNavigator } from 'react-navigation'
import Login from './screens/login/Login'
import Register from './screens/register/Register'
import ListRestaurant from './screens/listRestaurant/ListRestaurant'
import { green } from './styles/colors'

export default createStackNavigator(
  {
    Register: {
      screen: Register
    },
    Login: {
      screen: Login
    },
    ListRestaurant: {
      screen: ListRestaurant
    }
  },
  {
    initialRouteName: 'ListRestaurant',
    header: null,
    navigationOptions: {
      title: 'Vegan food App'
    },
    headerTintColor: green
  }
)
