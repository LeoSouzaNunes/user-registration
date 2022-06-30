import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FormDataProvider } from "./context/FormDataContext";
import {
    AddressInformation,
    PersonalInformation,
    PaymentInformation,
} from "./pages";

function App() {
    return (
        <FormDataProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="registration/personal-info"
                        element={<PersonalInformation />}
                    />
                    <Route
                        path="registration/address-info"
                        element={<AddressInformation />}
                    />
                    <Route
                        path="registration/payment-info"
                        element={<PaymentInformation />}
                    />
                    <Route
                        path="registration/success"
                        element={<h1>Success</h1>}
                    />
                    <Route
                        path="/*"
                        element={<Navigate to="/registration/personal-info" />}
                    />
                </Routes>
            </BrowserRouter>
        </FormDataProvider>
    );
}

export default App;
