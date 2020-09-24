const initialState = {
    doctorsData : [],
    message : ''
}

const doctorsReducer = (state = initialState , action) => {
    switch(action.type){
        case 'GET_DATA':
        return{
            ...state,
            doctorsData : action.payload
        }
        case 'MESSAGE':
        return {
            ...state,
            message : action.payload
        }
        default :
        return state
    }
}

export default doctorsReducer