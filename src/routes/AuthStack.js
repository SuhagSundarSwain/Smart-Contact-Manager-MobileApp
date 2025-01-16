import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const AuthStack = ({component, name = component.name}) => {
  const {loginStatus} = useSelector(state => state.auth);
  return (
    <Stack.Navigator>
      {loginStatus ? (
        <Stack.Screen name={name + ' '} component={component} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
