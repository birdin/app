import React from 'react'

const ProjectHeader = () => {
  return (
    <div className='fluid-container'>
        <div className="header-container">
            <picture className='project-logo'>
                <img src="https://via.placeholder.com/150" alt="Project logo"/>
            </picture>
            <h2>Name of project</h2>
        </div>
        <div className="header-statusbar">
            <div className="header-statusbar__item">
                <span className='header-statusbar__tag'>Project status</span>
                <span>Active</span>
            </div>
            <div className="header-statusbar__item">
                <span className='header-statusbar__tag'>Project type</span>
                <span>Public</span>
            </div>
            <div className="header-statusbar__item">
                <span className='header-statusbar__tag'>Deadline</span>
                <span>10/12/2023</span>
            </div>
        </div>
    </div>
  )
}

export default ProjectHeader