import { useCallback, useState } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const request = useCallback(
    async (
      url: string,
      method = "GET",
      body: BodyInit,
      headers: HeadersInit = {}
    ) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers = new Headers();
          headers.set("Content-Type", "application/json");
        }

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так");
        }

        setLoading(false);

        return data;
      } catch (e) {
        setLoading(false);
        const err = e as Error;
        setError(err.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(undefined), []);

  return { loading, request, error, clearError };
};
