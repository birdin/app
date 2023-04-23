type FormProject = {
  name: string;
  description: string;
  organization: string;
};

type Props = FormProject & {
  updateForm: (fields: Partial<FormProject>) => void;
};

const ProjectBasicInfo = ({
  updateForm,
  name,
  description,
  organization,
}: Props) => {
  updateForm;
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name <span style={{"color":"red"}}>*</span>: 
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name-of-project"
          autoComplete="off"
          required
          placeholder="Name of project"
          value={name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          placeholder="Short description about the project"
          className="form-control"
          value={description}
          onChange={(e) => updateForm({ description: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="organization" className="form-label">
          Client:
        </label>
        <input
          type="text"
          placeholder="Organization or client"
          className="form-control"
          value={organization}
          onChange={(e) => updateForm({ organization: e.target.value })}
        />
      </div>
    </div>
  );
};

export default ProjectBasicInfo;
