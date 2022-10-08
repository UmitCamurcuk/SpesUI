import axios from "axios";
const baseURL = "http://127.0.0.1:5000/auth/login";


export const Login = async (data) => {
  await axios
    .post(baseURL, data)
    .then((response) => {
      if (response.error) return false
      localStorage.setItem('user', true);
    }).then(
  );
}

