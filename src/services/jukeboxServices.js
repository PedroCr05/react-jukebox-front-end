const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/jukebox`;
import axios from "axios";

const index = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export { index };
