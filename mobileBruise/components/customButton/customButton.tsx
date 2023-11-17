import { TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { imageButtonStyles } from "./styles";

interface Props{
  onPressFunc: any,
  icon: IconDefinition
}
function CustomButton(props: Props){
  const {onPressFunc, icon} = props
  return(
  <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}>
    <TouchableOpacity onPress={onPressFunc} style={imageButtonStyles.button}>
      <View style={imageButtonStyles.iconContainer}>
        <FontAwesomeIcon icon={icon} size={60} style={imageButtonStyles.icon} />
        <FontAwesomeIcon icon={faPlus} size={20} style={imageButtonStyles.iconPlus} />
      </View>
    </TouchableOpacity>
  </View>
  )
}

export {CustomButton}
