import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import AddContacts from '../screens/AddContacts';
import HomeIcon from 'react-native-vector-icons/Entypo';
import ContactIcon from 'react-native-vector-icons/FontAwesome'; // Optional icons
import AddIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#7654ff',
        tabBarActiveBackgroundColor: '#eaeaea',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <HomeIcon name="home" size={size} color={color} />
          ),
          header: () => null,
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({color, size}) => (
            <ContactIcon name="address-book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddContact"
        component={AddContacts}
        options={{
          tabBarIcon: ({color, size}) => (
            <AddIcon name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
