import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io"
import { BsArchive } from "react-icons/bs"


type Props = {
    name: string,
    label: string,
    id: string, 
}

const ProjectItem = ({name, label, id}: Props) => {
  return (
    <div className="list-item project-list">
        <Link to={`/project/${id}`}>
            <div>
                <div className="project-placeholder__avatar">
                    <BsArchive />
                </div>
            </div>
            <div className="project-list__container">
                <h3>{name}</h3>
                <p>{label}</p>
            </div>
            <div className="list-item__icon-container">
                <IoIosArrowForward />
            </div>
        </Link>
    </div>
  )
}

export default ProjectItem