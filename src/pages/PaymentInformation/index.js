import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Header, Input } from "../../components";
import useFormData from "../../hook/useFormData";

export default function PaymentInformation() {
    const { formData, saveData } = useFormData();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;

        saveData({ ...formData, [key]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/registration/success");
    };

    return (
        <Container>
            <Header title="Payment information" />
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
        </Container>
    );
}
