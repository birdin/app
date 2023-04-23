type FormProject = {
  img: string;
  dueDate: string;
  id: string;
};

type Props = FormProject & {
  updateForm: (fields: Partial<FormProject>) => void;
};

const ProjectMoreInfo = ({ img, dueDate, updateForm }: Props) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="url-img" className="form-label">
          Logo URL
        </label>
        <input
          type="text"
          className="form-control"
          id="url-img"
          placeholder="Add an image URL"
          value={img}
          onChange={(e) => updateForm({ img: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="categories" className="form-label">
          Categories
        </label>
        <input
          type="text"
          id="categories"
          className="form-control"
          placeholder="Write categories separated by a comma"
        />
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input type="date" id="dueDate" className="form-control" />
      </div>
    </div>
  );
};

export default ProjectMoreInfo;
