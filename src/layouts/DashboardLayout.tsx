import { ReactNode } from 'react'
import { Navbar } from '../components/Navbar/'

type Props = {
    children: JSX.Element | ReactNode
}

const DashboardLayout = ({children} : Props) => {
  return (
    <>
        <Navbar />
        {children}
≤    </>
  )
}

export default DashboardLayout