import React from 'react';
import { useDispatch } from 'react-redux';
import './DeleteCategory.css';
import { categoryThunk, deleteCategoryThunk } from '../../redux/category';
import { useModal } from '../../context/Modal';

// Define the props type
interface DeleteCategoryProps {
  categId: number; 
}

const DeleteCategory: React.FC<DeleteCategoryProps> = ({ categId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleYesButton = async (categId: number): Promise<void> => {
    await dispatch(deleteCategoryThunk(categId) as any); 
    await dispatch(categoryThunk() as any); 
    closeModal();
  };

  const handleNoButton = (): void => {
    closeModal();
  };

  return (
    <div className="delete-modal">
      <div className="modal-content">
        <h1>Are you sure you want to delete this category?</h1>
        <div className="modal-buttons">
          <button className="yes-button" onClick={() => handleYesButton(categId)}>
            Yes
          </button>
          <button className="no-button" onClick={handleNoButton}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategory;
