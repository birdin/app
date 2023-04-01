import { Link } from "react-router-dom"

type Props = {
    name: string,
    description: string,
    id: string, 
}

const ProjectItem = ({name, description, id}: Props) => {
  return (
    <div>
        <Link to={`/project/${id}`}>
            <h3>{name}</h3>
            <p>{description}</p>
        </Link>
    </div>
  )
}

export default ProjectItem