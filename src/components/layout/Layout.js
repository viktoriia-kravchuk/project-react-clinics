import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <nav>
          <p>Clinic Name</p>
        </nav>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
