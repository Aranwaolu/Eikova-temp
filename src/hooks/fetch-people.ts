import { useEffect, useState } from "react";

import { getAllPeople } from "../services/people";

interface Minister {
  name: string;
  type: string;
}

const useFetchPeople = () => {
  const [people, setPeople] = useState<Minister[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllPeopleFn = () => {
    getAllPeople()
      .then((res) => {
        // console.log(res);
        setPeople([...res.data.people]);

        let myMinisterList = people
          .filter((person) => person.type === "minister")
          .map((item) => {
            return item.name;
          });

        let mySongMinisterList = people
          .filter((person) => person.type === "choir")
          .map((item) => {
            return item.name;
          });

        localStorage.setItem("ministers", myMinisterList.toString());
        localStorage.setItem("song_ministers", mySongMinisterList.toString());
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
