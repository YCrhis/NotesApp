import { useReducer } from "react";
import { ModalState } from "../interfaces/interface";
import { ModalContext } from "./ModalContext";
import { ModalReducer } from "./ModalReducer";

const INITIAL_STATE: ModalState = {
    active: false,
    name: ''
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const ModalProvider = ({ children }: props) => {

    const [modalState, dispatch] = useReducer(ModalReducer, INITIAL_STATE);

    const handleOpen = (state: ModalState) => {
        dispatch({ type: 'open', payload: state })
    }
    return (
        <ModalContext.Provider value={{ modalState, handleOpen }}>
            {children}
        </ModalContext.Provider>
    )
}