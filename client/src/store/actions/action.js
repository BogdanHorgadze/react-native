import axios from 'axios'

export function getDataThunk() {
    return async dispatch => {
        try{
            const res = await axios.get('http://192.168.1.14:5000/api/doctors')
            dispatch(getData(res.data))
        }
        catch(e){
            console.log(e)
        }
    }
}

export function getData(payload) {
    return {
        type:'GET_DATA',
        payload
    }
}