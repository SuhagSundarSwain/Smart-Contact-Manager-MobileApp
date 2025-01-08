import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import AddContacts from '../screens/AddContacts';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Add Contact"
      screenOptions={{
        tabBarActiveTintColor: '#7654ff',
        tabBarActiveBackgroundColor: '#eaeaea',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" size={size} color={color} />
          ),
          header: () => {},
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="address-book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Contact"
        component={AddContacts}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome6 name="circle-user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
