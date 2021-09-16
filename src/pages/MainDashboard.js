import MainDashboardItem from "../components/MainDashboardItem";
import classes from "./MainDashboard.module.css";

const MainDashboard = () => {
  const itemsArray = [
    {
      title: "Dashboard Analytics",
      image: "https://img.icons8.com/fluent/96/000000/financial-analytics.png",
      link: "/dashboard",
    },
    {
      title: "Clinic Bill Stats",
      image: "https://img.icons8.com/fluent/96/000000/web-analystics.png",
      link: "/dashboard/clinic-bill-stats",
    },
    {
      title: "Patients Visits Record",
      image: "https://img.icons8.com/color/96/000000/call-in-bed.png",
      link: "/patiens/visits",
    },
    {
      title: "Follow Up Stats",
      image: "https://img.icons8.com/fluent/96/000000/feedback-hub.png",
      link: "/patiens/followups",
    },
    {
      title: "Call Recordings",
      image: "https://img.icons8.com/fluent/96/000000/outgoing-call.png",
      link: "/dashboard/call-recordings",
    },
    {
      title: "Clinics",
      image: "https://img.icons8.com/color/96/000000/clinic.png",
      link: "/dashboard/clinics",
    },
    {
      title: "Patiens",
      image: "https://img.icons8.com/doodle/96/000000/fever.png",
      link: "/dashboard/patiens",
    },
    {
      title: "Clinic Nurses",
      image:
        "https://img.icons8.com/color/96/000000/add-user-group-woman-man.png",
      link: "/dashboard/agents",
    },
    {
      title: "Field Agents",
      image: "https://img.icons8.com/clouds/100/000000/worker-male.png",
      link: "/dashboard/field-agents",
    },
    {
      title: "Field Agent Tasks",
      image: "https://img.icons8.com/nolan/96/task-planning.png",
      link: "/dashboard/field-agents/tasks",
    },
    {
      title: "Medicine Inventory",
      image: "https://img.icons8.com/fluent/96/000000/pill.png",
      link: "/inventory/medicine-inventory",
    },
    {
      title: "Lab Tests",
      image: "https://img.icons8.com/fluent/96/000000/microscope.png",
      link: "/inventory/clinic-lab-test",
    },
    {
      title: "Clinic Services",
      image: "https://img.icons8.com/nolan/96/syringe.png",
      link: "/dashboard/clinic/services",
    },
    {
      title: "Instructional Videos",
      image: "https://img.icons8.com/color/96/000000/camcorder-pro.png",
      link: "/dashboard/instructional-videos",
    },
    {
      title: "Clinic Audit",
      image: "https://img.icons8.com/color/96/000000/activity-history.png",
      link: "/audit/activities",
    },
    {
      title: "Expenses",
      image: "https://img.icons8.com/fluent/96/000000/card-in-use.png",
      link: "/expense/all",
    },
  ];

  return (
    <ul className={classes.list}>
      {itemsArray.map((dashboardItem) => (
        <MainDashboardItem
          key={dashboardItem.title}
          image={dashboardItem.image}
          title={dashboardItem.title}
          link={dashboardItem.link}
        />
      ))}
    </ul>
  );
};
export default MainDashboard;
