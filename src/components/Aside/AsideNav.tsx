import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";

type AsideProps = {
  id: string | undefined;
  page: string | undefined;
};

const AsideNav = ({ id, page }: AsideProps) => {
  console.log(id, page);

  const pages = {
    home: {
      name: "Home",
      icon: <RxDashboard />,
    },
    tasks: {
      name: "Tasks",
      icon: <FaTasks />,
    },
    notes: {
      name: "Notes",
      icon: <GrNotes />,
    },
  };

  const li = [];
  for (const [key, value] of Object.entries(pages)) {
    const classValue = `aside-item ${key === page ? "active" : ""}`;
    const link = key === "home" ? `/project/${id}` : `/project/${id}/${key}`;
    li.push(
      <li key={key} className={classValue}>
        <Link to={link}>
          <div className="aside-icon__container">{value.icon}</div>
          {value.name}
        </Link>
      </li>
    );
  }

  return (
    <aside className="nav-sidebar">
      <ul>{li}</ul>
    </aside>
  );
};

export default AsideNav;
