import React from 'react'
import { ProjectHeader } from '../components/Header'
import DashboardLayout from '../layouts/DashboardLayout'
import { Board } from '../features/board'

const Task = () => {
  return (
    <DashboardLayout>
        <ProjectHeader/>
        <div className="wide-container fill-container">
          <Board/>
        </div>
    </DashboardLayout>
  )
}

export default Task