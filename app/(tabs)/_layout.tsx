import { Tabs } from "expo-router";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "indigo"}}>
      <Tabs.Screen 
        name="login" 
        options={{title: "Login", 
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="login" size={24} color={color} />
          )
        }} 
      />
      <Tabs.Screen 
        name="index" 
        options={{title: "Social Network", tabBarIcon: ({ color }) => (
          <Entypo name="network" size={24} color={color} />
      ),
    }} 
      />
      <Tabs.Screen 
        name="register" 
        options={{title: "Sign Up",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-plus" size={24} color={color} />
          )
        }} 
      />
    </Tabs>
  ); 
}
