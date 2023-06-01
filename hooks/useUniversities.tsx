import { useEffect, useState } from "react";
import message from "antd/lib/message";
import { APIData } from "../types";

const useUniversities = () => {
  const [univiersities, setUniversities] = useState<APIData>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://api.publicapis.org/entries");
        const data = await res.json();
        setUniversities(data);
        message.success("Data fetched successfully!");
      } catch (err: any) {
        message.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUniversities();
  }, []);

  return { univiersities, loading };
};

export default useUniversities;
