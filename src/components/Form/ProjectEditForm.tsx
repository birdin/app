import { useInput } from "../../hooks/useInput";

type Props = {
  project: any;
  editProject: (project: any) => void;
};

const ProjectEditForm = ({ project }: Props) => {
  const { name, label, id, description } = project;

  const update = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={update}>
      <div className="form-group">
        <label htmlFor="projectName">Project Name</label>
        <input name="projectName" id="projectName" value={name} />
      </div>
      <div className="form-group">
        <label htmlFor="projectDescription">Project Description</label>
        <input
          name="projectDescription"
          id="projectDescription"
            value={description}
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
