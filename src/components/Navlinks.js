import { NavLink } from "react-router-dom";
import links from "../utils/Links";

function Navlinks({ toggleSidebar }) {
  return (
    <div className="nav-links">
      {links.map((item) => {
        const { id, text, path, icon } = item;
        return (
          <NavLink
            onClick={toggleSidebar}
            key={id}
            to={path}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navlinks;
