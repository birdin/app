import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalViewTask from "./components/Modal/ModalViewTask";
//import { Main } from "./components/test/MainPage";
import { Modal } from "./components/test/Modal";
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
        <Route path="/task" element={<div>Task</div>} />
        <Route path="/project/tasks/" element={<ViewTasks />} />
      </Routes>

      <Routes location={background || location}>
        <Route path="/task/:id" element={<Task />}>
          <Route path=":id_task/:task_name" element={<ViewTasks />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path="/task/:id/modal/:id" element={<ViewTasks />} />
        </Routes>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
