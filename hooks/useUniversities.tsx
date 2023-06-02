import { useEffect, useState } from "react";
import message from "antd/lib/message";
import { APIData } from "../types";

const useUniversities = () => {
  const [univiersities, setUniversities] = useState<APIData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        setLoading(true);
        // I want to calulate the time it takes to fetch the data
        const start = Date.now();
        const res = await fetch("https://api.publicapis.org/entries");
        const data = await res.json();
        const end = Date.now();
        setTime(end - start);
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

  return { univiersities, loading, time };
};

export default useUniversities;
