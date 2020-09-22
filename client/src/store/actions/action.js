import axios from 'axios'

export function getDataThunk() {
    return async dispatch => {
        try{
            const res = await axios.get('http://localhost:5000/api/doctors')
            dispatch(getData(JSON.stringify(res.data)))
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