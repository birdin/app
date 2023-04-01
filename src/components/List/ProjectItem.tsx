import React from 'react'

type Props = {
    name: string,
    description: string,
    id: string, 
}

const ProjectItem = ({name, description, id}: Props) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ProjectItem