import axios from 'axios'

export function getDataThunk() {
    return async dispatch => {
        try{
            const res = await axios.get('http://192.168.0.149:5000/api/doctors')
            dispatch(getData(res.data))
        }
        catch(e){
            console.log(e)
        }
    }
}

export function postDataThunk(name,prof,rate) {
    return async dispatch => {
        try{
            const res = await axios.post('http://192.168.0.149:5000/api/doctors',{
                name,
                prof,
                rate
            })
            dispatch(postData(res.data))
        }
        catch(e){
            console.log(e)
        }
    }
}

export function filterDataThunk(payload) {
    return dispatch => {
        try{
            dispatch(getData(payload))
        }
        catch(e){
            console.log(e)
        }
    }
}

export function deleteThunk(id) {
    return async dispatch => {
        try{
            const res = await axios.delete(`http://192.168.0.149:5000/api/doctors/${id}`,{
                id
            })
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

export function postData(payload) {
    return {
        type:'POST_DATA',
        payload
    }
}

export function message(payload) {
    return {
        type:'MESSAGE',
        payload
    }
}

