import * as actions from "./types";

export function addPeople(people: IPeople) {
  const action: PeopleAction = {
    type: actions.ADD_PEOPLE,
    people,
  };

  return simulateHttpRequest(action);
}

export function removePeople(people: IPeople) {
  const action: PeopleAction = {
    type: actions.REMOVE_PEOPLE,
    people,
  };

  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: PeopleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
