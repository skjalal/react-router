import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
  return isActive ? classes.active : undefined;
};

const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={getNavLinkClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={getNavLinkClass}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
