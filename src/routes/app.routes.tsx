import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashBoard from '../pages/DashBoard';
import AppointmentCreated from '../pages/AppointmentCreated';
import Profile from '../pages/Profile';
import CreateAppointment from '../pages/CreateAppointment';

const App = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="DashBoard" component={DashBoard} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />
    <App.Screen name="CreateAppointment" component={CreateAppointment} />

    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AuthRoutes;
