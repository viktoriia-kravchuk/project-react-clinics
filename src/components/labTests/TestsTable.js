import React, {useState} from "react";
import { useSelector } from "react-redux";
import TestsHeader from "./TestsHeader";
import TestsBody from "./TestsBody";

const TestsTable = (props) => {
    const labTests = useSelector(state => state.labTests);
    const clinicName = labTests.clinicLabTests.clinic.name;  
    const allTests = [...labTests.clinicLabTests.lab_tests];
    const [searchInput, setSearchInput] = useState("");


    const handleInputChange = (event) => {
      const { value } = event.target;
      setSearchInput(value);
    };
  
    let searchedTests = allTests.filter((test) => {
      if (searchInput !== null) {
        return test.name
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      }
      return test;
    });

    console.log(labTests, "TESTS PAGE");

    return <div className="card">
        <TestsHeader name={clinicName} handleInputChange = {handleInputChange}/>
        <TestsBody tests={searchedTests} name={clinicName}/>
    </div>
}

export default TestsTable;