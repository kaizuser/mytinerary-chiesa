const initialState = {
    user: null,
    info:{view: false,
        message: '',
        success:false},
    
}

const userReducer = (state = initialState, action) => {
    
    
    switch (action.type) {
        case 'user':
            return {
                ...state,
                user: action.payload,   
            }
            case 'message':
            return {
                ...state,
                info: action.payload,   
            }

        default:
            return state
    }
}
export default userReducer
