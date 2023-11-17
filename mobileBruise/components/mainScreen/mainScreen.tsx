import { Image, LogBox, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faCamera, faPlus } from "@fortawesome/free-solid-svg-icons";
import { mainScreenStyles } from "./styles";
import { useEffect, useState } from "react";
import { ImageScanner } from "../imageScanner/imageScanner";
import { CustomButton } from "../customButton/customButton";
import { launchImageLibrary } from "react-native-image-picker";
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
interface PropsResponse {
  image: string;
  result: number;
}
function MainScreen({navigation }:any){
  const [image ,setImage] = useState<any>("")
  const openCamera=()=>{
    navigation.navigate('Camera',{image,setImage})
  }

  const openImagePicker =()=>{
    const options = {
      title: 'Selecciona una imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options,(response)=>{
      if(response.didCancel){
        console.log("User cancelled image picker")
      }else if(response.errorMessage){
        console.log('Image picker error: ',response.errorMessage)
      }else{
        let imageUri = response.assets?.[0]?.uri
        setImage(imageUri)
      }
    })
  }

  const generateForm = (): FormData => {
    try {
      const formData = new FormData();
      formData.append('imagen', {
        uri: image,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });
      return formData;
    } catch (e) {
      throw e;
    }
  };

  const sendPetitionToServer= async (formData: FormData): Promise<{ mensaje:number }>=> {
    return new Promise(async (resolve,reject)=>{
      try{
        const response = await fetch(
          'http://localhost:5000/predict',{
            method:'POST',
            body:formData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
        const data = (JSON.parse(await response.json()))
        resolve(data)
      }catch(e){
        reject(e)
      }
    })

  }

const manageImage= async() => {
  const imageForm = generateForm();
  const response= await sendPetitionToServer(imageForm);
  const imageCopy= image
  const parametrosResp: PropsResponse = {
    image:imageCopy,
    result:response.mensaje
  }
  navigation.navigate("ResponseScreen",parametrosResp)
  setImage("")
}
  useEffect(() => {
    if(image!="") {
      manageImage()
    }

  }, [image]);

  return(
    <View style={mainScreenStyles.container}>
      <CustomButton onPressFunc={openCamera} icon={faCamera}/>
      <CustomButton onPressFunc={openImagePicker} icon={faImage}/>

      {/*<ImageSelector/>*/}

    </View>
  )
}
export { MainScreen }
