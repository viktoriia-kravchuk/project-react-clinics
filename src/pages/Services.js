import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNavigation from "../components/UI/SideNavigation";
import ServicesTableHeader from "../components/servicesPage/ServicesTableHeader";
import { fetchClinicsData } from "../store/clinics-actions";
import ServicesTable from "../components/servicesPage/ServicesTable";

let isInitial = true;

const Services = (props) => {
  const services = useSelector(state => state.services);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClinicsData());
    if (isInitial) {
      isInitial = false;
      return;
    }
  }, [dispatch]);
  
    return (
        <div className="row">
          <div className="col-md-12">
            <SideNavigation />
            <div className="col-md-10 col-xs-12 col-md-offset-2 col-xs-offset-0 report-div">
              <div className="card shadow border-left-primary">
                <ServicesTableHeader clinicServices={services}/>
                <ServicesTable clinicServices={services.clinicServices}/>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Services;