import axios from "axios";

export const payment = async (token) =>
  await axios.post(
    "https://ecom-server-api.vercel.app/api/user/create-payment-intent",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
