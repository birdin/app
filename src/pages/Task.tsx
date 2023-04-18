import { ProjectHeader } from "../components/Header";
import DashboardLayout from "../layouts/DashboardLayout";
import { Board } from "../features/board";
import { ModalForm } from "../components/Modal";
import { Outlet, useParams } from "react-router-dom";
import RouterPage from "../hoc/RouterPage";

const Task = () => {
  const { id } = useParams();
  return (
    <RouterPage>
      <DashboardLayout id={id} page='tasks'>
        <div className="wide-container fill-container">
          <Board />
        </div>
        <ModalForm />
        <Outlet />
      </DashboardLayout>
    </RouterPage>
  );
};

export default Task;
