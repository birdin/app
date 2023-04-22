type FormProject = {
  name: string;
  description: string;
  organization: string;
};

type Props = FormProject & {
  updateForm: (fields: Partial<FormProject>) => void;
};

const ProjectBasicInfo = ({ updateForm, name, description, organization }: Props) => {
  updateForm
  return (
    <div>
        <label htmlFor="name">Name</label>
        <input type="text" required placeholder="Name of project" value={name} onChange={e => updateForm({name: e.target.value})}/>
        <label htmlFor="description">Description</label>
        <input type="text" placeholder="Description of project" value={description} onChange={e => updateForm({description: e.target.value})}/>
        <label htmlFor="organization">Client</label>
        <input type="text" placeholder="Organization or client" value={organization} onChange={e => updateForm({organization: e.target.value})}/>
    </div>
  );
};

export default ProjectBasicInfo;
