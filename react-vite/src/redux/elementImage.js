const ELEMENT_IMAGE = 'elementImage/link-mind'
const CLEAR_IMAGE = 'clearImage/link-mind'


export const createImageAction = (image,index) => { 
    return {
        type: ELEMENT_IMAGE,
        payload: {id :index, image: image }
    }
}


export const clearImage = () => { 
    return {
        type: CLEAR_IMAGE
    }
}





const elementImageReducer = (initialState = {},action) => {

    switch(action.type) { 
        case ELEMENT_IMAGE : { 
        //   console.log('actionpayloadisaadas',action.payload.id,action.payload.image)
          return {...initialState,[action.payload.id]: action.payload.image}
        }
        case CLEAR_IMAGE : { 
            return {}
        }
        default : { 
            return initialState
        }
    }
} 


export default elementImageReducer;