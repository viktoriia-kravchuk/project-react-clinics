import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 82.59000396728516 500.7769775390625 340.7220153808594"
              preserveAspectRatio="xMidYMid meet"
            >
              <g>
                <path d="M489.842 270.768H403.99L373.785 167.95a10.941 10.941 0 0 0-10.622-6.529 10.932 10.932 0 0 0-9.833 7.666L290 362 223.096 91.286a10.934 10.934 0 0 0-10.443-8.601c-5.048-.095-9.519 3.25-11.811 8.135l-73.81 180.948H10.934C4.897 271.768 0 276.664 0 282.703v2.689c0 6.038 4.897 10.935 10.934 10.935h127.438c5.144 0 9.592-3.586 10.685-8.611l61.645-156.771 68.797 282.199c.808 5.931 4.854 9.688 9.832 10.126.323.028.645.042.964.042 4.604 0 8.763-2.902 10.312-8.313L364.3 208.404l20.81 79.815a10.935 10.935 0 0 0 10.242 7.107h93.714c6.038 0 10.935-4.896 10.935-10.935l.776-2.689c-.001-6.038-4.897-10.934-10.935-10.934z"></path>
              </g>
            </svg>
            <span>Clinic</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;
