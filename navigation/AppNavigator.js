import React from 'react';
import { View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import App from '../App';

const BottomTabStack = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <BottomTabStack.Navigator
      initialRouteName="Home"
    //   screenOptions={({route}) => ({
    //     tabBarIcon: ({focused, color, size}) => {
    //       const homeiconimg = focused
    //         ? images.home_active
    //         : images.home_inactive;
    //       const ordersiconimg = focused
    //         ? images.orders_active
    //         : images.orders_inactive;
    //       const mystoreiconimg = focused
    //         ? images.mystore_active
    //         : images.mystore_inactive;
    //       const profileiconimg = focused
    //         ? images.profile_active
    //         : images.profile_inactive;
    //       if (route.name === 'Home') {
    //         return (
    //           <Image
    //             source={homeiconimg}
    //             style={Styles.ImageStyles.bottomTabIcons}
    //             resizeMode="contain"
    //           />
    //         );
    //       } else if (route.name === 'Orders') {
    //         return (
    //           <Image
    //             source={ordersiconimg}
    //             style={Styles.ImageStyles.bottomTabIcons}
    //             resizeMode="contain"
    //           />
    //         );
    //       } else if (route.name === 'addIcon') {
    //         return <AddIcon_Index />;
    //       } else if (route.name === 'MyStore') {
    //         return (
    //           <Image
    //             source={mystoreiconimg}
    //             style={Styles.ImageStyles.bottomTabIcons}
    //             resizeMode="contain"
    //           />
    //         );
    //       } else if (route.name === 'Profile') {
    //         return (
    //           <Image
    //             source={profileiconimg}
    //             style={Styles.ImageStyles.bottomTabIcons}
    //             resizeMode="contain"
    //           />
    //         );
    //       }
    //     },
    //   })}
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: 'rgba(0,0,0,0.3)',
      }}
      backBehavior="history">
      <BottomTabStack.Screen name="Home" component={App} />
      <BottomTabStack.Screen name="Orders" component={App} />
      {/* <BottomTabStack.Screen
        name="Add"
        component={AddIconStack}
        listeners={{
          tabPress: e => {
            e.preventDefault(); // — > the main part
          },
        }}
        options={{
          title: '',
          tabBarIcon: ({focused}) => <CenterButton focused={focused} />,
        }}></BottomTabStack.Screen> */}
      <BottomTabStack.Screen name="MyStore" component={App} />
      <BottomTabStack.Screen name="Profile" component={App} />
    </BottomTabStack.Navigator>
  )
}

export default AppNavigator;