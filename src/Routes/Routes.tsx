/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer, } from '@react-navigation/native'
import { createStackNavigator, } from '@react-navigation/stack'
import AddFood from '@components/AddFood'
import Home from '@components/Home'

const Stack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='AddFood' component={AddFood} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
