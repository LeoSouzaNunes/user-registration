import {
    Button,
    Container,
    Form,
    Header,
    Input,
    Loader,
    Success,
} from "../../components";
import useFormData from "../../hook/useFormData";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import api from "../../services/api";
import { Navigate } from "react-router-dom";

export default function PaymentInformation() {
    const { formData, saveData } = useFormData();
    const [loading, setLoading] = useState(false);

    if (shouldRedirect()) {
        return <Navigate to="/registration/address-info" />;
    }
    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;

        saveData({ ...formData, [key]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        sendPaymentData(formData.account, formData.iban);
    };

    function shouldRedirect() {
        const lastPageKeys = ["street", "number", "zip", "city"];
        for (const key in formData) {
            if (lastPageKeys.includes(key) && !formData[key].length) {
                return true;
            }
        }
        return false;
    }

    const sendPaymentData = async (owner, iban) => {
        setLoading(true);
        try {
            const { paymentDataId: paymentId } = await api.postPayment({
                customerId: uuid(),
                owner,
                iban,
            });

            saveData({ ...formData, paymentId });
            await api.savePaymentId(paymentId);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (formData.paymentId) {
        return (
            <Container>
                <Header title="Payment made successfully" />
                <Success paymentId={formData.paymentId} />
            </Container>
        );
    }

    return (
        <Container>
            <Header title="Payment information" />
            {loading ? (
                <Loader />
            ) : (
                <Form onSubmit={onSubmit}>
                    <Input
                        inputId="account"
                        label="Account Owner"
                        placeholder="Account owner name"
                        value={formData.account}
                        onChange={handleChange}
                    />
                    <Input
                        inputId="iban"
                        label="IBAN"
                        placeholder="Germany example: DE91 1000 0000 0123 4567 89"
                        value={formData.iban}
                        onChange={handleChange}
                    />
                    <Button text="Submit" />
                </Form>
            )}
        </Container>
    );
}
