import React, { useState } from 'react';
import {View,Text,StyleSheet,TextInput,Image,TouchableOpacity,TouchableWithoutFeedback,Keyboard,Alert } from 'react-native';
import Users from '../../services/Users';

function Login({ navigation }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const dangnhap = () => {
		if(username.trim() === '') {
			return Alert.alert('Tài khoản không được để trống');
		}

		if(password.trim() === '') {
			return Alert.alert('Mật khẩu không được để trống');
		}

		if(username !== Users.username || password !== Users.password) {
			return Alert.alert('Tài khoản hoặc mật khẩu không chính xác');
		}

		navigation.navigate('Menu');
	}


	return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.waper}>
    <View style={styles.logowaper}>
        <Image
              source={require('../Login/imgs/Huy.png')}
              style={styles.image}
            ></Image>
 </View>
            <View style={styles.login}>
            <TextInput
            style={[styles.input, styles.username]}
                 placeholder='Username'
           onChangeText={(text) => setUsername(text)}
  ></TextInput>
  <TextInput 
           style={styles.input}
               placeholder='Password'
     secureTextEntry
           onChangeText={(text) => setPassword(text)}
        ></TextInput>

        <TouchableOpacity 
            style={styles.btnLogin}
            onPress={dangnhap} 
        >
            <Text style={styles.textLogin}>Đăng Nhập</Text>
                  </TouchableOpacity>  
    </View>  
         <TextInput style={styles.qmk}>Quên Mật Khẩu ?</TextInput>
           <TextInput style={styles.dangky}>Đăng Ký !</TextInput>
        </View>
        </TouchableWithoutFeedback>
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