import { ProjectForm } from '../components/Form'
import { Navbar } from '../components/Navbar'

const CreateProject = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <ProjectForm/>
        </div>
    </>
  )
}

export default CreateProject