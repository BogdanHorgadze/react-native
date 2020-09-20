import React, { useState } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    CheckBox,
    Image
} from 'react-native'
import GradientButton  from 'react-native-gradient-buttons'


function LoginPage(){


    const [check,setCheck] = useState(false)

    return (
        <View>
            <Text style={styles.title}>Sign Up</Text>
             <View style={styles.inputBlock}>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail' 
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password' 
                    autoCapitalize='none'
                />
             </View>
             <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <CheckBox 
                    value={check}
                    onChange={() => setCheck(prev => !prev)}
                    />
                    <Text style={{marginTop:5,color:'#a9abad'}}>Remember</Text>
                 </View>
                 <View>
                     <Text style={{marginTop:5, color:'#a9abad'}}>Forget Password?</Text>
                 </View>
             </View>
             <View>
                 <GradientButton
                    style={{ marginTop: 30 }}
                    text="Sign Up"
                    gradientBegin="#19769f"
                    gradientEnd="#34d7a6"
                    height={40}
                    textStyle={{ fontSize: 17 }}
                    radius={4}
                 />
             </View>
             <View style={{flexDirection:'row',justifyContent:'center',marginTop:15}}>
                 <Text style={{color:'#989b9d',fontSize:17}}>Or</Text>
             </View>
             <View style={{flexDirection:'row',justifyContent:'center',marginTop:15}}>
                 <View style={styles.img}>
                    <Image
                        source={require('../../assets/facebook.jpg')}
                    />
                 </View>
                 <View style={styles.img}>
                    <Image
                        source={require('../../assets/google.jpg')}
                    />
                 </View>
             </View>
             <View style={{flexDirection:'row',justifyContent:'center'}}>
                 <Text style={{color:'#a3a5a7'}}>Dont have account? </Text>
                 <Text style={{color:'#4ea0c4'}}>Create account</Text>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        marginTop: 100,
        color : '#1d759c',
        fontSize: 30
    },
    inputBlock : {
        marginTop:15
    },
    input : {
        marginTop:20,
        borderColor:'#d5d5d5',
        borderRadius:5,
        color:'#a9abad',
        borderWidth : 1,
        paddingVertical:10,
        paddingHorizontal:20
    },
    img : {
        paddingHorizontal:65,
        paddingVertical:15,
        borderWidth : 1,
        borderColor : '#d5d5d5',
        marginLeft : 5,
        marginBottom:40
    }
})


export default LoginPage