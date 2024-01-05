import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async (controller) => {
      try {
        const res = await fetch(url, {
          signal: controller.signal
        });
        if (!res.ok) {
          throw new Error('Запрос неудачный, статус'+res.status);
        }
        const data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchData(abortController);

    return () => {
      console.log('cleanup');
      return abortController.abort();
    }
  }, [url]);

  return {data};
}

export default useFetch;