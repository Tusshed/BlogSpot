import { useCallback, useEffect, useState } from "react";

//useFetch

const useFetch = (url) => {
  //states
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(
    async (abortCont) => {
      try {
        const res = await fetch(url, { signal: abortCont.signal });

        if (!res.ok) {
          throw Error("Could Not Reach Database");
        }
        const database = await res.json();

        setData(database);
        setIsLoading(false);
        setError(null);
      } catch (err) {
        if (err.name === "AbortController") {
          console.log("fetch aborted");
        } else {
          setIsLoading(false);
          setError(false);
        }
      }
    },
    [url]
  );

  //USEeFFECT
  useEffect(() => {
    const abortCont = new AbortController();
    getData(abortCont);
    return () => abortCont.abort();
  }, [getData]);
  //url is used for the dependency, was used in useFetch(param),fetch and
  return { data, isLoading, error };
  //returned states in curled braces{}
};

export default useFetch;
