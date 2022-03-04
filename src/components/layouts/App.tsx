import { useEffect } from "react"
import { ModalProvider } from "../../Modal/context/ModalProvider"
import { NoteList } from "../../Notes/components/NoteList"
import { Login } from "../../user/components/Login"
import { useUser } from "../../user/hooks/useUser"
import { Banner } from "../Banner/Banner"
import { Subheader } from "../header/Subheader"
import { Content } from "./Content"


export const AppContent = () => {

    const { userstate } = useUser();

    return (
        <div>
            {!userstate ? <Login /> :
                <ModalProvider>
                    <Content>
                        <Banner />
                        <Subheader />
                        <NoteList />
                    </Content>
                </ModalProvider>
            }
        </div>
    )
}
