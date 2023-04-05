import React from 'react'

type Props = {
    children: JSX.Element
}

const ProjectPageHeader = ({children}:Props) => {
  return (
    <div className='project-page--header'>
        {children}
    </div>
  )
} 

export default ProjectPageHeader