import * as actions from "../actions/types";

const initialState: PeopleState = {
  peoples: [
    {
      id: 1,
      username: "otsi",
      password: "otsi",
    },
    {
      id: 2,
      username: "otis",
      password: "otis",
    },
  ],
};

const reducer = (
  state: PeopleState = initialState,
  action: PeopleAction
): PeopleState => {
  switch (action.type) {
    case actions.ADD_PEOPLE:
      const newPeople: IPeople = {
        id: Math.random(),
        username: action.people.username,
        password: action.people.password,
      };
      return {
        ...state,
        peoples: state.peoples.concat(newPeople),
      };
    case actions.REMOVE_PEOPLE:
      const updatePeople: IPeople[] = state.peoples.filter(
        (people) => people.id !== action.people.id
      );
      return {
        ...state,
        peoples: updatePeople,
      };
  }
  return state;
};

export default reducer;
