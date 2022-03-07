import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { ModalProvider } from "../../Modal/context/ModalProvider"
import { NoteList } from "../../Notes/components/NoteList"
import NotesProvider from "../../Notes/context/NotesProvider"
import { useNotes } from "../../Notes/hooks/useNote"
import { Login } from "../../user/components/Login"
import { useUser } from "../../user/hooks/useUser"
import { Banner } from "../Banner/Banner"
import { Subheader } from "../header/Subheader"
import { Loader } from "../loader/Loader"
import { Presentation } from "../Presentation/Presentation"
import { Content } from "./Content"


export const AppContent = () => {

    const { userstate } = useUser();

    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoad(true), 4000)
    }, [])

    return (
        <div>
            <ModalProvider>
                <AnimatePresence>
                    {!userstate ? <Presentation /> :
                        load === false ? <Loader /> :

                            <Content>
                                <Banner />
                                <Subheader />
                                <NoteList />
                            </Content>

                    }
                </AnimatePresence>
            </ModalProvider>

        </div >
    )
}
