import React,{Component} from "react";
import Logo from '../components/Logo'
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";


export default class MyComponents extends Component{
    constructor(props){
        super(props);
    }

    loginHandler = () =>{

    }
    render(){
        return(
            <View>
                <Logo></Logo>
                <View>
                    <TextInput
                        placeholder="Email"
                        style={styles.txtInput}
                        
                    >
                    </TextInput>
                    <TextInput
                        placeholder="Password"
                        style={styles.txtInput}
                        
                    >
                    </TextInput>
                    <TouchableOpacity >
                            <Text style={styles.forgotText}>Forgot Password ?</Text>
                        </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}  onPress={this.loginHandler}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>

                        
                    </View>
                    <View style={styles.signUp}>
                        <Text>Don’t have an account? </Text>
                        <TouchableOpacity>
                            <Text style={styles.joinCom}> Join Community</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


// LOGIN SCRENN STYLE SECTION
const styles = StyleSheet.create({
    txtInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        backgroundColor:"white",
        borderColor:"#3E497A",
    },
    buttonContainer:{
        flex:1,
        flexDirection:"colums",
        padding:20,

        
    },
    button: {
        alignItems: "center",
        backgroundColor: "#3E497A",
        padding: 10,
        borderRadius: 8,
    },
    loginText:{
        fontSize:16,
        fontWeight:"bold",
        color:"#FFF",
    },
    forgotText:{
        textAlign:"right",
        marginRight:18,
        color:"blue"
    },
    signUp:{
        flexDirection:"row",
        justifyContent:"center",
    },
    joinCom:{
        fontWeight:"bold",
        color:"#3E497A"
    }
  });