import { useContext } from "react";
import FormDataContext from "../context/FormDataContext";

export default function useFormData() {
    return useContext(FormDataContext);
}
