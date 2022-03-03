import { useContext } from 'react'
import { AddNote } from '../../components/AddNote/AddNote'
import { ModalContext } from '../context/ModalContext'
import './modal.css'

export const Modal = () => {


    const { handleOpen, modalState } = useContext(ModalContext);

    const { active } = modalState;

    const handleCloseModel = () => {
        handleOpen({ active, name: 'close' })
    }

    return (
        <div className='modal'>
            <div className="modal__content">
                <i className="fa-solid fa-x" onClick={handleCloseModel}></i>
                <h2>Create Note</h2>
                <AddNote />
            </div>
        </div>
    )
}
