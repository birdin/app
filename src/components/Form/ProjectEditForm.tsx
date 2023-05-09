import { toast } from "react-toastify";

import { useInput } from "../../hooks/useInput";
import { SettingsPlaceholder } from "../Placeholder";
import { Breadcrumb } from "../Breadcrumb/Index";

type Props = {
  project: any;
  editProject: (project: any) => void;
};

const ProjectEditForm = ({ project, editProject }: Props) => {
  const { name, label, id, description, img } = project;

  const nameInput = useInput("text", name);
  const descriptionInput = useInput("textarea", description);
  const logoInput = useInput("text", img);

  const update = (e: any) => {
    e.preventDefault();
    editProject({
      name: nameInput.value,
      description: descriptionInput.value,
      label: nameInput.value.slice(0, 2),
      id: id,
      img: logoInput.value,
    });
    toast.success("Project updated successfully");
  };

  return (
    <>
      <Breadcrumb name={name} id={id} page={"Edit project"} />
      <form className="project-edit-form show-appear" onSubmit={update}>
        <div className="project-header-form">
          <SettingsPlaceholder />
          <div>
            <h1>New project</h1>
            <p className="display-p">Add a new project</p>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="projectName" className="form-label">
            Project Name
          </label>
          <input
            name="projectName"
            className="form-control"
            id="projectName"
            {...nameInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription" className="form-label">
            Project Description
          </label>
          <textarea
            name="projectDescription"
            id="projectDescription"
            className="form-control"
            value={descriptionInput.value}
            onChange={(el) => descriptionInput.onChange(el)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="projectDescription" className="form-label">
            URL Logo
          </label>
          <input
            name="logo"
            id="logo"
            className="form-control"
            {...logoInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDueDate" className="form-label">
            Project Due Date
          </label>
          <input
            type="date"
            name="projectDueDate"
            id="projectDueDate"
            className="form-control"
          />
        </div>
        <button type="submit" className="edit-btn">
          Update
        </button>
      </form>
    </>
  );
};

export default ProjectEditForm;
