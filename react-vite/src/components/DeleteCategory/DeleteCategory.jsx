import { useDispatch } from 'react-redux';
import './DeleteCategory.css'; // Import the CSS file for styling
import { categoryThunk, deleteCategoryThunk } from '../../redux/category';
import { useModal } from '../../context/Modal';

const DeleteCategory = ({ categId }) => {
  const dispatch = useDispatch()
  const {closeModal} = useModal()


    const handleYesButton = async (categId) => {
        await dispatch(deleteCategoryThunk(categId))
        await dispatch(categoryThunk())
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
          <button className="yes-button" onClick={() => handleYesButton(categId)}>Yes</button>
          <button className="no-button" onClick={handleNoButton}>No</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteCategory;
