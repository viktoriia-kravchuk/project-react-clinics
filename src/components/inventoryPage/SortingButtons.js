import React from "react";
import { useDispatch} from "react-redux";
import { inventoryActions } from "../../store/inventory/inventory-slice";

const SortingButtons = (props) => {
  const dispatch = useDispatch();

  const ascSortingHandler = () => {
    dispatch(inventoryActions.setSorting("ASC"));
  }
  const dscSortingHandler = () => {
    dispatch(inventoryActions.setSorting("DESC"));
  }

  return (
    <div className="col-md-3 col-sm-3">
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={ascSortingHandler}
      >
        Dose Asc
      </button>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={dscSortingHandler}
      >
        Dose Dsc
      </button>
    </div>
  );
};

export default SortingButtons;
