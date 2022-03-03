import './content.css'

import { Header } from "../header/Header"
import { Modal } from '../../Modal/component/Modal'
import { useModal } from '../../Modal/hooks/useModal'
import { ModalUpdate } from '../../Modal/component/ModalUpdate'
import { Footer } from '../footer/Footer'

import { AnimatePresence } from 'framer-motion'

interface props {
  children: JSX.Element | JSX.Element[]
}

export const Content = ({ children }: props) => {

  const { modalState } = useModal();

  return (
    <div className="content">
      <div className="content_leftSection">
        <Header />
      </div>
      <div className="content__rightSection">
        {children}
        <Footer />
      </div>
      <AnimatePresence>
        {
          modalState.name === 'newNote' &&
          <Modal />
        }
        {
          modalState.name === 'updateUser' &&
          <ModalUpdate />
        }
      </AnimatePresence>
    </div>
  )
}
