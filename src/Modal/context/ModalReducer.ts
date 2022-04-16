import { ModalState } from '../interfaces/interface'

type ModalActions =
    | { type: 'open', payload: ModalState }

export const ModalReducer = (state: ModalState, action: ModalActions) => {
    switch (action.type) {
        case 'open':
            return {
                ...state,
                active: !action.payload.active,
                name: action.payload.name
            }
    }
}