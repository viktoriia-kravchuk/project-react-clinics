import React from "react";
import { useSelector } from "react-redux";
import TestsHeader from "./TestsHeader";
import TestsBody from "./TestsBody";

const TestsTable = (props) => {
    const labTests = useSelector(state => state.labTests);
    const clinicName = labTests.clinicLabTests.clinic.name;  
    const allTests = [...labTests.clinicLabTests.lab_tests]
    console.log(labTests, "TESTS PAGE");

    return <div className="card">
        <TestsHeader name={clinicName}/>
        <TestsBody tests={allTests}/>
    </div>
}

export default TestsTable;