import { createStackNavigator } from 'react-navigation'
import Login from './screens/login/Login'
import Register from './screens/register/Register'
import ListRestaurant from './screens/listRestaurant/ListRestaurant'

const AppNavigation = createStackNavigator(
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
    initialRouteName: 'Login',
    header: null,
    navigationOptions: {
      title: 'Vegan food App'
    }
  }
)

export default AppNavigation
