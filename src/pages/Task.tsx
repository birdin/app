import { ProjectHeader } from '../components/Header'
import DashboardLayout from '../layouts/DashboardLayout'
import { Board } from '../features/board'
import { ModalForm } from '../components/Modal'
import { Outlet } from 'react-router-dom'

const Task = () => {
  return (
    <DashboardLayout>
        <ProjectHeader/>
        <div className="wide-container fill-container">
          <Board/>
        </div>
        <ModalForm/>
        <Outlet />
    </DashboardLayout>
  )
}

export default Task