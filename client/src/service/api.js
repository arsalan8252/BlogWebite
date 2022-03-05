import axios from "axios";

const url = "http://localhost:4000";

export const createP = async (post) => {
  try {
    return await axios.post(`${url}/create`, post);
  } catch (error) {
    console.log("Error while calling createPost api ", error);
  }
};
