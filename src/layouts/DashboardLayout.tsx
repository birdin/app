import { ReactNode } from 'react'
import { Navbar } from '../components/Navbar/'
import { AsideNav } from '../components/Aside';
import { ProjectHeader } from '../components/Header';
import { Breadcrumb } from '../components/Breadcrumb/Index';

type Props = {
    children: JSX.Element | ReactNode;
    id: string | undefined;
    page: string | undefined;
}

const DashboardLayout = ({children, id, page} : Props) => {
  return (
    <>
        <Navbar />
        <main className="dashboard-layout">
          <AsideNav id={id} page={page}/>        
          <div className="section-container__wrapper">
            <Breadcrumb name={'Project'} id={id?.toString()} page={undefined}/>
            <ProjectHeader />
            {children}
          </div>
        </main>
    </>
  )
}

export default DashboardLayout