import { StyleSheet } from "react-native";

const imageButtonStyles= StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width: 150,
    height:150,
    marginTop:50,
    borderRadius:100,
    backgroundColor: 'rgb(69,70,69)',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  iconContainer:{
    flexDirection:'row',
    paddingLeft:10
  },
  icon:{
    color:'gray'
  },
  iconPlus:{
    color:'gray',
    alignSelf:'flex-end',
  },
})

export { imageButtonStyles }
