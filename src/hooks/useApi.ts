import { useCallback, useEffect, useState } from 'react';
import { client } from '../api/client';
import { useSnackBar } from './useSnackBar';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
  post: (
    endpoint: string,
    body: unknown,
    successMessage?: string,
  ) => Promise<T | null>;
  patch: (
    endpoint: string,
    body: unknown,
    successMessage?: string,
  ) => Promise<T | null>;
  del: (endpoint: string, successMessage?: string) => Promise<void>;
}

export function useApi<T>(endpoint: string): ApiState<T> {
  const { showError, showSuccess } = useSnackBar();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRequest = useCallback(
    async <R>(fn: () => Promise<R>): Promise<R | null> => {
      setLoading(true);
      setError(null);
      try {
        const res = await fn();
        return res;
      } catch (err) {
        setError((err as Error).message);
        showError('Request failed');
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const fetchData = useCallback(async () => {
    await handleRequest(async () => {
      const res = await client.get<T>(endpoint);
      setData(res);
      return res;
    });
  }, [endpoint, handleRequest]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const post = async (path: string, body: unknown, successMessage?: string) => {
    const res = await handleRequest(() => client.post<T>(path, body));
    if (res) showSuccess(successMessage ?? 'Created successfully');
    return res;
  };

  const patch = async (
    path: string,
    body: unknown,
    successMessage?: string,
  ) => {
    const res = await handleRequest(() => client.patch<T>(path, body));
    if (res) showSuccess(successMessage ?? 'Updated successfully');
    return res;
  };

  const del = async (path: string, successMessage?: string) => {
    const res = await handleRequest(() => client.delete(path));
    if (res !== null) showSuccess(successMessage ?? 'Deleted successfully');
  };

  return { data, loading, error, refresh: fetchData, post, patch, del };
}
