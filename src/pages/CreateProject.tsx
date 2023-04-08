import React from 'react'
import { ProjectForm } from '../components/Form'
import { Navbar } from '../components/Navbar'

const CreateProject = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <h1>Create Project</h1>
            <ProjectForm/>
        </div>
    </>
  )
}

export default CreateProject