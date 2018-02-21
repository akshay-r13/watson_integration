
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity,Alert,BackHandler } from 'react-native';
import axios from 'axios';


export default class HomeScreen extends React.Component {
    state={statement:'',inp:'text',auth_token:''};
    static navigationOptions = {
      title: 'Welcome',
      headerLeft:null
    };
    
    Logout = async () => {
      fetch('https://auth.accumulate65.hasura-app.io/v1/user/logout', {
            method: 'post',
           
          }).then((response) => response.json())
          .then((res) => {
        if(typeof(res.message) != "undefined"){
          this.setState({ auth_token:'out' });
         Alert.alert("Success: ", "You have successfully logged out");
        }
        else{
          
          Alert.alert("Error", "Error: "+res.message);
          
          //navigation.navigate('Welcome')
         
          }
       }).catch((error) => {
           console.error(error);
          });
    }
  
   validateUrl = (site) => {
     console.log('inside validateUrl');
    var re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      if(re.test(site))
      { 
        this.setState({ inp: 'url' });
      }
      console.log("Input as text");
  }
    render() {
      const { navigate } = this.props.navigation;
      //console.log(this.state);
      if(this.state.auth_token=='')
      {
      return (
        <View 
           style={{
              marginBottom: 7,
              borderRadius: 3 ,
              marginTop:7,
              borderColor:'#95B9C7',
              borderWidth:1.7,marginLeft:10,marginRight:5,
              backgroundColor:'#95B9C7'
                 }
        }>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}>
        <View style={{height: 28,width:69, backgroundColor:
        'blue',justifyContent: 'center',padding:5,marginLeft:7,marginRight:8,borderRadius:18,
        alignItems: 'center',marginBottom:15,marginTop:7}}>
          <Text style={{
          fontSize: 13,
          color: '#FFFFFF',
          }}> 
          BACK</Text>
        </View>
        </TouchableOpacity>
        
          <Text style={{fontWeight:"bold",padding:10,fontSize:17,alignItems:'center'}}>
          Watson Natural Language Classifier</Text>
          <Text style={{marginLeft:5,marginTop:20}}>Find out category of your input</Text>
          <TextInput placeholderTextColor="#C2DFFF" style={{
               
               width: '95%',
               marginBottom: 7,
               height: 28,
               borderRadius: 3 ,
               fontSize: 18,
               borderColor:'#6681BE',
               borderWidth:1,marginLeft:5,marginRight:3,marginTop:5
           }} 
          placeholder="Enter any url or text"  autoCapitalize = "none"
                 onChangeText = {(text) => {
                  this.setState({statement: text})
                  this.validateUrl(text)
              }}>
            </TextInput>
            
              <TouchableOpacity  onPress={() =>
                navigate('Output', {statement:this.state.statement,inp:this.state.inp})}>
        <View style={{height: 37, backgroundColor:
        'blue',justifyContent: 'center',padding:5,marginLeft:7,marginRight:8,
        alignItems: 'center',marginBottom:25}}>
          <Text style={{
          fontSize: 17,
          color: '#FFFFFF',
          }}> 
          GO</Text>
        </View>
        </TouchableOpacity>
       
         <TouchableOpacity  onPress={this.Logout.bind(this)}>
        <View style={{height: 33,width:85, backgroundColor:
        'blue',justifyContent: 'center',padding:5,marginLeft:7,marginRight:8,borderRadius:22,
        alignItems: 'center',marginBottom:25}}>
          <Text style={{
          fontSize: 15,
          color: '#FFFFFF',
          }}> 
          LOGOUT</Text>
        </View>
        </TouchableOpacity>
        </View>
      );
    }
    else
    {
      
       return(
        <View style={{marginTop:20}}>
          <Text style={{fontWeight:"bold",padding:10,fontSize:17,alignItems:'center'}} >You are Logged Out </Text>
          <TouchableOpacity  onPress={()=>navigate('Login')}
              >
        <View style={{height: 37, backgroundColor:
        'blue',justifyContent: 'center',padding:5,marginLeft:7,marginRight:8,
        alignItems: 'center',marginBottom:25,marginTop:10}}>
          <Text style={{
          fontSize: 17,
          color: '#FFFFFF',
          }}> 
          CLICK HERE TO LOGIN</Text>
        </View>
        </TouchableOpacity>
        </View>
      );
    }
  }
  newMethod() {
    return this;
  }
  }