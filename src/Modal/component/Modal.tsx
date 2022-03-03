import { useContext } from 'react'
import { AddNote } from '../../components/AddNote/AddNote'
import { ModalContext } from '../context/ModalContext'
import { modalAnimation, transition } from '../../animations';
import './modal.css'
import { motion } from 'framer-motion';

export const Modal = () => {


    const { handleOpen, modalState } = useContext(ModalContext);

    const { active } = modalState;

    const handleCloseModel = () => {
        handleOpen({ active, name: 'close' })
    }

    return (
        <motion.div
            className='modal'
            initial="start"
            animate="in"
            exit="exit"
            variants={modalAnimation}
            transition={transition}
            key={"modal_note"}
        >
            <div className="modal__content">
                <i className="fa-solid fa-x" onClick={handleCloseModel}></i>
                <h2>Create Note</h2>
                <AddNote />
            </div>
        </motion.div>
    )
}
