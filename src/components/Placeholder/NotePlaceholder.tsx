import { ImPencil2 } from 'react-icons/im'

const NotePlaceholder = () => {
  return (
    <div className='placeholder-container'>
        <ImPencil2/>
        <h1 className='placeholder-container__title'>Select a Note</h1>
        <p className='placeholder-container__p'>Choose any note and start editing</p>
    </div>
  )
}

export default NotePlaceholder