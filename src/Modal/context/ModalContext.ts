import { createContext } from "react";
import { ModalState } from "../interfaces/interface";

export type ModalContentProps = {
    modalState: ModalState,
    handleOpen: (modalState: boolean) => void;
}

export const ModalContext = createContext({} as ModalContentProps);