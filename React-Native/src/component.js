import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import axios from 'axios';

/** Parent to child communication, we use prop. State- component internal record keeping (Update some amount
 *  of data over time) */
export default class OutputScreen extends React.Component {
  constructor(props) {
    super(props);
    this.renderCategory = this.renderCategory.bind(this);
    this.state={watdata:[],auth_token:''};
}
static navigationOptions = {
  title: 'Result',
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
    else{  Alert.alert("Error", "Error: "+res.message);
       //navigation.navigate('Welcome')
        }
   }).catch((error) => {
       console.error(error);
      });
}
  componentWillMount()
  {
    const {state} = this.props.navigation;
    
  axios.post('https://app.accumulate65.hasura-app.io/api2',
  {
     username:'Zedunaid',
    type:state.params.inp,
    input:state.params.statement
   })
 .then(response =>this.setState({watdata:Object.values(response.data)[0]})) 
 
 .catch(error => {
  console.log(error.response)
});

  }
  renderCategory(){
  
   if(this.state.watdata.map((data)=>data.label) === undefined) {return <Text></Text>;}
   return this.state.watdata.map((data)=>(<View style={{marginLeft:8,borderRadius: 3,
    borderColor:'#6681BE',
    borderWidth:1,alignItems: 'center',marginRight:8}} key={data.label}>
    <Text>{String(data.label).substring(String(data.label).lastIndexOf("/") + 1, String(data.label).length)}          -->           {parseFloat(String(data.score)).toFixed(4)*100} %</Text>
   </View>));
              }
 
 render() {
    console.log(this.state);
    if(!this.state.watdata){
      return null;
  }
  if(this.state.auth_token=='')
  {
    return (
      <View style={
        {
            marginBottom: 7,
            backgroundColor:'#95B9C7',
            borderRadius: 3 ,
            marginTop:7,
            borderColor:'#95B9C7',
            borderWidth:1.7,marginLeft:10,marginRight:5,
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
         <Text style={{fontWeight:"bold",margin:10,fontSize:15}}>Your Results: </Text>
        <Text style={{fontWeight:"bold",marginTop:8,marginLeft:8,borderRadius: 3,
    borderColor:'#6681BE',
    borderWidth:1,alignItems: 'center',textAlign:'center',marginRight:8}}>Category               Confidence</Text>
        <View style={{marginBottom:25}}>{this.renderCategory()}</View>
        <TouchableOpacity  onPress={this.Logout.bind(this)}
              >
        <View style={{height: 32,width:85, backgroundColor:
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
  else{
    const {navigate}=this.props.navigation;
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
}