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

const create = async (formData) => {
  try {
    const res = await axios.create(BASE_URL, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteTrack = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const update = async (formData, id) => {
  try {
    const res = await axios.put(`${BASE_URL}/${id}`, formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { create, deleteTrack, index, update };
