import React from 'react';
import { LogBox, SafeAreaView, View } from "react-native";
import { ImageScanner } from "./components/imageScanner/imageScanner";
import { MainScreen } from "./components/mainScreen/mainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ResponseScreen } from "./components/responseScreen/responseScreen";
const Stack = createStackNavigator()
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
function App(): JSX.Element {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"MainScreen"}>
        <Stack.Screen name={"MainScreen"} component={MainScreen}/>
        <Stack.Screen name={"Camera"} component={ImageScanner}/>
        <Stack.Screen name={"ResponseScreen"} component={ResponseScreen}/>
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
