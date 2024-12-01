const GET_ELEMENT = 'getElement/link-mind'
const CREATE_ELEMENT = 'createElement/link-mind'
const UPDATE_ELEMENT = 'updateElement/link-mind'
const DELETE_ELEMENT = 'deleteElement/link-mind'


export interface ElementTypes { 
    category_id: number,
    element_image: string,
    id: number,
    name: string
}
export interface ElementStateType {
    [id: string]: ElementTypes
}

interface ElementActionType {
    type: string,
    payload: ElementStateType
}


interface ElementError { 
    error: string
}

const elementAction = (elementData:ElementStateType): ElementActionType => { 
    return {
        type: GET_ELEMENT,
        payload: elementData
    }
}

export function elementThunk() {
    return async function(dispatch) { 
        try{
        const response = await fetch(`/api/element/`)
        if (response.ok) { 
            const data: ElementStateType = await response.json()
            console.log("this is my element from fetch which i will write typescript",data)
            dispatch(elementAction(data))
        }
        else { 
            const data: ElementError = await response.json()
            return data.error
        }

        }catch(error) { 
            console.log(error.message)
            return error
        }
    }
}



const createElementAction = (elementData:ElementTypes) => {
    return {
        type: CREATE_ELEMENT,
        payload: elementData
    }
}

export function createElementThunk (elementData,id: string | number) {
    return async function (dispatch) {

        try{ 
        
        const response = await fetch(`/api/element/new/${id}`, {
            method: "POST",
            body: elementData
        })
        if (response.ok) { 
            const data: ElementTypes = await response.json()
            console.log("this is for creating element data ",data)
            dispatch(createElementAction(data))
        }
        else { 
            const data:ElementError = await response.json()
            return data.error
        }
    } catch(error) { 
        console.log(error.message)
        return error.message
    }   
    }
}


const updateElementAction = (updatedElement) => { 
    return {
        type: UPDATE_ELEMENT,
        payload : updatedElement
    }
}


export function updateElementThunk (updatedElement,elementId) { 
    return async function (dispatch) { 

        try { 

            const response = await fetch(`/api/element/update/${elementId}`, { 
                method: "PUT",
                body : updatedElement
            })
            if (response.ok) { 
                const data = await response.json()
                await dispatch(updateElementAction(data))
            }
            else {
                const data = await response.json()
                return data.error
            }

        } catch (error){ 
            return error
        }
    }
}


const deleteElementAction = (elemendId) => { 
 
    return {
        type: DELETE_ELEMENT,
        payload : elemendId
        
    }
}

export function deleteElementThunk (elementId) {
    return async function(dispatch) { 
        try{ 
            const response = await fetch(`/api/element/delete/${elementId}`, {
                method : "DELETE"
            })

            if (response.ok) { 
                await dispatch(deleteElementAction(elementId))
            }
            else {
                const data = response.json()
                return data.error
            }

        }catch(error) { 
            return error
        }
    }
}




const elementReducer = (initialState = {},action) => { 
    switch(action.type) { 
        case GET_ELEMENT : {
            const newState = {...initialState}
            action.payload.forEach(element => { 
                newState[element.id] = element
            })
            return newState
        }
        case CREATE_ELEMENT: {
            return {...initialState, [action.payload.id]: action.payload}
        }
        case UPDATE_ELEMENT : { 
            return {...initialState, [action.payload.id] :action.payload}

        }

        case DELETE_ELEMENT : { 
            const newState = {...initialState}
            delete newState[action.payload]
            return newState
        }

        default : {
            return initialState
        }
    }
}

export default elementReducer