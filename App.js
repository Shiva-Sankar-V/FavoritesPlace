import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="All Places"
            component={AllPlaces}
            options={{
              headerRight: ({ tintColor }) => (
                <IconButton icon="add" size={24} color={tintColor} />
              ),
            }}
          />
          <Stack.Screen name="Add Place" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
