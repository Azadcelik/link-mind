

const GET_CATEGORY = 'getCategory/link-mind'
const CREATE_CATEGORY = 'createCategory/link-mind'




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
            if (response.ok) {
                const data = await response.json()
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


const createCategoryAction = (createCategoryData) => { 
    return {
        type: CREATE_CATEGORY,
        payload: createCategoryData
    }
}




export function createCategoryThunk (createCategoryData) { 
    return async function(dispatch) { 

        try{
        const response = await fetch('/api/category/new',{
            method: "POST",
            body: createCategoryData
        })

        if (response.ok) { 
            const data = await response.json()
            dispatch(createCategoryAction(data))
        }
        else {
            const data = await response.json()
            return data.error
        }

        }catch(error) { 
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

        case CREATE_CATEGORY: {
            return {...initialState, [action.payload.id] : action.payload}
        }

        default: {
            return initialState
        }
    }
}


export default categoryReducer