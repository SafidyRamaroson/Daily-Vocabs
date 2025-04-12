import { useQuery, UseQueryResult } from "@tanstack/react-query";

// Le type des options pour GET
type GetOptions<TData> = {
  endpoint: string;
  queryKey: string;
  where?: Record<string, number | string>;
  enabled?: boolean;
};

export const fetchResources = async <TData>({
  endpoint,
  where,
}: GetOptions<TData>): Promise<TData> => {
  let url = endpoint;
  if (where) {
    const query = new URLSearchParams(where as Record<string, string>).toString();
    url = `${endpoint}?${query}`;
  }

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }

  const data: TData = await response.json();
  return data;
};

export const useGet = <TData>(options: GetOptions<TData>): UseQueryResult<TData> => {
  return useQuery<TData>({
    queryKey: [options.queryKey, options.where],
    queryFn: () => fetchResources<TData>(options),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
    retry: 3,
    enabled: options.enabled ?? true,
  });
};