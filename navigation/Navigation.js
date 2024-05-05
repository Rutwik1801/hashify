import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Leaderboard from '../screens/Leaderboard'
import Profile from '../screens/Profile'
import NewPost from '../screens/NewPost'
import SignIn from '../screens/SignIn'
import { useContext } from 'react'
import { AuthContext } from '../store/context/authContext'
import Feed from '../screens/Feed'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
 return (
 <Stack.Navigator>
  <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} options={{headerShown: false}} />
  <Stack.Screen name="New Post" component={NewPost} />
 </Stack.Navigator>
 );
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );

}

export default function Navigation() {
  const authContext = useContext(AuthContext)
 return <NavigationContainer>
  {authContext.isLoggedIn ? 
  <StackNavigation /> :
  <Stack.Navigator>
  <Stack.Screen name="SignIn" component={SignIn} />
 </Stack.Navigator>}
 </NavigationContainer>
}