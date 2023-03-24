import {Route, Routes} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Task from './pages/Task';
import ViewTasks from "./pages/ViewTasks";
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Home</div>}/>
        <Route path="/task" element={<div>Task</div>}/>
        <Route path="/task/:id" element={<Task/>}/>
        <Route path="/project/tasks/" element={<ViewTasks/>}/>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
