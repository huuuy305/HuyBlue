import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

function Login({ navigation }) {
        return (
            <View style={styles.waper}>
    <View style={styles.logowaper}>
        <Image
         source={require('../Login/imgs/Huy.png')}
           style={styles.image}
            ></Image>
 </View>
            <View style={styles.login}>
            <TextInput
     style={[styles.input
        , styles.username]}
    placeholder='Username'
  ></TextInput>
  <TextInput 
            style={styles.input} placeholder='Password'
            secureTextEntry
        ></TextInput>

        <TouchableOpacity 
            style={styles.btnLogin}
    onPress={() => navigation.navigate('Menu')}
        >
            <Text style={styles.textLogin}>Đăng Nhập</Text>
                  </TouchableOpacity>  
    </View>  
         <TextInput style={styles.qmk}>Quên Mật Khẩu ?</TextInput>
           <TextInput style={styles.dangky}>Đăng Ký !</TextInput>
        </View>

);
     }

const styles = StyleSheet.create({
    waper: {
    flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222'
    },
    logowaper:{
        alignItems: 'center',
        justifyContent:'center',
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: -150
    },
    input: {
        width: 382,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 7,
        fontSize: 20,
        paddingHorizontal: 15,
    },
    username: {
        marginBottom: 10,
    },
    image: {
        
        width: 400,
        resizeMode: 'contain',
        marginTop: -20
  },
    btnLogin: {
        width: 150,
        height: 40,
        borderRadius: 7,
        backgroundColor: '#fff',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    qmk: {
        marginRight:-265,
        fontSize: 16,
        color: '#cccccc',
        paddingTop: 25
    },
    dangky:{
        fontSize: 20,
        color: '#9999cc',
        alignItems:'center',
       marginTop:130,
        height:12,
    },
});
  export default Login;