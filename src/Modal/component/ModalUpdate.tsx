import { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { useUser } from '../../user/hooks/useUser'
import { ModalContext } from '../context/ModalContext'
import './modalUpdate.css'

import { motion } from 'framer-motion'

export const ModalUpdate = () => {

    const { userstate, handleUser } = useUser();

    const { handleOpen, modalState } = useContext(ModalContext);

    const { active } = modalState;

    const handleCloseModel = () => {
        handleOpen({ active, name: 'close' })
    }

    const { forms, handleInputChange } = useForm({
        name: userstate.name,
        imageUrl: userstate.imageUrl,
        active: true
    })

    const handleUpdate = () => {
        handleUser(forms)
        handleOpen({ active, name: 'close' })
    }


    return (
        <motion.div
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            key={"modal"}
            className='modal__update'>
            <div className="modal__content__update">
                <i className="fa-solid fa-x" onClick={handleCloseModel}></i>
                <h2>Update Account</h2>
                <div className="modal__update__input">
                    <label>Your Name <span>*</span></label>
                    <input type="text" name="name" defaultValue={userstate.name} onChange={handleInputChange} />
                </div>
                <div className="modal__update__input">
                    <label>Image Url <span>*</span></label>
                    <input type="text" name="imageUrl" defaultValue={userstate.imageUrl} onChange={handleInputChange} />
                </div>
                <button onClick={handleUpdate}>Update</button>
            </div>
        </motion.div>
    )
}
