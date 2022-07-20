import { useCallback, useEffect, useState } from "react";

export const useHttp = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const request = useCallback(async (url: string,method: string,body: any,headers: HeadersInit = {}) => {
      setLoading(true);
      if (body) {
        body = JSON.stringify(body);
        headers = new Headers();
        headers.set("Content-Type", "application/json");
      }
      await fetch(url, { method: method, body: body, headers })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    []
  );

  return { request, data, loading, error };
};
