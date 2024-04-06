import { useState } from "react";
import { Alert, Button, Image,ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
const App = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPress = ()=>
  {
    Alert.alert(`Dang nhap thanh cong voi user name = ${email}va password = ${password}` );
  }
  return(
    <ImageBackground
      source ={require("./asset/bg.jpg")}
      style ={{width: '100%', height: '100%'}}
      resize
    >
    <View style={mystyle.container}>
          <Image
            style={{width: 300,height: 300, alignSelf:"center"}}
            source={require("./asset/logo.jpg")}
            resize
          />
      
          <TextInput
            style={mystyle.textInput}
            onChangeText={setEmail}
            placeholder="Nhap user name"
            placeholderTextColor={"white"}
            value={email}
            />
          <TextInput
            style={mystyle.textInput}
            onChangeText={setPassword}
            placeholder="Nhap password"
            placeholderTextColor={"white"}
            secureTextEntry
            value={password}
            />
          <TouchableHighlight
            style={mystyle.button}
            onPress={onPress}
          >
            <Text style={mystyle.buttonText}>
                Login
            </Text>
          </TouchableHighlight>
    </View>
    </ImageBackground>
  )
}

export default App;
const mystyle = StyleSheet.create(
  {
    container: {
      flex:1,
      padding: 10,
      justifyContent:"center"
    },
    textInput: {
      borderWidth:1,
      borderColor: "white",
      margin:5,
      color:"white"
    },
    button: {
      backgroundColor: "white",
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      margin: 5
    },
    buttonText: {
      color: "blue",
      fontSize: 20,
      fontweight: "bold"
    }
  }
)