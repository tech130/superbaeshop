import { useReducer } from "react";
import formReducer from "./formReducer";

const useFormReducer = init => useReducer(formReducer, init);

export default useFormReducer;
