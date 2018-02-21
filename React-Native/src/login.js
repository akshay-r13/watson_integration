import React, { Component } from 'react'
import { View, Text,  Alert, Button, TextInput, TouchableOpacity } from 'react-native';
import HomeScreen from './welcome';
export default class LoginScreen extends Component{
  static navigationOptions = {
    title: 'Login',
    headerLeft: null
  };
  state = {
    username: '',
    password: '',
    auth_token: ''
  }
Signup = async () => {
    fetch('https://auth.accumulate65.hasura-app.io/v1/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "provider": "username",
        "data": {
        "username": this.state.username,
        "password": this.state.password
        }
        })
    }).then((response) => response.json())
    .then((res) => {
      if(typeof(res.message) != "undefined"){
      Alert.alert("Error signing up", "Error: "+ res.message);
}
      else{
      this.setState({ auth_token: res.auth_token });
      Alert.alert("Success", "You have succesfully signed up");
      }
    }).catch((error) => {
    console.error(error);
    });
  }
  Login = async () => {
    fetch('https://auth.accumulate65.hasura-app.io/v1/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "provider": "username",
            "data": {
                "username": this.state.username,
                "password": this.state.password
            }
          })
        }).then((response) => response.json())
        .then((res) => {
      if(typeof(res.message) != "undefined"){
       Alert.alert("Error", "Error: "+ res.message);
      }
      else{
        this.setState({ auth_token: res.auth_token });
        Alert.alert("Welcome", " You have succesfully logged in");
        
        //navigation.navigate('Welcome')

        }
     }).catch((error) => {
         console.error(error);
        });
  }
  render(){
  //If auth token is not present
   if(this.state.auth_token==''){
     return(
     <View style={
      {
         
          
          marginBottom: 7,
        
          borderRadius: 3 ,
          marginTop:7,
          borderColor:'#95B9C7',
          borderWidth:1.7,marginLeft:10,marginRight:5,
          backgroundColor:'#95B9C7'
      }
    }>
     <TextInput 
           placeholder="Enter Username"
           placeholderTextColor="#C2DFFF"
           onChangeText={ TextInputValue =>
           this.setState({username : TextInputValue }) }
           underlineColorAndroid='transparent'
           style={
           {
               textAlign: 'center',
               
               width: '95%',
               marginBottom: 7,
               height: 40,
               borderRadius: 3 ,
               fontSize: 20,
               borderColor:'#6681BE',marginTop:10,
               borderWidth:1,marginLeft:10,marginRight:5,paddingTop:5
           }
         }
         />
     <TextInput
           placeholder="Enter password"
           placeholderTextColor="#C2DFFF"
           onChangeText={ TextInputValue =>
           this.setState({password: TextInputValue }) }
           underlineColorAndroid='transparent'
           secureTextEntry={true}
           style={
           {
               textAlign: 'center',
               width: '95%',
               marginBottom: 7,
               
               height: 40,
               borderRadius: 3 ,
               fontSize: 20,
               borderColor:'#6681BE',
               borderWidth:1,marginLeft:10,marginRight:5
           }
         }
         />
        <TouchableOpacity onPress={this.Signup.bind(this)}>
        <View style={{height: 40, backgroundColor:
        'blue',justifyContent: 'center',padding:5,marginLeft:10,marginRight:10,
        alignItems: 'center',}}>
          <Text style={{
          fontSize: 20,
          color: '#FFFFFF',
          }}> 
          SIGNUP</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingTop:15}} onPress={this.Login.bind(this)}>
        <View style={{height: 40, backgroundColor:'blue',
        justifyContent: 'center',padding:5,marginLeft:10,marginRight:10,marginBottom:15,
        alignItems: 'center'}}>
          <Text style={{
          fontSize: 20,
          color: '#FFFFFF',
          }}> 
          LOGIN </Text>
        </View>
        </TouchableOpacity>
     </View>
        );
      }
/* Checking if the auth token is not empty directly sending the user to Home screen */
      else{
        const {navigate}=this.props.navigation;
        return(  <View style={{marginTop:20}}>
          
            

         <TouchableOpacity  onPress={() => navigate('Welcome')}>
        <View style={{height: 35, backgroundColor:
        'blue',justifyContent: 'center',padding:5,marginLeft:7,marginRight:8,
        alignItems: 'center'}}>
          <Text style={{
          fontSize: 17,
          color: '#FFFFFF',
          }}> 
          GO TO NEXT PAGE</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => navigate('Login')}>
        <View style={{height: 35, backgroundColor:
        'blue',justifyContent: 'center',padding:5,marginLeft:7,marginRight:8,
        alignItems: 'center',marginTop:20}}>
          <Text style={{
          fontSize: 17,
          color: '#FFFFFF',
          }}> 
          GO BACK TO LOGIN</Text>
        </View>
        </TouchableOpacity>
          
        </View>
          
        );
    }
}
}