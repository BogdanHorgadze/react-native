const initialState = {
    doctorsData : []
}

const doctorsReducer = (state = initialState , action) => {
    switch(action.type){
        case 'GET_DATA':
        return{
            ...state,
            doctorsData : action.payload
        }
        default :
        return state
    }
}

export default doctorsReducer