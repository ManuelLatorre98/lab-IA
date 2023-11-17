import { StyleSheet } from "react-native";

const responseScreenStyles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    gap:50
  },
  image:{
    width:300,
    height:300,
    borderRadius:50,
    borderWidth:3,
  },
  bruise:{
    borderColor:'green'
  },
  notBruise:{
    borderColor:'red'
  },
  message:{
    fontSize:18
  }
})

export {responseScreenStyles}
