import { useEffect, useState } from "react";
import { APIData } from "../types";

const useUniversities = () => {
  const [univiersities, setUniversities] = useState<APIData>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUniversities = async () => {
      setLoading(true);
      const res = await fetch("https://api.publicapis.org/entries");
      const data = await res.json();
      setUniversities(data);
      setLoading(false);
    };
    fetchUniversities();
  }, []);

  return { univiersities, loading };
};

export default useUniversities;
