import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
  pantallaContainer:{
    flex:1,
    backgroundColor:"brown",
    alignItems:"center"

  },
  inputContainer: {
    marginTop: 30,
    paddingHorizontal: 100,
    justifyContent:"center",
    backgroundColor:"blue"
  },
  addItem:{
    height:80,
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor:"yellow"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 200,

  },
  button:{
    textAlign:"center",
    width:150,
    flexWrap:"wrap",
    color:"blue"
  },
  ItemStyle :{

    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  }
  

})

export default styles