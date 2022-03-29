const initialState = {
    cities:[],
    auxiliar:[],
}

const citiesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetch':
            
            return {
                ...state,
                cities: action.payload.cities,
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
		const filtered = action.payload.cities.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.value.split(' ').join('').toLowerCase())))

            return {
                ...state,
                cities: [...filtered]
            }

        default:
            return state
    }


}

export default citiesReducer
