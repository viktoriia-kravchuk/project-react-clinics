import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendClinicTestData } from "../../store/labTests/labTests-actions";
import { labTestsActions } from "../../store/labTests/labTests-slice";
import Modal from "../UI/Modal";
import UpdatePriceForm from "./UpdatePriceForm";
import UpdateTestForm from "./UpdateTestForm";

const TestsBody = (props) => {
  const dispatch = useDispatch();
  const tests = useSelector((state) => state.labTests);
  const [showUpdatePriceForm, setShowUpdateForm] = useState(false);
  const [showUpdateTestForm, setShowUpdateTestForm] = useState(false);
  const [updatedTest, setUpdatedTest] = useState(null);

  const showUpdateHandler = (test, action) => {
    const arrayIndex = tests.clinicLabTests.lab_tests.findIndex(
      (clinicTest) => clinicTest.id === test.id
    );
    if (action === "update price") {
      setShowUpdateForm(true);
    } else if (action === "update test") {
      setShowUpdateTestForm(true);
    }
    const tempTest = {
      ...test,
      arrayIndex: arrayIndex,
    };
    setUpdatedTest(tempTest);
  };

  const hideUpdateFormHandler = () => {
    setShowUpdateForm(false);
    setShowUpdateTestForm(false);
    setUpdatedTest(null);
  };
  //console.log("states log",showUpdatePriceForm, showUpdateTestForm, updatedTest)

  const updateTestHandler = (test) => {
    dispatch(labTestsActions.updateLabTest(test));
    const timer = setTimeout(() => {
      hideUpdateFormHandler();
    }, 3000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (tests.changed && updatedTest) {
      dispatch(
        sendClinicTestData(
          tests.clinicId,
          tests.clinicLabTests.lab_tests[updatedTest.arrayIndex],
          updatedTest.arrayIndex
        )
      );
    }
  }, [tests, dispatch]);

  return (
    <div className="card">
      <table className="table table-bordered table-responsive">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Code</th>
            <th>Done By</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {props.tests.map((test, i) => (
            <tr key={test.id}>
              <td>{test.id}</td>
              <td>{test.name}</td>
              <td>{test.code}</td>
              <td>{test.done_by}</td>
              <td>₹ {test.price}</td>
              <td style={{ width: "21%" }}>
                <button
                  className="btn btn-success btn-sm m-2"
                  onClick={(event) => showUpdateHandler(test, "update price")}
                >
                  Update Price
                </button>
                <button
                  className="btn btn-success btn-sm"
                  onClick={(event) => showUpdateHandler(test, "update test")}
                >
                  Update Lab Test
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showUpdatePriceForm && (
        <Modal onClose={hideUpdateFormHandler} header="Lab Test Price">
          <UpdatePriceForm
            test={updatedTest}
            clinic={props.name}
            onClose={hideUpdateFormHandler}
            updatePriceHandler={updateTestHandler}
          />
        </Modal>
      )}
      {showUpdateTestForm && (
        <Modal onClose={hideUpdateFormHandler} header="Lab Test Update">
          <UpdateTestForm
            test={updatedTest}
            clinic={props.name}
            onClose={hideUpdateFormHandler}
            updateTestHandler={updateTestHandler}
          />
        </Modal>
      )}
    </div>
  );
};

export default TestsBody;
