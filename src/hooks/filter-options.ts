import { useState, useEffect, useCallback, useMemo } from "react";
import { getAllPreachers, getChoir } from "../services/filter";

const useFilterOptions = () => {
  const defaultValues = useMemo(() => {
    return [
      { name: "All Preachers" },
      { name: "Rev. Kayode Oyegoke" },
      { name: "Rev. Kayode Oyegoke" },
      { name: "Rev. Kayode Oyegoke" },
      { name: "Rev. Kayode Oyegoke" },
      { name: "Rev. Kayode Oyegoke" },
      { name: "Rev. Kayode Oyegoke" },
    ];
  }, []);
  const [activeTab, setActiveTab] = useState(0);
  const [filterValues, setFilterValues] = useState(defaultValues);
  const [filterOptionsLoading, setLoading] = useState(true);

  const handlePreachersFilterOptions = useCallback(() => {
    setLoading(true);
    setFilterValues(defaultValues);
    getAllPreachers()
      .then((res) => {
        console.log(res.data.people);
        setFilterValues([{ name: "All Preachers" }, ...res.data.people]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, [defaultValues]);

  const handleChoirFilterOptions = useCallback(() => {
    setLoading(true);
    setFilterValues(defaultValues);
    getChoir()
      .then((res) => {
        console.log(res.data.people);
        setFilterValues([{ name: "All Choir" }, ...res.data.people]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [defaultValues]);

  useEffect(() => {
    if (activeTab === 1) {
      handlePreachersFilterOptions();
    } else if (activeTab === 2) {
      handleChoirFilterOptions();
    } else {
      setFilterValues([]);
    }
  }, [activeTab, handleChoirFilterOptions, handlePreachersFilterOptions]);
  return { filterValues, filterOptionsLoading, setActiveTab };
};
export default useFilterOptions;
