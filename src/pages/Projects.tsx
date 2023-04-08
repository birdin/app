import { ProjectList } from '../components/List'
import { Navbar } from '../components/Navbar'

import BG from '../assets/img/bg-abstract.svg'

const Projects = () => {
  return (
  <>
    <Navbar />
    <div className="d-flex">
        <ProjectList />
        <div className="bg-project__img">
            <img src={BG} alt="" />
        </div>
    </div>
  </>)
}

export default Projects