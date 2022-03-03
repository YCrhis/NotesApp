import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const useUser = () => {

    const { handleUser, userstate } = useContext(UserContext);

    return {
        handleUser,
        userstate
    }
}
