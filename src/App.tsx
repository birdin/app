import {Route, Routes} from "react-router-dom";
import Task from './pages/Task';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Home</div>}/>
        <Route path="/task" element={<div>Task</div>}/>
        <Route path="/task/:id" element={<Task/>}/>
      </Routes>
    </div>
  )
}

export default App
