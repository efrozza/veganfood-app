import { createStackNavigator } from 'react-navigation'
import Login from './screens/login/Login'
import Register from './screens/register/Register'
import ListRestaurant from './screens/listRestaurant/ListRestaurant'
import RestaurantDetail from './screens/restaurantDetail/RestaurantDetail'
import { green, white } from './styles/colors'

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
    },
    RestaurantDetail: {
      screen: RestaurantDetail
    }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      title: 'Vegan Food App',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: green
      }
    }
  }
)

export default AppNavigation
