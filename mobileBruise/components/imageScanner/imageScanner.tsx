import { Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import { imageScannerStyles } from "./styles";

function ImageScanner({route}:any){
  let camera:any
  const {image,setImage} = route.params

  const takePicture = async () => {
    if (camera) {
      try {
        const options = { quality: 1, base64: true };
        const data = await camera.takePictureAsync(options);
        setImage(data.uri);
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };
  return(
    <View style={imageScannerStyles.container}>
      <RNCamera
        ref={ref => {
          camera = ref;
        }}
        style={imageScannerStyles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel"
        }}
        captureAudio={false}
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={takePicture} style={imageScannerStyles.capture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export {ImageScanner}
