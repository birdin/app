import {ImPencil2} from 'react-icons/im'

const VoidNotesPlaceholder = () => {
    return (
        <div className='placeholder-container'>
            <ImPencil2/>
            <h1 className='placeholder-container__title'>You have no pendings</h1>
            <p className='placeholder-container__p'>When you have new tasks, they will appear here</p>
        </div>
      )
}

export default VoidNotesPlaceholder