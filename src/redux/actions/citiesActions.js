import axios from 'axios';

const citiesActions = {
    
    fetchCities: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/cities/')
            dispatch({type:'fetch', payload:res.data.response})
       }
    },

    deleteCity: (id)=>{
        return async(dispatch, getState) => {
            try {
            
                const respuesta = await axios.delete('http://localhost:4000/api/cities/'+id)

                dispatch({type:'delete', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },

    filterCities: (cities, value)=>{
        return (dispatch,getState)=>{
            dispatch({type:'filter', payload:{cities, value}})
        }
    },

    setCity: (name,price)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/productos',{name,price})
            dispatch({type:'setCity', payload:respuesta.data.respuesta})

        }
    }





}

export default citiesActions;
