const initialState = {
    cities:[],
    auxiliar:[],
}

const citiesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetch':
            
            return {
                ...state,
                cities: action.payload,
                auxiliar: action.payload,
            }
            
        case 'delete':
            return {
                ...state,
                cities: action.payload
            }

        case 'setCity':
            let cities = [...state.cities]
            cities.push(action.payload)

            return{
                ...state,
                cities,
                auxiliar: [...cities]
            }

        case 'filter':
		const filtered = action.payload.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.value.toLowerCase())))

            return {
                ...state,
                cities: filtered
            }

        default:
            return state
    }


}

export default citiesReducer
