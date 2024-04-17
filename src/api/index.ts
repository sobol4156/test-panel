import { useEffect, useState } from "react";
import { Question } from "./models";

const apiUrl = "https://661da41698427bbbef024d89.mockapi.io/qustions";

const useApiFetch = () => {
  const [data, setData] = useState<Question | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error:any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useApiFetch;
