import { User } from "../interfaces/interfaces"

type userActions =
    | { type: 'created', payload: User }
    | { type: 'update', payload: User }

export const UserReducer = (state: User, action: userActions): User => {
    switch (action.type) {

        case 'created':
            return {
                ...state,
                name: action.payload.name,
                imageUrl: action.payload.imageUrl,
                active: action.payload.active
            }
        default:
            return state
    }
}
