import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Header, Input } from "../../components";
import useFormData from "../../hook/useFormData";

export default function AddressInformation() {
    const { formData, saveData } = useFormData();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;

        saveData({ ...formData, [key]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/registration/payment-info");
    };

    return (
        <Container>
            <Header title="Address information" />
            <Form onSubmit={onSubmit}>
                <Input
                    inputId="street"
                    label="Street address"
                    placeholder="Your street address"
                    value={formData.street}
                    onChange={handleChange}
                />
                <Input
                    inputId="number"
                    label="Number address"
                    placeholder="Your number address"
                    value={formData.number}
                    onChange={handleChange}
                />
                <Input
                    inputId="zip"
                    label="Zip code"
                    placeholder="Your zip code"
                    value={formData.zip}
                    onChange={handleChange}
                />
                <Input
                    inputId="city"
                    label="City"
                    placeholder="Hamburg"
                    value={formData.city}
                    onChange={handleChange}
                />
                <Button text="Next" />
            </Form>
        </Container>
    );
}
