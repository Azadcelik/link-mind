import { Dispatch } from "react"
import { AnyAction } from "redux"


const GET_CATEGORY = 'getCategory/link-mind'
const CREATE_CATEGORY = 'createCategory/link-mind'
const UPDATE_CATEGORY = 'updateCategory/link-mind'
const DELETE_CATEGORY = 'deleteCategory/link-mind'




export interface CategoryType { 
    id: number,
    name: string,
    category_image: string,
    user_id: number
}


//here you are indexing to an object.This syntax is important to remember
export interface CategoryStateType { 
    [id: string]: CategoryType
}


interface CategoryActionType { 
    type: string,
    payload: CategoryType[] 
}

interface CategoryError { 
    error: string;
}

const categoryAction = (categoryData: CategoryType[]): CategoryActionType => {
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
                console.log("this is data from catefory thunjs m sadsadssdssad",data)
            }

            else { 
                const errorData: CategoryError = await response.json()
                
                return errorData.error
            }

        }catch(error){
            console.log(error.message)
            return error.message
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




const updateCategoryAction = (updateData) => { 
    return {
        type : UPDATE_CATEGORY,
        payload: updateData
    }
}



export function updateCategoryThunk (updateData,id) { 
    return async function (dispatch) { 
        try{
            const resp = await fetch(`/api/category/update/${id}`,{
                method: "PUT",
                body: updateData
            })

            if (resp.ok){ 
                const data = await resp.json()
                await dispatch(updateCategoryAction(data))
            }
            else {
                const data = await resp.json()
                console.log('this is error in updateThun', data.error)
                return data.error
            }

        }catch(error) { 
            console.log(error)
            return error
        }
    }
}

const deleteCategoryAction = (categId) => { 
    return { 
        type: DELETE_CATEGORY,
        payload: categId
    }
}

export function deleteCategoryThunk (categId) { 
    return async function(dispatch) { 
        try {
            const response = await fetch(`/api/category/delete/${categId}`,{
                method: "DELETE"
            })
            if (response.ok) { 
                await dispatch(deleteCategoryAction(categId))
            }
            else {
                const data = await response.json()
                console.log(data.error)
                return data.error
            }


        }catch (error) { 
            console.log(error)
            return error
        }

    }
}

const categoryReducer = (initialState: CategoryStateType = {},action:CategoryActionType) => { 
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

        case UPDATE_CATEGORY:  { 
            return {...initialState, [action.payload.id] : action.payload}
        } 

        case DELETE_CATEGORY: {
            const newState = {...initialState}
            delete newState[action.payload]
            return newState
        }
        default: {
            return initialState
        }
    }
}


export default categoryReducer