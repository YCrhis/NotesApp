import './header.css'
import { Switch } from './Switch'
import { useModal } from '../../Modal/hooks/useModal'

export const Header = () => {

  const { handleOpen, modalState } = useModal();

  const { active } = modalState;

  const handleOpenModal = (types: string) => {
    handleOpen({ active, name: types })
  }

  return (
    <div className="header">
      <div className="header__container">
        <h1><span>NotesApp</span></h1>
        <h1 className='header__titleMobile'>N</h1>
        <div className="header__container__list">
          <Switch />
          <div className="header__container__subtitle icon__animation">
            <h3><i className="fa-solid fa-align-left"></i> <span>Options</span></h3>
          </div>
          <ul>
            <li className='header__container__option icon__animation'><i className="fa-solid fa-crown"></i>&nbsp;&nbsp;<span>Important Notes</span></li>
            <li className='header__container__option icon__animation'><i className="fa-solid fa-poo"></i>&nbsp;&nbsp;<span>Second Notes</span></li>
            <li className='header__container__option icon__animation'
              onClick={() => handleOpenModal('newNote')}
            >
              <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;<span>New Note</span>
            </li>
            <li className='header__container__option icon__animation'
              onClick={() => handleOpenModal('updateUser')}
            >
              <i className="fa-solid fa-pen"></i>&nbsp;&nbsp;<span>Update Account</span>
            </li>
          </ul>
        </div>
      </div>
    </div >
  )
}
