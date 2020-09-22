import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const data = [
    {
        img: '../../assets/splash.png',
        rate : 4.5,
        distance : '0.7km',
        name : 'Dr Vivek Thakur',
        profession : 'Peditrician',
        location : 'Dishant Hospital, Ring Road , Nagpur'
    },
    {
        img: '../../assets/splash.png',
        rate : 4.5,
        distance : '0.7km',
        name : 'Dr Vivek Thakur',
        profession : 'Peditrician',
        location : 'Dishant Hospital, Ring Road , Nagpur'
    },
    {
        img: '../../assets/splash.png',
        rate : 4.5,
        distance : '0.7km',
        name : 'Dr Vivek Thakur',
        profession : 'Peditrician',
        location : 'Dishant Hospital, Ring Road , Nagpur'
    },
    {
        img: '../../assets/splash.png',
        rate : 4.5,
        distance : '0.7km',
        name : 'Dr Vivek Thakur',
        profession : 'Peditrician',
        location : 'Dishant Hospital, Ring Road , Nagpur'
    },
    {
        img: '../../assets/splash.png',
        rate : 4.5,
        distance : '0.7km',
        name : 'Dr Vivek Thakur',
        profession : 'Peditrician',
        location : 'Dishant Hospital, Ring Road , Nagpur'
    }
]

function DoctorsPage({ navigation }){

    const renderDoctors =  () => {
        return data.map((item,i) => {
            return (
                <View style={styles.doctor} key={i}>
                    <View style={{marginRight:10,marginTop:15}}>
                         <AntDesign name="user" size={34} color="black" />
                    </View>
                    <View>
                        <View><Text style={styles.name}>{item.name}</Text></View>
                        <View><Text style={{color : '#a3a5a7',marginTop:2}}>{item.profession}</Text></View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:3}}>
                            <AntDesign  name="enviromento" size={18} color="#4ea0c4" />
                            <Text style={{color:'#4f3a3a',fontSize:12,marginLeft:2}}>{item.location}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row',justifyContent:'center'}}><Feather name="navigation" size={17} color="#a3a5a7" /><Text style={{color : '#a3a5a7',marginLeft:5}}>{item.distance}</Text></View>
                        <View style={{flexDirection:'row',justifyContent:'center',marginTop:25}}><AntDesign name="staro" size={17} color="#4ea0c4" /><Text style={{color : '#4ea0c4',marginLeft:5}}>{item.rate}</Text></View>
                    </View>
                </View>
            )
        })
    }


    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <AntDesign name="left" size={24} color="white" onPress={()=> navigation.navigate('Login')}/>
                </View>
                <View>
                    <Text style={{color:'white',fontSize:20}}>Doctor</Text>
                </View>
                <View>
                    <AntDesign name="filter" size={24} color="white" />
                </View>
            </View>
            <View>
                {renderDoctors()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    top:{
        paddingTop:30,
        paddingBottom:20,
        paddingHorizontal:20,
        backgroundColor:'#34d7a6',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    doctor : {
        flexDirection : 'row',
        paddingVertical:24,
        paddingHorizontal:10,
        justifyContent: 'space-between',
        borderBottomColor:'#e6dbda',
        borderBottomWidth:1
    },
    name : {
        color : "#4ea0c4",
        fontSize :  16
    }
  });

export default DoctorsPage