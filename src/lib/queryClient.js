import { QueryClient } from "@tanstack/react-query";

// HTTP Yanıtlarını kontrol eden fonksiyon
async function throwIfResNotOk(res) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// API İstekleri için Genel Fonksiyon
export async function apiRequest(method, url, data) {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

// Yetkilendirme Hatası Davranışı
const getQueryFn = ({ on401 }) => async ({ queryKey }) => {
  const res = await fetch(queryKey[0], { credentials: "include" });

  if (on401 === "returnNull" && res.status === 401) {
    return null;
  }

  await throwIfResNotOk(res);
  return await res.json();
};

// React Query Client Ayarları
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
