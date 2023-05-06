import { Link } from "react-router-dom";

type Props = {
    name: string | undefined;
    id: string | undefined; 
}


const Breadcrumb = ({name, id}: Props) => {
  return (
    <div className='wide-container breadcrumb-container {
        '>
        <Link to={`/project/${id}`}>{ name }</Link>
        <span>/</span>
        <span>Homepage</span>
    </div>
  )
}

export default Breadcrumb