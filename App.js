import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthProvider, AuthContext } from "./context/AuthContext";

import Home from "./screens/Home";
import Account from "./screens/Account";
import SignIn from "./screens/SignIn";

const Tab = createBottomTabNavigator();

function MainApp() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator>
          <Tab.Screen name="Explorer" component={Home} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      ) : (
        <SignIn />
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}