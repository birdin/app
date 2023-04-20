import { BsArchive } from "react-icons/bs";

type Props = {
    className?: string | undefined;
}

const ProjectPlaceholder = ({className}: Props) => {
  return (
    <div className={`project-placeholder__avatar ${className ? className : ''}`}>
      <BsArchive />
    </div>
  );
};

export default ProjectPlaceholder;
