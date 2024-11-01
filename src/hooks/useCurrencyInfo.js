import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  const date = `${year}-${month}-${day}`;

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`;

    const altUrl = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;

    setData(
      fetch(url)
        .then((res) => {
          if (!res.ok) return fetch(altUrl);
          return res;
        })
        .then((res) => res.json())
        .then((result) => setData(result[currency]))
    );
  }, [currency]);

  return data;
}
