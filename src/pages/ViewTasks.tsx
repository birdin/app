import { useContext } from "react";
import { useParams } from 'react-router-dom';

import { GlobalContext } from "../context/GlobalContext";
import ModalViewTask from "../components/Modal/ModalViewTask";


const ViewTasks = () => {
  const { getTask } = useContext(GlobalContext);
  const { id_task } = useParams();

  if(!id_task) return null;

  const task = getTask(id_task);

  if(task === undefined) return null;
  
  return(
    <>
      <ModalViewTask task={task}/>;
    </>)
};

export default ViewTasks;
