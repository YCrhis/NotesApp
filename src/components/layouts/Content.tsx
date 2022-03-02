import './content.css'

import { Header } from "../header/Header"
import { Modal } from '../../Modal/component/Modal'
import { useModal } from '../../Modal/hooks/useModal'
import { Footer } from '../footer/Footer'

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
      {
        modalState.active &&
        <Modal />
      }
    </div>
  )
}
