import React, { useContext } from "react";

export const formcontext = React.createContext(null);
const useForm = () => useContext(formcontext);

export default useForm;
