const initialState = {
    activities:[],
    auxiliar_act:[],
}

const activitiesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetch_act':
            return {
                ...state,
                activities: action.payload.activities,
                auxiliar_act: action.payload,
            }
            
        case 'delete_act':
            return {
                ...state,
                activities: action.payload
            }

        case 'set_act':
            let activities = [...state.activities]
            activities.push(action.payload)

            return{
                ...state,
                activities,
                auxiliar_act: [...activities]
            }

        default:
            return state
    }


}

export default activitiesReducer
