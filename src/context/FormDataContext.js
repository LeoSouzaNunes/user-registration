import { createContext, useState } from "react";

const FormDataContext = createContext();

export function FormDataProvider({ children }) {
    let savedData = JSON.parse(localStorage.getItem("form"));

    if (!savedData) {
        savedData = {
            name: "",
            last: "",
            telephone: "",
            street: "",
            number: "",
            zip: "",
            city: "",
            account: "",
            iban: "",
        };
        localStorage.setItem("form", JSON.stringify(savedData));
    }

    const [formData, setFormData] = useState(savedData);

    function saveData(data) {
        setFormData({ ...data });
        localStorage.setItem("form", JSON.stringify(data));
    }

    return (
        <FormDataContext.Provider value={{ formData, saveData }}>
            {children}
        </FormDataContext.Provider>
    );
}

export default FormDataContext;
