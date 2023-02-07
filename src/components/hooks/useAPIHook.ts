import { useEffect, useState } from 'react';
export type ApiResponseProps = {
  status: Number,
  statusText: String,
  data: any,
  error: any,
  loading: Boolean
};

export const useApiGet = (url: string): ApiResponseProps => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setStatus(response.status);
      setStatusText(response.statusText);
      setData(json);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAPIData();
  })

  return { status, statusText, data, error, loading }
};