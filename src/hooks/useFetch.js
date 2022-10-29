import request from '@/utils/request';
import { useCallback, useEffect, useState } from 'react';

const useFetch = ({ url, initialData, loading = true, onError = () => null }) => {
  const [apiUrl, setUrl] = useState(url);
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(loading);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState([]);

  const makeRequest = useCallback(() => {
    let isAborted = false;

    const fetchData = async () => {
      try {
        const response = await request(apiUrl);
        if (response.success || response.status) {
          if (!isAborted) {
            setData(response.data);
          }
        }
      } catch (error) {
        setErrors(error);
        setIsError(true);
        onError();
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isAborted = true;
    };
  }, [apiUrl]);

  const refetch = () => {
    makeRequest();
  };

  useEffect(makeRequest, [makeRequest, apiUrl]);

  return { data, setData, isLoading, isError, errors, setUrl, refetch };
};

export default useFetch;
