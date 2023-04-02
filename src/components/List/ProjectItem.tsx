import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"


type Props = {
    name: string,
    description: string,
    id: string, 
}

const ProjectItem = ({name, description, id}: Props) => {
  return (
    <div className="list-item project-list">
        <Link to={`/project/${id}`}>
            <div className="project-list__container">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="list-item__icon-container">
                <IoIosArrowForward />
            </div>
        </Link>
    </div>
  )
}

export default ProjectItem