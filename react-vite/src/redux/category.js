

const GET_CATEGORY = 'category/link-mind'





const categoryAction = (categoryData) => {
    return { 
        type: GET_CATEGORY,
        payload : categoryData
    }
}




export function categoryThunk() { 
    return async function (dispatch) { 

        try{
            const response = await fetch("/api/category/")
            console.log("respinse ",response)
            if (response.ok) {
                const data = await response.json()
                console.log('data in category thunk', data)
                dispatch(categoryAction(data))
            }

            else { 
                const data = response.json()
                return data.error
            }

        }catch(error){
            console.log(error.message)
            return error
        }
    }
}


const categoryReducer = (initialState = {},action) => { 
    switch(action.type) {
        case GET_CATEGORY: {
            const newState = {...initialState}
            action.payload.forEach(category => { 
                newState[category.id] = category
            })
            return newState
        }
        default: {
            return initialState
        }
    }
}


export default categoryReducer