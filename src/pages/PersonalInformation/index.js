import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Header, Input } from "../../components";
import useFormData from "../../hook/useFormData";

export default function PersonalInformation() {
    const { formData, saveData } = useFormData();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;

        saveData({ ...formData, [key]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/registration/address-info");
    };

    return (
        <Container>
            <Header title="Personal information" />
            <Form onSubmit={onSubmit}>
                <Input
                    inputId="name"
                    label="First Name"
                    placeholder="Your first name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <Input
                    inputId="last"
                    label="Last Name"
                    placeholder="Your last name"
                    value={formData.last}
                    onChange={handleChange}
                />
                <Input
                    inputId="telephone"
                    label="Telephone"
                    placeholder="+49 173 1234 567 incl. country code"
                    value={formData.telephone}
                    onChange={handleChange}
                />
                <Button text="Next" />
            </Form>
        </Container>
    );
}
