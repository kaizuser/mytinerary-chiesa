import axios from 'axios';

const citiesActions = {
    
    fetchCities: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('https://mytinerary-chiesa.herokuapp.com/api/cities/')
            dispatch({type:'fetch', payload:res.data.response})
       }
    },

    deleteCity: (id)=>{
        return async(dispatch, getState) => {
            try {
            
                const respuesta = await axios.delete('https://mytinerary-chiesa.herokuapp.com/api/cities/'+id)

                dispatch({type:'delete', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },

    filterCities: (cities, value)=>{
        return async(dispatch,getState)=>{
            dispatch({type:'filter', payload:{cities, value}})
        }
    },

    setCity: (name,country, src)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('https://mytinerary-chiesa.herokuapp.com/api/cities/',{name, country, src})
            dispatch({type:'setCity', payload:respuesta.data.respuesta})

        }
    }





}

export default citiesActions;
