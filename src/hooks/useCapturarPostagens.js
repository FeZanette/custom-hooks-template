import { useState } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { useEffect } from "react";

export const useCapturarPostagens = () => {
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}comments`)
      .then((response) => {
        setPostagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [postagens];
};
