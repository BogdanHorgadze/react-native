import React,{useEffect , useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TextInput,
    Button,
    ScrollView,
    TouchableWithoutFeedback, 
    TouchableOpacity
} from 'react-native'
import {useSelector , useDispatch} from 'react-redux'
import {getDataThunk , postDataThunk , filterDataThunk, deleteThunk , message} from '../store/actions/action'
import { Feather, Octicons , AntDesign } from '@expo/vector-icons'; 
import {useFormik} from 'formik'
import DoctorInfo from '../components/DoctorInfo'

function DoctorsPage({ navigation }){

    const dispatch = useDispatch()
    const doctorsData = useSelector(state => state.doctorsReducer.doctorsData)
    const info = useSelector(state => state.doctorsReducer.message)
    const [modalDoctor,setModalDoctor] = useState([])
    const [visibleDoctor,setVisibleDoctor] = useState(false)
    const [color,setColor] = useState('white')
    const [modalVisible , setModalVisible] = useState(false)
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues:{
            name:'',
            prof:'',
            rate:''
        },
        onSubmit: ({name,prof,rate}) => {
            if(name.length >= 1 && prof.length >= 1 && rate.length >= 1){
                if(Number(rate)){
                     dispatch(postDataThunk(name,prof,rate))
                     dispatch(message(''))
                     setModalVisible(false)
                }
                else{
                     dispatch(message('rate must be number'))
                }
            }
            else{
                dispatch(message('fill in all fields'))
            } 
        }
    })


    const filtered = () => {
        if(color === 'white'){
            setColor('red')
            const filter = doctorsData.sort((a,b)=> {
                if(a.rate > b.rate){
                    return -1
                }
            })
            dispatch(filterDataThunk(filter))
        }
        else if (color === 'red'){
            setColor('white')
            const filter = doctorsData.sort((a,b)=> {
                if(a.rate < b.rate){
                    return -1
                }
            })
            dispatch(filterDataThunk(filter))
        } 
    }
    
    useEffect(()=>{
        dispatch(getDataThunk())
    },[])

    const deleteDoctor = (id) => {
        dispatch(deleteThunk(id))
    }

    console.log(visibleDoctor)


    const renderDoctors =  () => {
        if(doctorsData.length){
            return doctorsData.map((item,i) => {
                return (
                    <View key={i}> 
                    <TouchableOpacity onPress={() => {setVisibleDoctor(true); setModalDoctor(item)}}>
                    <View style={styles.doctor}>
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
                    </TouchableOpacity>
                    <AntDesign 
                            onPress={() => deleteDoctor(item.id)} 
                            style={{padding:5,position:'absolute',right:5,top:0,zIndex:100}}
                            name="close"
                            size={15} 
                            color="red" 
                            /> 
                    </View>
                )
            })
        }
    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <AntDesign name="left" size={24} color="white" onPress={()=> navigation.navigate('Login')}/>
                </View>
                <View>
                    <Text style={{color:'white',fontSize:20}}>Doctor</Text>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={filtered}>
                          <AntDesign name="filter" size={24} color={color} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={styles.content}>
                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={visibleDoctor}
                    onRequestClose={()=> setVisibleDoctor(false)}
                    >  
                    <View style={{marginTop:60}}>
                         <DoctorInfo data={modalDoctor}/>
                    </View>
                    </Modal>
                <ScrollView>
                {renderDoctors()}
                </ScrollView>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={()=> setModalVisible(false)}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                         <AntDesign 
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }} 
                            style={{padding:5,position:'absolute',right:10,top:10,zIndex:100}}
                            name="close"
                            size={24} 
                            color="red" 
                            />  
                        <Text style={styles.textStyle}>Add Doctor</Text>
                         <View>
                            <TextInput
                                placeholder='Name' 
                                autoCapitalize='none'
                                style={styles.input}
                                onChangeText={handleChange('name')}
                                
                            />
                         </View>  
                         <View>
                            <TextInput
                                placeholder='Profession' 
                                autoCapitalize='none'
                                style={styles.input}
                                onChangeText={handleChange('prof')}
                                
                            />
                         </View>  
                         <View>
                            <TextInput
                                keyboardType="numeric"
                                placeholder='Rate' 
                                autoCapitalize='none'
                                style={styles.input}
                                onChangeText={handleChange('rate')}
                                
                            />
                         </View>  
                         <Text style={{color: "#4ea0c4",fontWeight: "bold",fontSize:14,marginTop:4, textAlign: "center"}}>{info}</Text>
                         <View style={{marginTop:15}}>
                             <Button
                                title="add"
                                color="#34d7a6"
                                onPress={handleSubmit}
                             />
                         </View>  
                    </View>
                    </View>
                </Modal>
            </View>
            </View>
        </View>
        <TouchableOpacity onPress={()=> setModalVisible(true)} style={styles.button}>
        <View>
            <Octicons style={{marginLeft:21,marginTop:16}} name="plus" size={24} color="white" />
        </View>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingBottom:90
    },
    top:{
        paddingTop:30,
        paddingBottom:20,
        paddingHorizontal:20,
        backgroundColor:'#34d7a6',
        justifyContent:'space-between',
        flexDirection:'row',
        zIndex:9999
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
    },
    button : {
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: '#34d7a6',                                    
        position: 'absolute',                                          
        bottom: 20,                                                    
        right: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        padding:5,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        height:300,
        width:300,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      textStyle: {
        color: "#4ea0c4",
        fontWeight: "bold",
        fontSize:18,
        marginTop:8,
        textAlign: "center"
      },
      input : {
        marginTop:10,
        borderColor:'#d5d5d5',
        borderRadius:5,
        color:'#a9abad',
        borderWidth : 1,
        paddingVertical:10,
        paddingHorizontal:20
    },
    content : {
        position:'relative'
    }
  });

export default DoctorsPage