import { useState, useEffect } from "react"; // useState is a function which is used to manuplate dom

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true); // we are using this to have a loading message
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("cannot fetch the data from the server");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false); // after the data has been fetched the loading message state is set to false
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]); //whenever url changes the useEffect function is ran again

  return { data, isPending, error };
};

export default useFetch;
