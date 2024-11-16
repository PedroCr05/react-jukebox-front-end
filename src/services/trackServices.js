const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;
import axios from "axios";

const index = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const create = async () => {
  try {
    const res = await axios.create(BASE_URL, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { create, index };
