import React from "react";
import PanelListItem from "./PanelListItem";
const ListItems = [
  { status: 0, option: "All" },
  { status: 10, option: "Active" },
  { status: 11, option: "Inactive" },
  { status: 9, option: "Waiting Approvals" },
  { status: 5, option: "No Verified" },
  { status: 4, option: "Not Registered" },
  { status: 6, option: "No Profile" },
  { status: 7, option: "No Address" },
  { status: 8, option: "No Documents" },
];

const PanelList = (props) => {
  return (
    <div className="card" style={{ marginLeft: "1em" }}>
      <div className="card-body">
        <ul className="nav nav-pills" style={{ paddingLeft: "15px" }}>
          {ListItems.map((item) => (
            <PanelListItem
              id={item.status}
              key={item.status}
              option={item.option}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PanelList;
