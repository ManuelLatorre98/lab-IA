import React from 'react';
import { LogBox, SafeAreaView, View } from "react-native";
import { ImageScanner } from "./components/imageScanner/imageScanner";
import { MainScreen } from "./components/mainScreen/mainScreen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ResponseScreen } from "./components/responseScreen/responseScreen";

const Stack = createStackNavigator()
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
function App(): JSX.Element {
  return(
    <NavigationContainer theme={{...DefaultTheme, colors:{...DefaultTheme.colors,background:'#2C2C2C'}}}>
      <Stack.Navigator
        initialRouteName="Reconocimiento de equimosis"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1E1E1E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name={"MainScreen"} component={MainScreen} options={{headerTitle: "Reconocimiento de" +
            " equimosis"}}/>
        <Stack.Screen name={"Camera"} component={ImageScanner} options={{headerTitle: "Reconocimiento de equimosis"}}/>
        <Stack.Screen name={"ResponseScreen"} component={ResponseScreen} options={{headerTitle: "Reconocimiento de" +
            " equimosis"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    /*<View style={{flex:1}}>
      {/!*<ImageScanner/>
      <ImageSelector/>*!/}
      <MainScreen/>
    </View>*/
  )
}


export default App;
