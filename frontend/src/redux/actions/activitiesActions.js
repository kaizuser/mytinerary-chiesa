import axios from 'axios';

const activitiesActions = {
    
    fetchActivities: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/activities/')
            dispatch({type:'fetch_act', payload:res.data.response})
       }
    },

    deleteActivity: (id)=>{
        return async(dispatch, getState) => {
            try {
            
                const respuesta = await axios.delete('http://localhost:4000/api/activities/'+id)

                dispatch({type:'delete_act', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },

    setActivity: (itinerary, name, photo)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/activities/',{itinerary, name, photo})
            dispatch({type:'set_act', payload:respuesta.data.respuesta})

        }
    }





}

export default activitiesActions;
