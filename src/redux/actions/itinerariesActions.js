import axios from 'axios';

const itinerariesActions = {
    
    fetchItineraries: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/itineraries/')
            dispatch({type:'fetch_it', payload:res.data.response})
       }
    },

    deleteItinerary: (id)=>{
        return async(dispatch, getState) => {
            try {
            
                const respuesta = await axios.delete('http://localhost:4000/api/itineraries/'+id)

                dispatch({type:'delete_it', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },

    setItinerary: (person_name, photo, price, duration, likes, hashtags)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/itineraries/',{person_name, photo, price, duration, likes, hashtags})
            dispatch({type:'set_it', payload:respuesta.data.respuesta})

        }
    },

    likeDislike: (id) => {
        const token = localStorage.getItem('token')

        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/itineraries/likeDislike/${id}`, {},
                {headers: {
                    Authorization: "Bearer "+token
                }
                })

                return response
                
            }catch (error) {
                console.log(error)
            }
        }
    }


}

export default itinerariesActions;
