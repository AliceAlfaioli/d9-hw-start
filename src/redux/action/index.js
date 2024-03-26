export const ADD_TO_PREFER = "ADD_TO_PREFER";
export const DELETE_FROM_PREFER = "DELETE_FROM_PREFER";

export const AddToJobAction = (Preferito) => {
  return {
    type: ADD_TO_PREFER,
    payload: Preferito,
  };
};

export const deleteFromJobAction = function (i) {
  return {
    type: DELETE_FROM_PREFER,
    payload: i,
  };
};
