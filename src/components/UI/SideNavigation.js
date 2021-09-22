import React from "react";
import { itemsArray } from "../../pages/MainDashboard";
import SideNavigationItem from "./SideNavigationItem";


const SideNavigation = () => {
  return (
    <div id="side-bar" className="col-md-2 navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ">
      <ul>
        {itemsArray.map((navItem) => (
          <SideNavigationItem
            key={navItem.title}
            title={navItem.title}
            icon={navItem.icon}
            link={navItem.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideNavigation;
