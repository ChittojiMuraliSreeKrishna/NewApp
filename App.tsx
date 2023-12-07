import { StyleSheet, Text, View } from "react-native";
import StartNavigation from "./src/Navigation/StartNavigation";
import { Provider } from "react-redux";
import reducer from "./src/redux/reducers/authReducer";
import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";

export default function App() {
  const store: Store<PeopleState, PeopleAction> & {
    dispatch: DispatchType;
  } = createStore(reducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <StartNavigation />
    </Provider>
  );
}
