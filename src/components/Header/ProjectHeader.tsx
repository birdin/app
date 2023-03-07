import React from 'react'

const ProjectHeader = () => {
  return (
    <div className='wide-container'>
        <div className="header-container">
            <picture className='project-logo'>
                <img src="https://via.placeholder.com/150" alt="Project logo"/>
            </picture>
            <h2>Name of project</h2>
        </div>
        <div className="header-statusbar">
            <div className="header-statusbar__item">
                <span className='header-statusbar__tag'>Project status</span>
                <span className='header-statusbar__info'>Active</span>
            </div>
            <div className="header-statusbar__item">
                <span className='header-statusbar__tag'>Project type</span>
                <span className='header-statusbar__info'>Public</span>
            </div>
            <div className="header-statusbar__item">
                <span className='header-statusbar__tag'>Deadline</span>
                <span className='header-statusbar__info'>10/12/2023</span>
            </div>
        </div>
    </div>
  )
}

export default ProjectHeader