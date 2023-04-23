import { CreateFormPlaceholder } from "../Placeholder";

const FormProjectHeader = () => {
  return (
    <div className="project-header-form">
      <div className="project-header__img">
        <CreateFormPlaceholder />
      </div>
      <div>
        <h1>New project</h1>
        <p className="display-p">Add a new project</p>
      </div>
    </div>
  );
};

export default FormProjectHeader;
