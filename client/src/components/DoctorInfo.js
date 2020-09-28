import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import { AntDesign ,MaterialIcons } from '@expo/vector-icons'; 


function DoctorInfo({data}) {

    const renderModalDoctor = (item) => {
        console.log(item)
        return (
            <View>
                <View style={styles.DoctorInfo}>
                <View><Text style={{color:'white'}}></Text></View>
                <View style={{marginLeft:90}}>
                    <AntDesign style={{marginLeft:7}} name="user" size={80} color="black" />
                    <View style={{marginTop:10}}>
                        <Text style={{...styles.text,color:'#4ea0c4'}}>{item.name}</Text>
                        <Text style={styles.text}>{item.profession}</Text>
                        <Text style={styles.text}>(BAMS,MBBS)</Text>
                    </View>
                </View>
                <View style={{justifyContent:"space-around",height:100}}>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
                        <AntDesign name="staro" size={40} color="#4ea0c4" />
                        <Text style={{fontSize:17,color:'#4ea0c4',marginTop:7,marginLeft:5}}>{item.rate}</Text>
                    </View>
                    <View>
                        <Text style={{...styles.text, fontSize:13}}>(789 Review)</Text>
                    </View>
                </View>
                </View>
                <View style={{height:230,backgroundColor:'black',opacity:0.4}}>
                </View>
            </View>
        )
    }

    return (
        <View>
            {renderModalDoctor(data)}
        </View>
    )
}

const styles = StyleSheet.create({
    DoctorInfo : {
        padding:20,
        paddingTop:80,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white', 
        height : 330
    },
    text : {
        textAlign : 'center',
        color:'#a3a5a7',
        fontSize:15
    }
})

export default DoctorInfo