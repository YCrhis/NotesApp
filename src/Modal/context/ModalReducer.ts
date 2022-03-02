import { ModalState } from '../interfaces/interface'

type ModalActions =
    | { type: 'open', payload: boolean }

export const ModalReducer = (state: ModalState, action: ModalActions) => {
    switch (action.type) {
        case 'open':
            return {
                ...state,
                active: !action.payload
            }
    }
}