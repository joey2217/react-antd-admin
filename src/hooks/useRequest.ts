import { useCallback, useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import request from "../utils/request";

export default function useRequest<T>(
  reqConfig: AxiosRequestConfig,
  autoRun = true
) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const run = useCallback(() => {
    request(reqConfig)
      .then(({ data }) => {
        setLoading(true);
        setData(data);
        return data;
      })
      .catch((error) => {
        // TODO handle error
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [reqConfig]);

  useEffect(() => {
    console.log(autoRun, run, reqConfig, "-------------------");
    if (autoRun) {
      run();
    }
  }, [autoRun, reqConfig, run]);

  return {
    loading,
    data,
    run,
  };
}
