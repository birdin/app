import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/create-project" className="add-button">
      Create a project
    </Link>
  );
};

export default AddButton;
