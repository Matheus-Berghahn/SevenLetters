import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const createTransaction = async ({
    cartCode,
    customerName,
    customerEmail,
    customerMobile,
    customerDocument,
    billingAddress,
    billingNumber,
    billingNeighborhood,
    billingCity,
    billingState,
    billingZipCode,
    creditCardNumber,
    creditCardExpiration,
    creditCardHolderName,
    creditCardCvv,
    installments,
    paymentType,
}) => {
    const url = `/transactions`;

    return await api.post(url, {
        cartCode,
        customerName,
        customerEmail,
        customerMobile,
        customerDocument,
        billingAddress,
        billingNumber,
        billingNeighborhood,
        billingCity,
        billingState,
        billingZipCode,
        creditCardNumber,
        creditCardExpiration,
        creditCardHolderName,
        creditCardCvv,
        installments,
        paymentType,
    });
}