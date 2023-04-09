import { toast } from "react-toastify";
import { useInput } from "../../hooks/useInput";

type Props = {
  project: any;
  editProject: (project: any) => void;
};

const ProjectEditForm = ({ project, editProject }: Props) => {
  const { name, label, id, description } = project;

  const nameInput = useInput("text", name);
  const descriptionInput = useInput("text", description);

  const update = (e: any) => {
    e.preventDefault();
    editProject({
        name: nameInput.value,
        description: descriptionInput.value,
        label: nameInput.value.slice(0, 2),
        id: id
    });
    toast.success("Project updated successfully");
  };

  return (
    <form onSubmit={update}>
      <div className="form-group">
        <label htmlFor="projectName">Project Name</label>
        <input name="projectName" id="projectName" {...nameInput}  />
      </div>
      <div className="form-group">
        <label htmlFor="projectDescription">Project Description</label>
        <input
          name="projectDescription"
          id="projectDescription"
          {...descriptionInput}
        />
      </div>
      <div className="form-group">
        <label htmlFor="projectDueDate">Project Due Date</label>
        <input type="date" name="projectDueDate" id="projectDueDate" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectEditForm;
