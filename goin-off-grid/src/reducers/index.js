import masterFormReducer from "./master-form-reducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { firestoreReducer } from "redux-firestore";
import loginReducer from "./login-reducer";

const rootReducer = combineReducers({
  masterForm: masterFormReducer,
  form: formReducer,
  firestore: firestoreReducer,
  login: loginReducer,
});

export default rootReducer;
