import {GoNote} from 'react-icons/go'
import { MdDateRange } from 'react-icons/md';

type Props = {
    id: string;
    title: string;
    date: string;
    onClick: any;
    className?: string;
}

const NoteCard = ({id, title, date, onClick, className}:Props) => {
  return (
    <li id={id} onClick={() => onClick(onClick)} className={className}>
        <div className='notes-list__title-container'>
            <GoNote />
            { title }
        </div>
        <div className='notes-list__title-date'>
            <MdDateRange />
            {date.substring(0, 10).split('-').reverse().join('/')}
        </div>
    </li>
  )
}

export default NoteCard