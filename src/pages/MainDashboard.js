import React from "react";
import MainDashboardItem from "../components/MainDashboardItem";
import {
  faChartArea,
  faUserInjured,
  faComments,
  faPhone,
  faFileInvoiceDollar,
  faCapsules,
  faClinicMedical,
  faSyringe,
  faHospital,
  faUserMd,
  faTasks,
  faVideo,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

export const itemsArray = [
  {
    title: "Dashboard Analytics",
    image: "https://img.icons8.com/fluent/96/000000/financial-analytics.png",
    icon: faChartArea,
    link: "/dashboard",
  },
  {
    title: "Clinic Bill Stats",
    image: "https://img.icons8.com/fluent/96/000000/web-analystics.png",
    icon: faFileInvoiceDollar,
    link: "/dashboard/clinic-bill-stats",
  },
  {
    title: "Patients Visits Record",
    image: "https://img.icons8.com/color/96/000000/call-in-bed.png",
    icon: faUserInjured,
    link: "/dashboard/patiens/visits",
  },
  {
    title: "Follow Up Stats",
    image: "https://img.icons8.com/fluent/96/000000/feedback-hub.png",
    icon: faComments,
    link: "/dashboard/patiens/followups",
  },
  {
    title: "Call Recordings",
    image: "https://img.icons8.com/fluent/96/000000/outgoing-call.png",
    icon: faPhone,
    link: "/dashboard/call-recordings",
  },
  {
    title: "Clinics",
    image: "https://img.icons8.com/color/96/000000/clinic.png",
    icon: faHospital,
    link: "/dashboard/clinics",
  },
  {
    title: "Patiens",
    image: "https://img.icons8.com/doodle/96/000000/fever.png",
    icon: faUserInjured,
    link: "/dashboard/patiens",
  },
  {
    title: "Clinic Nurses",
    image:
      "https://img.icons8.com/color/96/000000/add-user-group-woman-man.png",
    icon: faUserMd,
    link: "/dashboard/agents",
  },
  {
    title: "Field Agents",
    image: "https://img.icons8.com/clouds/100/000000/worker-male.png",
    icon: faUserMd,
    link: "/dashboard/field-agents",
  },
  {
    title: "Field Agent Tasks",
    image: "https://img.icons8.com/nolan/96/task-planning.png",
    icon: faTasks,
    link: "/dashboard/field-agents/tasks",
  },
  {
    title: "Medicine Inventory",
    image: "https://img.icons8.com/fluent/96/000000/pill.png",
    icon: faCapsules,
    link: "/inventory/medicine-inventory",
  },
  {
    title: "Lab Tests",
    image: "https://img.icons8.com/fluent/96/000000/microscope.png",
    icon: faClinicMedical,
    link: "/inventory/clinic-lab-test",
  },
  {
    title: "Clinic Services",
    image: "https://img.icons8.com/nolan/96/syringe.png",
    icon: faSyringe,
    link: "/dashboard/clinic/services",
  },
  {
    title: "Instructional Videos",
    image: "https://img.icons8.com/color/96/000000/camcorder-pro.png",
    icon: faVideo,
    link: "/dashboard/instructional-videos",
  },
  {
    title: "Clinic Audit",
    image: "https://img.icons8.com/color/96/000000/activity-history.png",
    icon: faClipboardList,
    link: "/audit/activities",
  },
  {
    title: "Expenses",
    image: "https://img.icons8.com/fluent/96/000000/card-in-use.png",
    icon: faFileInvoiceDollar,
    link: "/expense/all",
  },
];

const MainDashboard = () => {
  const itemsList = itemsArray.map((dashboardItem) => (
    <MainDashboardItem
      key={dashboardItem.title}
      image={dashboardItem.image}
      title={dashboardItem.title}
      link={dashboardItem.link}
    />
  ));

  return (
    <div className="home-page">
      <div style={{ paddingTop: "6%", paddingLeft: "5%", paddingRight: "5%" }}>
        <div className="row">{itemsList}</div>
      </div>
    </div>
  );
};
export default MainDashboard;
