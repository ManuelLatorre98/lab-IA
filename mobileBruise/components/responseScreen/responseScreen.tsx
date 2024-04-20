import { Image, ImageBackground, LogBox, Text, View } from "react-native";
import { responseScreenStyles } from "./styles";
import { useEffect, useState } from "react";

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
function ResponseScreen({route}:any){
  const {image,result} = route.params
  const [isBruise, setIsBruise] = useState<boolean>(false)
  const [confidence, setConfidence] = useState<number>(0.8)

  useEffect(() => {
    setIsBruise(result>=confidence)

    const resultNumber= result>0
  }, []);
  return(
    <View style={responseScreenStyles.container}>
      <Image source={{uri:image}} style={[responseScreenStyles.image, isBruise && responseScreenStyles.bruise, !isBruise && responseScreenStyles.notBruise]}/>

      {isBruise &&
        <Text style={responseScreenStyles.message}>Es equimosis con un {Math.floor(result * 100)}% de confianza</Text>
      }

      {!isBruise &&
        <Text style={responseScreenStyles.message}>No es equimosis con un {confidence*100}% de confianza</Text>
      }

    </View>
  )
}

export {ResponseScreen}
