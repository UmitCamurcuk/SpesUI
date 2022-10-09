import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const baseURL = "http://127.0.0.1:5000/auth/login";



export const Login = async (data) => {
  const user = useSelector((state) => state.Login.user)
  const dispatch = useDispatch();
  console.log(user);
  await axios
    .post(baseURL, data)
    .then((response) => {
      if (response.error) return false
      
      localStorage.setItem('user', true);
    }).then(
  );
}

