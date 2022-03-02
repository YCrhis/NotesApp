import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModal = () => {
    const { handleOpen, modalState } = useContext(ModalContext);

    return {
        handleOpen,
        modalState
    }
}