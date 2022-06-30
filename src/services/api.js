import axios from "axios";

async function postPayment(paymentData) {
    const response = await axios.post(
        "https://thingproxy.freeboard.io/fetch/https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data",
        paymentData
    );

    return response.data;
}

const api = { postPayment };

export default api;
