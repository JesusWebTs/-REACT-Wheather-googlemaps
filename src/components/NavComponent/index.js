import React from "react";
import "./styles.css";

function NavComponent({
  routes = [{ routeName: "noname", routeLink: "/", routeType: "notype" }],
}) {
  /* console.log(routes); */
  return (
    <nav className="nav-component__container">
      <ul>
        {routes.map(({ routeName, routeLink, routeType }, i) => (
          <li key={routeLink + "-" + i} className="nav-component__item">
            <div>
              <a className="nav-component__link" href={routeLink}>
                {routeName}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavComponent;
