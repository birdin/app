import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import ContentLoader from "react-content-loader";

type Props = {
  children: React.ReactNode;
};

const RouterPage = ({ children }: Props) => {
  const params = useParams();
  const { setProjectId, projects } = useContext(GlobalContext);
  const navigate = useNavigate();

  const ref = React.useRef(null);

  useEffect(() => {
    const show = document.getElementById("showcomponent");

    setTimeout(() => {
      show?.classList.remove("show");
    }, 300);

    if (params.id) {
      setProjectId(params.id);
    }
    projects.find((project) => project.id === params.id) === undefined &&
      navigate("/404");
  }, [params.id]);

  return (
    <>
      <div ref={ref} id="showcomponent" className="show skeleton-loader">
        <ContentLoader speed={1} height={1200} width={1060}>
          <rect x="9" y="4" rx="0" ry="0" width="320" height="22" />
          <rect x="18" y="14" rx="0" ry="0" width="303" height="6" />
          <rect x="11" y="33" rx="0" ry="0" width="108" height="13" />
          <rect x="129" y="33" rx="0" ry="0" width="60" height="13" />
          <rect x="196" y="33" rx="0" ry="0" width="60" height="13" />

          <rect x="27" y="139" rx="4" ry="4" width="20" height="20" />
          <rect x="67" y="140" rx="10" ry="10" width="85" height="19" />
          <rect x="188" y="141" rx="10" ry="10" width="169" height="19" />
          <rect x="402" y="140" rx="10" ry="10" width="85" height="19" />
          <rect x="523" y="141" rx="10" ry="10" width="169" height="19" />
          <rect x="731" y="139" rx="10" ry="10" width="85" height="19" />
          <rect x="852" y="138" rx="10" ry="10" width="85" height="19" />

          <rect x="26" y="196" rx="4" ry="4" width="20" height="20" />
          <rect x="66" y="197" rx="10" ry="10" width="85" height="19" />
          <rect x="187" y="198" rx="10" ry="10" width="169" height="19" />
          <rect x="401" y="197" rx="10" ry="10" width="85" height="19" />
          <rect x="522" y="198" rx="10" ry="10" width="169" height="19" />
          <rect x="730" y="196" rx="10" ry="10" width="85" height="19" />
          <rect x="851" y="195" rx="10" ry="10" width="85" height="19" />

          <rect x="26" y="258" rx="4" ry="4" width="20" height="20" />
          <rect x="66" y="259" rx="10" ry="10" width="85" height="19" />
          <rect x="187" y="260" rx="10" ry="10" width="169" height="19" />
          <rect x="401" y="259" rx="10" ry="10" width="85" height="19" />
          <rect x="522" y="260" rx="10" ry="10" width="169" height="19" />
          <rect x="730" y="258" rx="10" ry="10" width="85" height="19" />
          <rect x="851" y="257" rx="10" ry="10" width="85" height="19" />

          <rect x="26" y="316" rx="4" ry="4" width="20" height="20" />
          <rect x="66" y="317" rx="10" ry="10" width="85" height="19" />
          <rect x="187" y="318" rx="10" ry="10" width="169" height="19" />
          <rect x="401" y="317" rx="10" ry="10" width="85" height="19" />
          <rect x="522" y="318" rx="10" ry="10" width="169" height="19" />
          <rect x="730" y="316" rx="10" ry="10" width="85" height="19" />
          <rect x="851" y="315" rx="10" ry="10" width="85" height="19" />

          <rect x="26" y="379" rx="4" ry="4" width="20" height="20" />
          <rect x="66" y="380" rx="10" ry="10" width="85" height="19" />
          <rect x="187" y="381" rx="10" ry="10" width="169" height="19" />
          <rect x="401" y="380" rx="10" ry="10" width="85" height="19" />
          <rect x="522" y="381" rx="10" ry="10" width="169" height="19" />
          <rect x="730" y="379" rx="10" ry="10" width="85" height="19" />
          <rect x="851" y="378" rx="10" ry="10" width="85" height="19" />
        </ContentLoader>
      </div>
      {children}
    </>
  );
};

export default RouterPage;
