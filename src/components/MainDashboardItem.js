import Card from "./UI/Card";
import { Link } from "react-router-dom";
import classes from "./MainDashboardItem.module.css";

const MainDashboardItem = (props) => {
  return (
    <Card>
      <li className={classes.item}>
        <Link to={props.link}>
          <div className={classes.content}>
            <img src={props.image} alt={props.title} />
          </div>
          <p className={classes.content}>{props.title}</p>
        </Link>
      </li>
    </Card>
  );
};

export default MainDashboardItem;
