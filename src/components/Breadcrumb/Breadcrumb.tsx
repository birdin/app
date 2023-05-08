import { Link } from "react-router-dom";

type Props = {
    name: string | undefined;
    id: string | undefined; 
    page: string | undefined;
}


const Breadcrumb = ({name, id, page = 'Homepage'}: Props) => {
  return (
    <div className='wide-container breadcrumb-container {
        '>
        <Link to={`/project/${id}`}>
           { name }
        </Link>
        <span>/</span>
        <span> {page}</span>
    </div>
  )
}

export default Breadcrumb