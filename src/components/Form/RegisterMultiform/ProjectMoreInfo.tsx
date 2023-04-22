type FormProject = {
  img: string;
  dueDate: string;
  id: string;
};

type Props = FormProject & {
  updateForm: (fields: Partial<FormProject>) => void;
};

const ProjectMoreInfo = ({img,dueDate, updateForm }: Props) => {
  return (
    <div>
        <div>ProjectMoreInfo</div>
        <label htmlFor="name">Logo URL</label>
        <input type="text" placeholder='Add an image URL' value={img}  onChange={e => updateForm({img: e.target.value})}/>
        <label htmlFor="categories">Categories</label>
        <input type="text" placeholder='Write categories separated by a comma'/>
        <label htmlFor="dueDate">Due Date</label>
        <input type="date" />
    </div>
  )
}

export default ProjectMoreInfo