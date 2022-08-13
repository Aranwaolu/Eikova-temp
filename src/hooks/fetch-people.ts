import { useEffect, useState } from "react";

import { getAllPeople } from "../services/people";

const useFetchPeople = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllPeopleFn = () => {
    getAllPeople()
      .then((res) => {
        console.log(res);
        //  setPeople([...res.data.people])
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred, please try again");
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllPeopleFn();
  }, []);

  return { loading, people, error };
};

export default useFetchPeople;
