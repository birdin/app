import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

type Props = {
  children: React.ReactNode;
};

const RouterPage = ({ children }: Props) => {
  const params = useParams();
  const  {setProjectId, projects} = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
        setProjectId(params.id)
    } 
    projects.find((project) => project.id === params.id) === undefined && navigate("/404");
    }, [params.id]);

  return (
    <>
      {children}
    </>
  );
};

export default RouterPage;
