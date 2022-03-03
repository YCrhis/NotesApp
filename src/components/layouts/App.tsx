import { ModalProvider } from "../../Modal/context/ModalProvider"
import { NoteList } from "../../Notes/components/NoteList"
import NotesProvider from "../../Notes/context/NotesProvider"
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
                <NotesProvider>
                    <ModalProvider>
                        <Content>
                            <Banner />
                            <Subheader />
                            <NoteList />
                        </Content>
                    </ModalProvider>
                </NotesProvider>
            }
        </div>
    )
}
