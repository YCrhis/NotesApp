import { createContext } from "react";
import { User } from "../interfaces/interfaces";

export type UserContextProps = {
    userstate: User;
    handleUser: (user: User) => void;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);