import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { deleteElementThunk } from "../../redux/element"



const DeleteElement = ({elementId}) => { 

const dispatch = useDispatch()
const {closeModal} = useModal()

const handleYesButton = async (elementId) => {
    await dispatch(deleteElementThunk(elementId))
    closeModal()
}

const handleNoButton = () => { 
closeModal()
}


return (
    <div className="delete-modal">
      <div className="modal-content">
        <h1>Are you sure you want to delete this category?</h1>
        <div className="modal-buttons">
          <button className="yes-button" onClick={() => handleYesButton(elementId)}>Yes</button>
          <button className="no-button" onClick={handleNoButton}>No</button>
        </div>
      </div>
    </div>
  );
}


export default DeleteElement