import { useEffect, useReducer } from 'react'
import { User } from '../interfaces/interfaces'
import { UserContext } from './UserContext'
import { UserReducer } from './UserReducer'

const INITAL_STATE: User = {
    name: '',
    imageUrl: '',
    active: false
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: props) => {

    const [userstate, dispatch] = useReducer(UserReducer, INITAL_STATE, () => {
        const localData = localStorage.getItem('user');
        return localData ? JSON.parse(localData) : null
    });

    const handleUser = (user: User) => {
        dispatch({ type: 'created', payload: user })
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userstate))
    }, [userstate])

    return (
        <UserContext.Provider value={{ handleUser, userstate }}>
            {children}
        </UserContext.Provider>
    )
}
