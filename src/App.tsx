import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalViewTask from "./components/Modal/ModalViewTask";
//import { Main } from "./components/test/MainPage";
import { Modal } from "./components/test/Modal";
import CreateProject from "./pages/CreateProject";
import EditProject from "./pages/EditProject";
import ProjectHomepage from "./pages/ProjectHomepage";
import Projects from "./pages/Projects";
import Task from "./pages/Task";
import ViewTasks from "./pages/ViewTasks";
import "./styles/index.scss";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/create-project" element={<CreateProject/>} />
        <Route path="/task" element={<div>Task</div>} />
        <Route path="/project/tasks/" element={<ViewTasks />} />
        <Route path="/project/:id" element={<ProjectHomepage />} />
        <Route path="project/:id/edit" element={<EditProject />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Routes location={background || location}>
        <Route path="/project/:id/tasks" element={<Task />}>
          <Route path=":id_task/:task_name" element={<ViewTasks />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path="/project/:id/modal/:id" element={<ViewTasks />} />
        </Routes>
      )}


      <ToastContainer />
    </div>
  );
}

export default App;
