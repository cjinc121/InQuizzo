import axios from "axios";
axios.defaults.withCredentials = true;

const api = "https://api-inquizzo.herokuapp.com/api/v1";

export const getAllQuiz = async () => {
  try {
    const { data, status } = await axios.get(`${api}/quiz/all`);
    if (status === 200) return data;
  } catch (err) {
    console.log(err);
  }
};
