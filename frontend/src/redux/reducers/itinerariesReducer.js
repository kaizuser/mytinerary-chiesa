const initialState = {
    itineraries:[],
    auxiliar_it:[],
}

const itinerariesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetch_it':
            return {
                ...state,
                itineraries: action.payload.itineraries,
                auxiliar_it: action.payload,
            }
            
        case 'delete_it':
            return {
                ...state,
                itineraries: action.payload
            }

        case 'set_it':
            let itineraries = [...state.itineraries]
            itineraries.push(action.payload)

            return{
                ...state,
                itineraries,
                auxiliar_it: [...itineraries]
            }

        case 'filter_it':
	    console.log(action.payload)

        default:
            return state
    }


}

export default itinerariesReducer
